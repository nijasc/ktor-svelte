const marker = 'data-ktor-svelte-kotlin';
let errors = [];
let dismissed = '';

function key(list) {
    return JSON.stringify(list);
}

function render() {
    document.querySelectorAll(`[${marker}]`).forEach((node) => node.remove());
    if (errors.length === 0 || dismissed === key(errors)) return;
    const first = errors[0];
    const more = errors.length > 1 ? ` (and ${errors.length - 1} more)` : '';
    const message = `Kotlin does not compile: ${first.message}${more}`;
    const list = errors.map((error) => `${error.file}:${error.line}:${error.column}\n    ${error.message}`).join('\n');
    const frame = `${list}\n\nThe app keeps running the last version that compiled.`;
    const Overlay = customElements.get('vite-error-overlay');
    let node;
    if (Overlay) {
        node = new Overlay({
            message,
            stack: frame,
            plugin: 'ktor-svelte',
            id: first.file,
            loc: { file: first.file, line: first.line, column: first.column }
        });
    } else {
        node = document.createElement('pre');
        node.textContent = `${message}\n\n${frame}`;
        node.style.cssText =
            'position:fixed;inset:0;z-index:99999;margin:0;padding:24px;overflow:auto;background:rgba(0,0,0,.85);color:#ff8080;font:13px/1.5 monospace;white-space:pre-wrap';
    }
    node.setAttribute(marker, '');
    node.addEventListener('click', () => {
        dismissed = key(errors);
    });
    document.body.appendChild(node);
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && errors.length > 0) dismissed = key(errors);
});

new MutationObserver(() => {
    if (errors.length > 0 && dismissed !== key(errors) && !document.querySelector(`[${marker}]`)) render();
}).observe(document.documentElement, { childList: true, subtree: true });

const viteOverlay = Promise.race([
    customElements.whenDefined('vite-error-overlay'),
    new Promise((resolve) => setTimeout(resolve, 3000))
]);

new EventSource('/_ktor-svelte/dev/compile-errors').onmessage = async (event) => {
    const next = JSON.parse(event.data);
    await viteOverlay;
    errors = next;
    render();
};

const panelStyles = `
:host { all: initial; }
.toggle { position: fixed; right: 12px; bottom: 12px; z-index: 99998; display: flex; gap: 6px; align-items: center; padding: 6px 10px; border: 0; border-radius: 999px; background: #1f1b3a; color: #fff; font: 12px/1 system-ui, sans-serif; cursor: pointer; box-shadow: 0 2px 8px rgba(0,0,0,.3); }
.badge { padding: 2px 6px; border-radius: 999px; background: #c0392b; }
.panel { position: fixed; right: 12px; bottom: 48px; z-index: 99998; width: min(560px, calc(100vw - 24px)); max-height: 50vh; overflow: auto; border-radius: 8px; background: #1f1b3a; color: #eee; font: 12px/1.4 ui-monospace, monospace; box-shadow: 0 4px 16px rgba(0,0,0,.4); }
.panel[hidden] { display: none; }
.head { position: sticky; top: 0; display: flex; justify-content: space-between; padding: 8px 10px; background: #2b2650; font-family: system-ui, sans-serif; }
.head button { border: 0; background: none; color: #bbb; cursor: pointer; font: inherit; }
.row { display: grid; grid-template-columns: 52px 1fr 40px 64px; gap: 8px; padding: 4px 10px; border-top: 1px solid #2b2650; }
.path { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.ok { color: #7bd88f; } .warn { color: #f3c969; } .bad { color: #ff7b72; }
.ms { text-align: right; color: #aaa; }
.fields { grid-column: 2 / -1; color: #f3c969; white-space: pre-wrap; }
.empty { padding: 10px; color: #aaa; font-family: system-ui, sans-serif; }
`;

function statusClass(status) {
    if (status >= 500) return 'bad';
    if (status >= 400) return 'warn';
    return 'ok';
}

function startPanel() {
    const host = document.createElement('div');
    host.setAttribute('data-ktor-svelte-panel', '');
    const root = host.attachShadow({ mode: 'open' });
    root.innerHTML = `<style>${panelStyles}</style>
        <button class="toggle" type="button" aria-expanded="false">API <span class="count">0</span></button>
        <section class="panel" hidden aria-label="API requests">
            <div class="head"><strong>API requests</strong><button type="button" class="clear">Clear</button></div>
            <div class="list"><div class="empty">No API calls yet.</div></div>
        </section>`;
    const toggle = root.querySelector('.toggle');
    const panel = root.querySelector('.panel');
    const list = root.querySelector('.list');
    const count = root.querySelector('.count');
    let entries = [];
    const draw = () => {
        const failed = entries.filter((entry) => entry.status >= 400).length;
        count.textContent = String(entries.length);
        count.className = failed > 0 ? 'count badge' : 'count';
        list.replaceChildren();
        if (entries.length === 0) {
            list.innerHTML = '<div class="empty">No API calls yet.</div>';
            return;
        }
        for (const entry of [...entries].reverse()) {
            const row = document.createElement('div');
            row.className = 'row';
            row.title = entry.id ? `X-Request-Id: ${entry.id}` : '';
            const cells = [
                [entry.method, ''],
                [entry.path, 'path'],
                [String(entry.status), statusClass(entry.status)],
                [`${entry.ms.toFixed(entry.ms < 10 ? 1 : 0)} ms`, 'ms']
            ];
            for (const [text, className] of cells) {
                const cell = document.createElement('span');
                cell.textContent = text;
                cell.className = className;
                row.append(cell);
            }
            if (entry.fields) {
                const fields = document.createElement('span');
                fields.className = 'fields';
                fields.textContent = Object.entries(entry.fields)
                    .map(([field, messages]) => `${field}: ${messages.join(' ')}`)
                    .join('\n');
                row.append(fields);
            }
            list.append(row);
        }
    };
    toggle.addEventListener('click', () => {
        panel.hidden = !panel.hidden;
        toggle.setAttribute('aria-expanded', String(!panel.hidden));
    });
    root.querySelector('.clear').addEventListener('click', () => {
        entries = [];
        draw();
    });
    const source = new EventSource('/_ktor-svelte/dev/requests');
    source.onopen = () => {
        entries = [];
        draw();
    };
    source.onmessage = (event) => {
        entries.push(JSON.parse(event.data));
        if (entries.length > 100) entries.shift();
        draw();
    };
    document.body.append(host);
}

if (new URL(import.meta.url).searchParams.has('panel')) {
    if (document.body) startPanel();
    else document.addEventListener('DOMContentLoaded', startPanel);
}
