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

const serverErrorMarker = 'data-ktor-svelte-server-error';

function hideServerError() {
    document.querySelectorAll(`[${serverErrorMarker}]`).forEach((node) => node.remove());
}

function showServerError(entry) {
    hideServerError();
    if (errors.length > 0 && dismissed !== key(errors)) return;
    const error = entry.error;
    const message = `${entry.method} ${entry.path} failed on the server: ${error.type}${error.message ? `: ${error.message}` : ''}`;
    const stack = error.lines.map((line) => line.text).join('\n');
    const own = error.lines.find((line) => line.path);
    const Overlay = customElements.get('vite-error-overlay');
    let node;
    if (Overlay) {
        node = new Overlay({
            message,
            stack,
            plugin: 'ktor-svelte',
            id: own?.path,
            loc: own ? { file: own.path, line: own.line, column: 1 } : undefined
        });
    } else {
        node = document.createElement('pre');
        node.textContent = `${message}\n\n${stack}`;
        node.style.cssText =
            'position:fixed;inset:0;z-index:99999;margin:0;padding:24px;overflow:auto;background:rgba(0,0,0,.85);color:#ff8080;font:13px/1.5 monospace;white-space:pre-wrap';
    }
    node.setAttribute(serverErrorMarker, '');
    node.addEventListener('click', hideServerError);
    document.body.appendChild(node);
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') hideServerError();
});

const viteOverlay = Promise.race([
    customElements.whenDefined('vite-error-overlay'),
    new Promise((resolve) => setTimeout(resolve, 3000))
]);

const features = new URL(import.meta.url).searchParams;
const plainFetch = window.fetch.bind(window);
const CONFIG_OVERRIDES = 'ktor-svelte:config-overrides';
const CONFIG_PATH = '/_ktor-svelte/config.json';

function configOverrides() {
    try {
        const stored = JSON.parse(localStorage.getItem(CONFIG_OVERRIDES) ?? '{}');
        return stored && typeof stored === 'object' && !Array.isArray(stored) ? stored : {};
    } catch {
        return {};
    }
}

function saveConfigOverrides(overrides) {
    if (Object.keys(overrides).length === 0) localStorage.removeItem(CONFIG_OVERRIDES);
    else localStorage.setItem(CONFIG_OVERRIDES, JSON.stringify(overrides));
}

function overridePublicConfig() {
    const overrides = configOverrides();
    if (Object.keys(overrides).length === 0) return;
    const inline = document.getElementById('ktor-svelte-config');
    if (inline?.textContent) {
        try {
            inline.textContent = JSON.stringify({ ...JSON.parse(inline.textContent), ...overrides });
        } catch {
            inline.textContent = inline.textContent;
        }
    }
    const send = window.fetch;
    window.fetch = async function (input, init) {
        const response = await send.call(this, input, init);
        try {
            const url = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url;
            if (new URL(url, location.href).pathname !== CONFIG_PATH || !response.ok) return response;
            const headers = new Headers(response.headers);
            headers.delete('content-length');
            headers.delete('content-encoding');
            const merged = { ...(await response.clone().json()), ...overrides };
            return new Response(JSON.stringify(merged), { status: response.status, headers });
        } catch {
            return response;
        }
    };
}

function routeMap(root) {
    const section = root.querySelector('.routes');
    const rows = root.querySelector('.routes-rows');
    const filter = root.querySelector('.routes-filter');
    const note = root.querySelector('.routes-note');
    let all = [];

    function fileButton(entry) {
        const where = entry.line ? `${entry.file}:${entry.line}` : entry.file;
        if (!entry.sourcePath) {
            const text = document.createElement('span');
            text.className = 'routes-file';
            text.textContent = where ?? '';
            return text;
        }
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'routes-file';
        button.textContent = where;
        button.title = `Open ${where} in your editor`;
        button.addEventListener('click', () => openInEditor({ path: entry.sourcePath, line: entry.line ?? 1 }));
        return button;
    }

    function draw() {
        const wanted = filter.value.trim().toLowerCase();
        const shown = all.filter((entry) => `${entry.method} ${entry.path} ${entry.file ?? ''}`.toLowerCase().includes(wanted));
        rows.replaceChildren(
            ...shown.map((entry) => {
                const row = document.createElement('div');
                row.className = 'routes-row';
                const method = document.createElement('span');
                method.textContent = entry.method;
                let path;
                if (entry.method === 'PAGE' && !/[[\]]/.test(entry.path)) {
                    path = document.createElement('a');
                    path.href = entry.path;
                } else {
                    path = document.createElement('span');
                }
                path.className = 'path';
                path.textContent = entry.path;
                row.append(method, path, fileButton(entry));
                return row;
            })
        );
        note.textContent = shown.length === all.length ? `${all.length} in all` : `${shown.length} of ${all.length}`;
    }

    async function load() {
        try {
            const response = await plainFetch('/_ktor-svelte/dev/routes', { headers: { accept: 'application/json' } });
            const map = await response.json();
            all = [...map.pages.map((page) => ({ method: 'PAGE', ...page })), ...map.routes.filter((route) => route.api)];
            const docs = root.querySelector('.routes-docs');
            docs.hidden = !map.docs;
            if (map.docs) docs.href = map.docs;
            draw();
        } catch {
            note.textContent = 'The route map could not be loaded.';
        }
    }

    section.addEventListener('toggle', () => {
        if (section.open) void load();
    });
    filter.addEventListener('input', draw);
}

const UNTRANSLATED = 'data-ktor-svelte-untranslated';
const OUTLINE_UNTRANSLATED = 'ktor-svelte:outline-untranslated';

function untranslatedTexts(root) {
    const section = root.querySelector('.untranslated');
    const rows = root.querySelector('.untranslated-rows');
    const outline = root.querySelector('.untranslated-outline');
    const host = root.host;
    let listed = '';
    outline.checked = localStorage.getItem(OUTLINE_UNTRANSLATED) === 'on';

    const style = document.createElement('style');
    style.textContent = `[${UNTRANSLATED}] { outline: 2px dashed #e0a800 !important; outline-offset: 2px; }`;
    document.head.append(style);

    function mark(texts) {
        const marked = new Set();
        if (outline.checked && texts.size > 0) {
            const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
            for (let node = walker.nextNode(); node; node = walker.nextNode()) {
                const found = texts.get(node.nodeValue.trim());
                const element = node.parentElement;
                if (!found || !element || host.contains(element)) continue;
                if (element.getAttribute(UNTRANSLATED) !== found.key) element.setAttribute(UNTRANSLATED, found.key);
                marked.add(element);
            }
        }
        document.querySelectorAll(`[${UNTRANSLATED}]`).forEach((element) => {
            if (!marked.has(element)) element.removeAttribute(UNTRANSLATED);
        });
    }

    function refresh() {
        const texts = globalThis.__ktorSvelteUntranslated ?? new Map();
        const shown = [...texts].map(([text, found]) => `${found.key}\u0000${text}`).join('\u0001');
        if (shown !== listed) {
            listed = shown;
            section.hidden = texts.size === 0;
            root.querySelector('.untranslated-count').textContent = ` (${texts.size})`;
            rows.replaceChildren(
                ...[...texts].map(([text, found]) => {
                    const row = document.createElement('div');
                    row.className = 'untranslated-row';
                    const key = document.createElement('span');
                    key.textContent = found.key;
                    const value = document.createElement('span');
                    value.textContent = text;
                    row.title = `${found.locale}.json has the same text as the default language`;
                    row.append(key, value);
                    return row;
                })
            );
        }
        mark(texts);
    }

    outline.addEventListener('change', () => {
        localStorage.setItem(OUTLINE_UNTRANSLATED, outline.checked ? 'on' : 'off');
        refresh();
    });
    let waiting = false;
    new MutationObserver(() => {
        if (waiting) return;
        waiting = true;
        setTimeout(() => {
            waiting = false;
            refresh();
        }, 300);
    }).observe(document.body, { childList: true, subtree: true, characterData: true });
    refresh();
}

function configEditor(root) {
    const section = root.querySelector('.config');
    const rows = root.querySelector('.config-rows');
    const note = root.querySelector('.config-note');
    const overrides = configOverrides();
    const drafts = new Map();
    let loaded = false;

    function row(name, value) {
        const line = document.createElement('label');
        line.className = name in overrides ? 'config-row overridden' : 'config-row';
        const label = document.createElement('span');
        label.textContent = name;
        const input = document.createElement('input');
        input.value = JSON.stringify(name in overrides ? overrides[name] : value);
        input.setAttribute('aria-label', name);
        input.spellcheck = false;
        input.addEventListener('input', () => drafts.set(name, input.value));
        line.append(label, input);
        return line;
    }

    async function load() {
        if (loaded) return;
        loaded = true;
        try {
            const response = await plainFetch(CONFIG_PATH, { headers: { accept: 'application/json' } });
            if (!response.ok) throw new Error(String(response.status));
            const base = await response.json();
            const names = [...new Set([...Object.keys(base), ...Object.keys(overrides)])];
            rows.replaceChildren(...names.map((name) => row(name, base[name])));
            note.textContent = names.length === 0 ? 'The public config is empty.' : 'Values are JSON. They change for this browser only.';
            section.dataset.base = JSON.stringify(base);
        } catch {
            note.textContent = 'This app has no publicConfig.';
        }
    }

    section.addEventListener('toggle', () => void load());
    root.querySelector('.config-apply').addEventListener('click', () => {
        const base = JSON.parse(section.dataset.base ?? '{}');
        const next = { ...overrides };
        for (const [name, text] of drafts) {
            let value;
            try {
                value = JSON.parse(text);
            } catch {
                note.textContent = `${name} is not valid JSON. Put text in double quotes.`;
                return;
            }
            if (JSON.stringify(value) === JSON.stringify(base[name])) delete next[name];
            else next[name] = value;
        }
        saveConfigOverrides(next);
        location.reload();
    });
    root.querySelector('.config-reset').addEventListener('click', () => {
        saveConfigOverrides({});
        location.reload();
    });
    const count = Object.keys(overrides).length;
    root.querySelector('.config-count').textContent = count === 0 ? '' : ` (${count} changed)`;
    root.querySelector('.overrides').hidden = count === 0;
}
const kitClient = /@sveltejs\/kit\/src\/runtime\/client\/client\.js(\?|$)/;
const kitEntry = /["'`]([^"'`]*@sveltejs\/kit\/src\/runtime\/client\/)entry\.js[^"'`]*["'`]/;

function kitClientUrl() {
    const loaded = performance
        .getEntriesByType('resource')
        .map((entry) => entry.name)
        .find((name) => kitClient.test(name));
    if (loaded) return loaded;
    for (const script of document.scripts) {
        const entry = script.textContent?.match(kitEntry);
        if (entry) return new URL(`${entry[1]}client.js`, location.href).href;
    }
    return undefined;
}

async function refreshPageData() {
    const url = kitClientUrl();
    if (!url) return;
    try {
        const kit = await import(url);
        await (kit.refreshAll ?? kit.invalidateAll)?.();
    } catch {
        return;
    }
}

const compileErrors = new EventSource('/_ktor-svelte/dev/compile-errors');
compileErrors.onmessage = async (event) => {
    const next = JSON.parse(event.data);
    await viteOverlay;
    errors = next;
    render();
};

if (features.has('refresh')) {
    let appWasGone = false;
    compileErrors.onerror = () => {
        appWasGone = true;
    };
    compileErrors.onopen = () => {
        if (!appWasGone) return;
        appWasGone = false;
        void refreshPageData();
    };
}

const panelStyles = `
:host { all: initial; }
.toggle { position: fixed; right: 12px; bottom: 12px; z-index: 99998; display: flex; gap: 6px; align-items: center; padding: 6px 10px; border: 0; border-radius: 999px; background: #1f1b3a; color: #fff; font: 12px/1 system-ui, sans-serif; cursor: pointer; box-shadow: 0 2px 8px rgba(0,0,0,.3); }
.badge { padding: 2px 6px; border-radius: 999px; background: #c0392b; }
.panel { position: fixed; right: 12px; bottom: 48px; z-index: 99998; width: min(560px, calc(100vw - 24px)); max-height: 50vh; overflow: auto; border-radius: 8px; background: #1f1b3a; color: #eee; font: 12px/1.4 ui-monospace, monospace; box-shadow: 0 4px 16px rgba(0,0,0,.4); }
.panel[hidden] { display: none; }
.head { position: sticky; top: 0; display: flex; justify-content: space-between; padding: 8px 10px; background: #2b2650; font-family: system-ui, sans-serif; }
.head button { border: 0; background: none; color: #bbb; cursor: pointer; font: inherit; }
.row { display: grid; grid-template-columns: 52px 1fr 40px 64px auto; gap: 8px; padding: 4px 10px; border-top: 1px solid #2b2650; }
.tools { display: flex; gap: 6px; }
.tools button { padding: 0 4px; border: 1px solid #4a447a; border-radius: 4px; background: none; color: #ccc; font: inherit; cursor: pointer; }
.tools button:disabled { opacity: .4; cursor: default; }
.path { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
button.path { padding: 0; border: 0; background: none; color: inherit; font: inherit; text-align: left; cursor: pointer; }
button.path:hover { text-decoration: underline; }
.ok { color: #7bd88f; } .warn { color: #f3c969; } .bad { color: #ff7b72; }
.ms { text-align: right; color: #aaa; }
.fields { grid-column: 2 / -1; color: #f3c969; white-space: pre-wrap; }
.sql { grid-column: 2 / -1; color: #aaa; }
.duplicate { grid-column: 2 / -1; color: #f3c969; white-space: normal; }
.sql .repeated { color: #f3c969; }
.empty { padding: 10px; color: #aaa; font-family: system-ui, sans-serif; }
.overrides { padding: 2px 6px; border-radius: 999px; background: #f3c969; color: #1f1b3a; }
.overrides[hidden] { display: none; }
.config { border-top: 1px solid #2b2650; font-family: system-ui, sans-serif; }
.config summary { padding: 6px 10px; cursor: pointer; }
.config-row { display: grid; grid-template-columns: minmax(80px, 1fr) 2fr; gap: 8px; padding: 3px 10px; align-items: center; }
.config-row input { min-width: 0; padding: 2px 4px; border: 1px solid #4a447a; border-radius: 4px; background: #15122b; color: #eee; font: 12px ui-monospace, monospace; }
.config-row.overridden span { color: #f3c969; }
.config-note { margin: 0; padding: 4px 10px; color: #aaa; }
.routes { border-top: 1px solid #2b2650; font-family: system-ui, sans-serif; }
.routes summary { padding: 6px 10px; cursor: pointer; }
.routes-tools { display: flex; gap: 8px; align-items: center; padding: 2px 10px 6px; }
.routes-filter { flex: 1; min-width: 0; padding: 2px 4px; border: 1px solid #4a447a; border-radius: 4px; background: #15122b; color: #eee; font: 12px ui-monospace, monospace; }
.routes-docs { color: #9ecbff; }
.routes-docs[hidden] { display: none; }
.routes-note { color: #aaa; }
.routes-row { display: grid; grid-template-columns: 52px 1fr 1fr; gap: 8px; padding: 2px 10px; font-family: ui-monospace, monospace; }
.routes-row a { color: #9ecbff; }
.routes-file { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: #aaa; text-align: left; }
button.routes-file { padding: 0; border: 0; background: none; font: inherit; cursor: pointer; }
button.routes-file:hover { text-decoration: underline; }
.untranslated { border-top: 1px solid #2b2650; font-family: system-ui, sans-serif; }
.untranslated[hidden] { display: none; }
.untranslated summary { padding: 6px 10px; cursor: pointer; }
.untranslated label { display: block; padding: 2px 10px 6px; color: #aaa; }
.untranslated-row { display: grid; grid-template-columns: minmax(80px, 1fr) 2fr; gap: 8px; padding: 2px 10px; }
.untranslated-row span:first-child { color: #f3c969; font-family: ui-monospace, monospace; }
.config-actions { display: flex; gap: 8px; padding: 6px 10px 10px; }
.config-actions button { padding: 2px 8px; border: 1px solid #4a447a; border-radius: 4px; background: none; color: #ccc; font: inherit; cursor: pointer; }
`;

const seenCalls = new Map();
const KEPT_CALLS = 200;
const REQUEST_ID = 'x-request-id';

const LONGEST_RECORDED_BODY = 256 * 1024;

function jsonOrText(text) {
    if (text === undefined || text === '') return undefined;
    try {
        return JSON.parse(text);
    } catch {
        return text;
    }
}

async function recordAnswer(call, response) {
    call.status = response.status;
    const type = response.headers.get('content-type') ?? '';
    if (response.status === 204 || !/json|text/.test(type)) return;
    const text = await response.text();
    if (text.length <= LONGEST_RECORDED_BODY) call.answer = jsonOrText(text);
}

const DUPLICATE_WINDOW = 2000;
const NOT_A_CALL_SITE = ['/_ktor-svelte/', '/src/lib/api/', '/node_modules/', '/@fs/', '/.vite/', '/@vite/', '/.svelte-kit/'];
const SOURCE_FRAME = /https?:\/\/[^\s/)]+(\/[^\s?:)]+)(?:\?[^\s:)]*)?:(\d+):\d+/;
let replaying = false;

function callSite(stack) {
    for (const line of (stack ?? '').split('\n').slice(1)) {
        const frame = SOURCE_FRAME.exec(line);
        if (!frame || NOT_A_CALL_SITE.some((part) => frame[1].includes(part))) continue;
        return `${decodeURIComponent(frame[1]).replace(/^\//, '')}:${frame[2]}`;
    }
    return undefined;
}

function sameCallJustBefore(call) {
    if (call.method !== 'GET' || replaying) return undefined;
    const earlier = [...seenCalls.values()]
        .reverse()
        .find((other) => other.method === 'GET' && other.path === call.path && call.at - other.at < DUPLICATE_WINDOW);
    return earlier ? { ms: Math.round(call.at - earlier.at), first: earlier.site, second: call.site } : undefined;
}

function rememberCalls() {
    const send = window.fetch;
    window.fetch = function (input, init) {
        let call;
        try {
            const headers = new Headers(init?.headers ?? (input instanceof Request ? input.headers : undefined));
            const id = headers.get(REQUEST_ID);
            if (id) {
                const body = init?.body;
                const url = new URL(typeof input === 'string' ? input : input instanceof URL ? input.href : input.url, location.href);
                call = {
                    method: (init?.method ?? (input instanceof Request ? input.method : 'GET')).toUpperCase(),
                    path: url.pathname + url.search,
                    headers: [...headers].filter(([name]) => name !== REQUEST_ID),
                    body: typeof body === 'string' ? body : undefined,
                    bodyNotKept: body != null && typeof body !== 'string',
                    at: performance.now(),
                    site: callSite(new Error().stack)
                };
                call.duplicate = sameCallJustBefore(call);
                seenCalls.set(id, call);
                if (seenCalls.size > KEPT_CALLS) seenCalls.delete(seenCalls.keys().next().value);
            }
        } catch {
            return send.call(this, input, init);
        }
        const answer = send.call(this, input, init);
        if (call) answer.then((response) => recordAnswer(call, response.clone())).catch(() => undefined);
        return answer;
    };
}

function fixtures() {
    const calls = [...seenCalls.values()]
        .filter((call) => call.status !== undefined)
        .map((call) => ({
            method: call.method,
            path: call.path,
            status: call.status,
            ...(call.body === undefined ? {} : { request: jsonOrText(call.body) }),
            ...(call.answer === undefined ? {} : { response: call.answer })
        }));
    return { recorded: new Date().toISOString(), calls };
}

function saveFixtures() {
    const file = new Blob([JSON.stringify(fixtures(), null, 4) + '\n'], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(file);
    link.download = 'api-fixtures.json';
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(link.href), 1000);
}

function canRepeat(entry) {
    const seen = seenCalls.get(entry.id);
    if (seen) return !seen.bodyNotKept;
    return entry.method === 'GET' || entry.method === 'HEAD';
}

function replay(entry) {
    const seen = seenCalls.get(entry.id);
    const headers = new Headers(seen?.headers ?? [['accept', 'application/json']]);
    headers.set(REQUEST_ID, crypto.randomUUID());
    replaying = true;
    try {
        return window.fetch(entry.path, { method: entry.method, headers, body: seen?.body, credentials: 'same-origin' }).catch(() => undefined);
    } finally {
        replaying = false;
    }
}

function quoted(text) {
    return `'${text.replaceAll("'", `'\\''`)}'`;
}

function curlCommand(entry) {
    const seen = seenCalls.get(entry.id);
    const parts = ['curl', '-X', entry.method, quoted(location.origin + entry.path)];
    for (const [name, value] of seen?.headers ?? []) parts.push('-H', quoted(`${name}: ${value}`));
    if (entry.id) parts.push('-H', quoted(`X-Request-Id: ${entry.id}`));
    if (seen?.body !== undefined) parts.push('--data-raw', quoted(seen.body));
    return parts.join(' ');
}

async function copyText(text) {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch {
        const area = document.createElement('textarea');
        area.value = text;
        document.body.append(area);
        area.select();
        const copied = document.execCommand('copy');
        area.remove();
        return copied;
    }
}

function toolButton(label, title, run) {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = label;
    button.title = title;
    button.addEventListener('click', () => run(button));
    return button;
}

function rowTools(entry) {
    const tools = document.createElement('span');
    tools.className = 'tools';
    const repeatable = canRepeat(entry);
    const why = 'This page did not see the body of this call, so it cannot be repeated from here.';
    const again = toolButton('Replay', repeatable ? 'Send this call again' : why, () => void replay(entry));
    again.disabled = !repeatable;
    const curl = toolButton('curl', repeatable ? 'Copy this call as a curl command' : why, async (button) => {
        button.textContent = (await copyText(curlCommand(entry))) ? 'Copied' : 'Failed';
        setTimeout(() => (button.textContent = 'curl'), 1500);
    });
    curl.disabled = !repeatable;
    tools.append(again, curl);
    return tools;
}

function openInEditor(source) {
    return fetch(`/_ktor-svelte/dev/open?file=${encodeURIComponent(source.path)}&line=${source.line}`).catch(() => undefined);
}

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
        <button class="toggle" type="button" aria-expanded="false">API <span class="count">0</span><span class="overrides" hidden>config changed</span></button>
        <section class="panel" hidden aria-label="API requests">
            <div class="head">
                <strong>API requests</strong>
                <span><button type="button" class="save" title="Save the calls this page made, with their answers, as fixtures for frontend tests">Save fixtures</button>
                <button type="button" class="clear">Clear</button></span>
            </div>
            <details class="config">
                <summary>Public config<span class="config-count"></span></summary>
                <div class="config-rows"></div>
                <p class="config-note">Loading...</p>
                <div class="config-actions">
                    <button type="button" class="config-apply">Apply and reload</button>
                    <button type="button" class="config-reset">Reset all</button>
                </div>
            </details>
            <details class="routes">
                <summary>Routes</summary>
                <div class="routes-tools">
                    <input type="search" class="routes-filter" placeholder="Filter by path, method or file" aria-label="Filter routes" />
                    <span class="routes-note"></span>
                    <a class="routes-docs" hidden>API docs</a>
                </div>
                <div class="routes-rows"></div>
            </details>
            <details class="untranslated" hidden>
                <summary>Not translated<span class="untranslated-count"></span></summary>
                <label><input type="checkbox" class="untranslated-outline" /> Outline them on the page</label>
                <div class="untranslated-rows"></div>
            </details>
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
            const where = entry.source ? `${entry.source.file}:${entry.source.line}` : '';
            row.title = [entry.id ? `X-Request-Id: ${entry.id}` : '', where].filter(Boolean).join('\n');
            const cells = [
                [entry.method, ''],
                [entry.path, 'path'],
                [String(entry.status), statusClass(entry.status)],
                [`${entry.ms.toFixed(entry.ms < 10 ? 1 : 0)} ms`, 'ms']
            ];
            for (const [text, className] of cells) {
                const opens = className === 'path' && entry.source?.path;
                const cell = document.createElement(opens ? 'button' : 'span');
                cell.textContent = text;
                cell.className = className;
                if (opens) {
                    cell.type = 'button';
                    cell.title = `Open ${where} in your editor`;
                    cell.addEventListener('click', () => openInEditor(entry.source));
                }
                row.append(cell);
            }
            row.append(rowTools(entry));
            const twice = seenCalls.get(entry.id)?.duplicate;
            if (twice) {
                const note = document.createElement('span');
                note.className = 'duplicate';
                const sites = twice.first && twice.second ? `, from ${twice.first} and from ${twice.second}` : '';
                note.textContent = `asked for twice within ${twice.ms} ms${sites}`;
                row.append(note);
            }
            if (entry.sql) {
                const sql = document.createElement('span');
                sql.className = 'sql';
                sql.textContent = `${entry.sql.count} SQL, ${entry.sql.ms.toFixed(entry.sql.ms < 10 ? 1 : 0)} ms`;
                if (entry.sql.repeated) {
                    const repeated = document.createElement('span');
                    repeated.className = 'repeated';
                    repeated.textContent = `, the same statement ${entry.sql.repeated} times`;
                    repeated.title = entry.sql.statement;
                    sql.append(repeated);
                }
                row.append(sql);
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
        seenCalls.clear();
        draw();
    });
    root.querySelector('.save').addEventListener('click', saveFixtures);
    configEditor(root);
    routeMap(root);
    untranslatedTexts(root);
    const source = new EventSource('/_ktor-svelte/dev/requests');
    source.onopen = () => {
        entries = [];
        draw();
    };
    source.onmessage = (event) => {
        const entry = JSON.parse(event.data);
        if (features.has('errors') && entry.error && seenCalls.has(entry.id)) showServerError(entry);
        entries.push(entry);
        if (entries.length > 100) entries.shift();
        draw();
    };
    document.body.append(host);
}

if (features.has('panel')) {
    overridePublicConfig();
    rememberCalls();
    if (document.body) startPanel();
    else document.addEventListener('DOMContentLoaded', startPanel);
}

function describe(value) {
    if (typeof value === 'string') return value;
    if (value instanceof Error) return value.stack ?? `${value.name}: ${value.message}`;
    try {
        const seen = new WeakSet();
        return JSON.stringify(value, (_, item) => {
            if (typeof item === 'object' && item !== null) {
                if (seen.has(item)) return '[circular]';
                seen.add(item);
            }
            return typeof item === 'bigint' ? `${item}n` : item;
        });
    } catch {
        return String(value);
    }
}

function forwardBrowserLogs() {
    const queue = [];
    let timer;
    const flush = () => {
        timer = undefined;
        if (queue.length === 0) return;
        const body = JSON.stringify(queue.splice(0));
        fetch('/_ktor-svelte/dev/log', { method: 'POST', body, headers: { 'content-type': 'application/json' }, keepalive: true }).catch(
            () => undefined
        );
    };
    const push = (level, values) => {
        const message = values.map(describe).join(' ').slice(0, 4000);
        if (message.startsWith('[vite]')) return;
        queue.push({ level, message, url: location.pathname + location.search });
        if (queue.length >= 50) flush();
        else timer ??= setTimeout(flush, 200);
    };
    for (const [method, level] of [
        ['log', 'info'],
        ['info', 'info'],
        ['debug', 'debug'],
        ['warn', 'warn'],
        ['error', 'error']
    ]) {
        const original = console[method].bind(console);
        console[method] = (...values) => {
            original(...values);
            push(level, values);
        };
    }
    addEventListener('error', (event) => push('error', [event.error ?? event.message]));
    addEventListener('unhandledrejection', (event) => push('error', ['Unhandled promise rejection:', event.reason]));
    addEventListener('pagehide', flush);
}

if (features.has('logs')) forwardBrowserLogs();
