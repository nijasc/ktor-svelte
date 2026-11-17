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

function cookieInspector(root) {
    const section = root.querySelector('.cookies');
    const rows = root.querySelector('.cookies-rows');
    const note = root.querySelector('.cookies-note');

    function meaning(cookie) {
        const parts = [];
        if (cookie.session !== undefined) parts.push(`session: ${cookie.session}`);
        if (cookie.declared) {
            const declared = cookie.declared;
            const reads = declared.reads === null ? 'nothing' : declared.reads;
            if (!cookie.sent) parts.push(`not set, reads as ${reads}`);
            else if (!declared.fits) parts.push(`does not fit, reads as ${reads}`);
            else parts.push(`reads as ${reads}`);
            parts.push(`${declared.type}; ${declared.options}`);
        }
        return parts.join(' \u00b7 ');
    }

    async function clear(name) {
        const query = name === undefined ? '' : `?name=${encodeURIComponent(name)}`;
        try {
            await plainFetch(`/_ktor-svelte/dev/cookies/clear${query}`, { method: 'POST', headers: { 'X-Ktor-Svelte-Dev': '1' } });
        } finally {
            await load();
            note.textContent = `${note.textContent} Reload the page to see it without ${name === undefined ? 'them' : name}.`;
        }
    }

    function draw(cookies) {
        rows.replaceChildren(
            ...cookies.map((cookie) => {
                const row = document.createElement('div');
                row.className = 'cookies-row';
                row.classList.toggle('broken', Boolean(cookie.sent && cookie.declared && !cookie.declared.fits));
                row.classList.toggle('unset', !cookie.sent);
                const name = document.createElement('span');
                name.className = 'cookies-name';
                name.textContent = cookie.name;
                const value = document.createElement('span');
                value.className = 'cookies-value';
                value.textContent = cookie.sent ? cookie.value : '';
                value.title = cookie.sent ? cookie.value : '';
                const button = document.createElement('button');
                button.type = 'button';
                button.textContent = 'Clear';
                button.hidden = !cookie.sent;
                button.setAttribute('aria-label', `Clear the cookie ${cookie.name}`);
                button.addEventListener('click', () => void clear(cookie.name));
                const about = document.createElement('span');
                about.className = 'cookies-about';
                about.textContent = meaning(cookie);
                row.append(name, value, button, about);
                return row;
            })
        );
        const sent = cookies.filter((cookie) => cookie.sent).length;
        note.textContent = sent === 0 ? 'This browser sends no cookies.' : `${sent} sent with each request.`;
        root.querySelector('.cookies-clear').hidden = sent === 0;
    }

    async function load() {
        try {
            const response = await plainFetch('/_ktor-svelte/dev/cookies', { headers: { accept: 'application/json' } });
            draw((await response.json()).cookies);
        } catch {
            note.textContent = 'The cookies could not be loaded.';
        }
    }

    section.addEventListener('toggle', () => {
        if (section.open) void load();
    });
    root.querySelector('.cookies-clear').addEventListener('click', () => void clear(undefined));
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

function environmentView(root) {
    const section = root.querySelector('.environment');
    const rows = root.querySelector('.environment-rows');
    const filter = root.querySelector('.environment-filter');
    const note = root.querySelector('.environment-note');
    let groups = [];

    function draw() {
        const wanted = filter.value.trim().toLowerCase();
        let shown = 0;
        let all = 0;
        const lines = [];
        for (const group of groups) {
            const matching = group.rows.filter((row) => `${row.name} ${row.value}`.toLowerCase().includes(wanted));
            all += group.rows.length;
            shown += matching.length;
            if (matching.length === 0) continue;
            const title = document.createElement('div');
            title.className = 'environment-group';
            title.textContent = `${group.name} (${matching.length})`;
            lines.push(title);
            for (const entry of matching) {
                const line = document.createElement('div');
                line.className = entry.hidden ? 'environment-row hidden' : 'environment-row';
                const name = document.createElement('span');
                name.textContent = entry.name;
                const value = document.createElement('span');
                value.textContent = entry.value;
                if (entry.hidden) value.title = 'Hidden because the name or the value looks like a secret';
                line.append(name, value);
                lines.push(line);
            }
        }
        rows.replaceChildren(...lines);
        note.textContent = shown === all ? `${all} in all` : `${shown} of ${all}`;
    }

    async function load() {
        try {
            const response = await plainFetch('/_ktor-svelte/dev/environment', { headers: { accept: 'application/json' } });
            groups = (await response.json()).groups;
            draw();
        } catch {
            note.textContent = 'The environment could not be loaded.';
        }
    }

    section.addEventListener('toggle', () => {
        if (section.open) void load();
    });
    filter.addEventListener('input', draw);
}

function migrationsView(root) {
    const section = root.querySelector('.migrations');
    const rows = root.querySelector('.migrations-rows');
    const note = root.querySelector('.migrations-note');

    function summary(state) {
        if (state.tool === null) return 'This app runs no migrations: Flyway is not on its classpath.';
        if (state.error) return `Flyway could not be asked: ${state.error}`;
        if (state.note) return state.note;
        const ran = state.migrations.filter((migration) => migration.applied).length;
        const parts = [state.current ? `At version ${state.current}, ${ran} ran.` : `${ran} ran.`];
        if (state.pending > 0) parts.push(`${state.pending} pending, they run at the next start.`);
        if (state.failed) parts.push('The last one failed.');
        return parts.join(' ');
    }

    async function load() {
        try {
            const response = await plainFetch('/_ktor-svelte/dev/migrations', { headers: { accept: 'application/json' } });
            const state = await response.json();
            note.textContent = summary(state);
            note.className = state.failed || state.error ? 'migrations-note bad' : state.pending > 0 ? 'migrations-note warn' : 'migrations-note';
            rows.replaceChildren(
                ...(state.migrations ?? []).map((migration) => {
                    const row = document.createElement('div');
                    row.className = `migrations-row ${migration.failed ? 'bad' : migration.applied ? '' : 'warn'}`.trim();
                    const version = document.createElement('span');
                    version.textContent = migration.version ?? 'R';
                    const description = document.createElement('span');
                    description.textContent = migration.description;
                    description.title = migration.script;
                    const status = document.createElement('span');
                    status.textContent = migration.state;
                    const when = document.createElement('span');
                    when.textContent = migration.installedOn ? new Date(migration.installedOn).toLocaleString() : '';
                    row.append(version, description, status, when);
                    return row;
                })
            );
        } catch {
            note.textContent = 'The migrations could not be loaded.';
        }
    }

    section.addEventListener('toggle', () => {
        if (section.open) void load();
    });
}

function megabytes(bytes) {
    return `${(bytes / 1024 / 1024).toFixed(0)} MB`;
}

function duration(millis) {
    const seconds = Math.round(millis / 1000);
    if (seconds < 120) return `${seconds} s`;
    const minutes = Math.round(seconds / 60);
    return minutes < 120 ? `${minutes} min` : `${(minutes / 60).toFixed(1)} h`;
}

function runtimeView(root) {
    const section = root.querySelector('.runtime');
    const rows = root.querySelector('.runtime-rows');
    const bar = root.querySelector('.runtime-heap');
    let timer;

    function line(label, value, className = '') {
        const row = document.createElement('div');
        row.className = `runtime-row ${className}`.trim();
        const name = document.createElement('span');
        name.textContent = label;
        const text = document.createElement('span');
        text.textContent = value;
        row.append(name, text);
        return row;
    }

    async function load() {
        try {
            const response = await plainFetch('/_ktor-svelte/dev/runtime', { headers: { accept: 'application/json' } });
            const state = await response.json();
            const heap = state.heap;
            const limit = heap.max ?? heap.committed;
            const share = limit > 0 ? heap.used / limit : 0;
            bar.value = share;
            bar.title = `${Math.round(share * 100)}% of the heap limit`;
            const threads = state.threads;
            const states = Object.entries(threads.states)
                .map(([name, count]) => `${count} ${name.toLowerCase().replaceAll('_', ' ')}`)
                .join(', ');
            rows.replaceChildren(
                line('heap', `${megabytes(heap.used)} used of ${megabytes(heap.committed)} taken, limit ${heap.max === undefined ? 'none' : megabytes(heap.max)}`, share > 0.85 ? 'bad' : ''),
                line('non-heap', `${megabytes(state.nonHeap.used)} used`),
                ...state.collectors.map((collector) => line(`GC ${collector.name}`, `${collector.count} runs, ${collector.ms} ms in all`)),
                line('threads', `${threads.live} live (${threads.daemon} daemon), peak ${threads.peak}, ${threads.started} started`),
                line('thread states', states),
                line('processors', String(state.processors)),
                line('uptime', duration(state.uptime))
            );
        } catch {
            rows.replaceChildren(line('The memory and threads could not be loaded.', ''));
        }
    }

    section.addEventListener('toggle', () => {
        clearInterval(timer);
        if (!section.open) return;
        void load();
        timer = setInterval(() => void load(), 2000);
    });
    root.querySelector('.runtime-gc').addEventListener('click', async () => {
        await plainFetch('/_ktor-svelte/dev/runtime/gc', { method: 'POST', headers: { 'X-Ktor-Svelte-Dev': '1' } }).catch(() => undefined);
        await load();
    });
}

function slowestRoutes(root) {
    const section = root.querySelector('.slowest');
    const rows = root.querySelector('.slowest-rows');
    const note = root.querySelector('.slowest-note');

    function millis(ms) {
        return ms >= 1000 ? `${(ms / 1000).toFixed(1)} s` : `${ms.toFixed(ms < 10 ? 1 : 0)} ms`;
    }

    async function load() {
        try {
            const response = await plainFetch('/_ktor-svelte/dev/slowest', { headers: { accept: 'application/json' } });
            const ranking = await response.json();
            note.textContent =
                ranking.routes === 0
                    ? 'No API route was called since the app started.'
                    : `The routes that took the most time in all since the app started, of ${ranking.routes} called.`;
            rows.replaceChildren(
                ...ranking.slowest.map((route) => {
                    const row = document.createElement('div');
                    row.className = 'slowest-row';
                    const method = document.createElement('span');
                    method.textContent = route.method;
                    const path = document.createElement('span');
                    path.className = 'path';
                    path.textContent = route.path;
                    const total = document.createElement('span');
                    total.className = 'ms';
                    total.textContent = millis(route.totalMs);
                    const about = document.createElement('span');
                    about.className = 'slowest-about';
                    const failed = route.failed ? `, ${route.failed} failed` : '';
                    about.textContent = `${route.calls} calls, ${millis(route.averageMs)} on average, slowest ${millis(route.slowestMs)}${failed}`;
                    row.append(method, path, total, about);
                    return row;
                })
            );
        } catch {
            note.textContent = 'The slowest routes could not be loaded.';
        }
    }

    section.addEventListener('toggle', () => {
        if (section.open) void load();
    });
    root.querySelector('.slowest-refresh').addEventListener('click', () => void load());
}

function statusView(root) {
    const section = root.querySelector('.status');
    const rows = root.querySelector('.status-rows');

    function line(label, value, className = '') {
        const row = document.createElement('div');
        row.className = `status-row ${className}`.trim();
        const name = document.createElement('span');
        name.textContent = label;
        const text = document.createElement('span');
        text.textContent = String(value);
        row.append(name, text);
        return row;
    }

    function flat(value, prefix) {
        if (value === null || typeof value !== 'object') return [[prefix, value]];
        return Object.entries(value).flatMap(([name, inner]) => flat(inner, prefix ? `${prefix} ${name}` : name));
    }

    async function load() {
        try {
            const response = await plainFetch('/_ktor-svelte/dev/status', { headers: { accept: 'application/json' } });
            const status = await response.json();
            const lines = [
                ...flat(status.versions, '').map(([name, value]) => line(name, value)),
                ...flat(status.app, 'app').map(([name, value]) => line(name, value)),
                line('health', status.health, status.health === 'down' ? 'bad' : status.health === 'up' ? 'ok' : ''),
                ...flat(status.status, '').map(([name, value]) => line(name, value, value === false && name.endsWith('reachable') ? 'bad' : '')),
                ...status.settings.map((setting) => {
                    const at = setting.indexOf(': ');
                    return at < 0 ? line(setting, '') : line(setting.slice(0, at), setting.slice(at + 2));
                })
            ];
            rows.replaceChildren(...lines);
        } catch {
            rows.replaceChildren(line('The status could not be loaded.', ''));
        }
    }

    section.addEventListener('toggle', () => {
        if (section.open) void load();
    });
}

const THEME_COLORS = [
    ['primary', 'primary'],
    ['secondary', 'secondary'],
    ['accent', 'accent'],
    ['neutral', 'neutral'],
    ['base100', 'base-100'],
    ['base200', 'base-200'],
    ['base300', 'base-300'],
    ['baseContent', 'base-content'],
    ['info', 'info'],
    ['success', 'success'],
    ['warning', 'warning'],
    ['error', 'error']
];

function asHex(color) {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 1;
    const context = canvas.getContext('2d', { willReadFrequently: true });
    context.fillStyle = '#000';
    context.fillStyle = color;
    context.fillRect(0, 0, 1, 1);
    return '#' + [...context.getImageData(0, 0, 1, 1).data.slice(0, 3)].map((part) => part.toString(16).padStart(2, '0')).join('');
}

function themeEditor(root) {
    const section = root.querySelector('.theme');
    const rows = root.querySelector('.theme-rows');
    const name = root.querySelector('.theme-name');
    const note = root.querySelector('.theme-note');
    const page = document.documentElement;
    const inputs = new Map();

    function current(variable) {
        return getComputedStyle(page).getPropertyValue(`--color-${variable}`).trim();
    }

    function fill() {
        for (const [, variable] of THEME_COLORS) inputs.get(variable).value = asHex(current(variable));
    }

    function kotlin() {
        const dark = getComputedStyle(page).colorScheme.includes('dark');
        const label = (name.value.trim() || 'custom').replaceAll('"', '');
        const lines = THEME_COLORS.map(([property, variable]) => `    ${property} = "${inputs.get(variable).value}"`);
        return `customTheme("${label}"${dark ? ', colorScheme = "dark"' : ''}) {\n${lines.join('\n')}\n}`;
    }

    section.hidden = current('primary') === '';
    if (section.hidden) return;
    for (const [property, variable] of THEME_COLORS) {
        const line = document.createElement('label');
        line.className = 'theme-row';
        const input = document.createElement('input');
        input.type = 'color';
        input.setAttribute('aria-label', property);
        input.addEventListener('input', () => page.style.setProperty(`--color-${variable}`, input.value));
        const label = document.createElement('span');
        label.textContent = property;
        line.append(input, label);
        rows.append(line);
        inputs.set(variable, input);
    }
    section.addEventListener('toggle', () => {
        if (section.open) fill();
    });
    new MutationObserver(() => {
        if (section.open && page.style.length === 0) fill();
    }).observe(page, { attributes: true, attributeFilter: ['data-theme'] });
    root.querySelector('.theme-copy').addEventListener('click', async () => {
        note.textContent = (await copyText(kotlin())) ? 'Copied. Paste it into daisyUi { } in build.gradle.kts.' : 'Copying did not work.';
    });
    root.querySelector('.theme-reset').addEventListener('click', () => {
        for (const [, variable] of THEME_COLORS) page.style.removeProperty(`--color-${variable}`);
        fill();
        note.textContent = '';
    });
}

const A11Y_PROBLEM = 'data-ktor-svelte-a11y';
const AXE_MODULE = '/node_modules/axe-core/axe.min.js';

function accessibilityHints(root) {
    const section = root.querySelector('.a11y');
    const rows = root.querySelector('.a11y-rows');
    const note = root.querySelector('.a11y-note');
    const again = root.querySelector('.a11y-check');
    let checking = false;

    const style = document.createElement('style');
    style.textContent = `[${A11Y_PROBLEM}] { outline: 3px solid #ff5a52 !important; outline-offset: 2px; }`;
    document.head.append(style);

    function clearHighlight() {
        document.querySelectorAll(`[${A11Y_PROBLEM}]`).forEach((element) => element.removeAttribute(A11Y_PROBLEM));
    }

    function highlight(violation) {
        clearHighlight();
        const elements = violation.nodes.flatMap((node) => {
            try {
                return [...document.querySelectorAll(node.target.join(' '))];
            } catch {
                return [];
            }
        });
        elements.forEach((element) => element.setAttribute(A11Y_PROBLEM, violation.id));
        elements[0]?.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }

    async function axe() {
        if (!window.axe) await import(/* @vite-ignore */ AXE_MODULE);
        return window.axe;
    }

    async function check() {
        if (checking) return;
        checking = true;
        clearHighlight();
        note.textContent = 'Checking...';
        try {
            let engine;
            try {
                engine = await axe();
            } catch {
                engine = undefined;
            }
            if (!engine) {
                rows.replaceChildren();
                note.textContent = 'This needs axe-core in the frontend. Add it as a dev dependency, such as with: bun add -d axe-core';
                return;
            }
            const result = await engine.run(document, { resultTypes: ['violations'] }).catch(() => undefined);
            const violations = (result?.violations ?? [])
                .map((violation) => ({
                    ...violation,
                    nodes: violation.nodes.filter((node) => !node.target.some((part) => String(part).includes('ktor-svelte')))
                }))
                .filter((violation) => violation.nodes.length > 0);
            root.querySelector('.a11y-count').textContent = ` (${violations.length})`;
            note.textContent = violations.length === 0 ? 'axe found no problems on this page.' : 'Click a problem to see where it is.';
            rows.replaceChildren(
                ...violations.map((violation) => {
                    const row = document.createElement('button');
                    row.type = 'button';
                    row.className = `a11y-row ${violation.impact ?? 'minor'}`;
                    row.title = violation.description;
                    const impact = document.createElement('span');
                    impact.textContent = violation.impact ?? 'minor';
                    const help = document.createElement('span');
                    help.textContent = `${violation.help} (${violation.nodes.length})`;
                    const rule = document.createElement('a');
                    rule.href = violation.helpUrl;
                    rule.target = '_blank';
                    rule.rel = 'noreferrer';
                    rule.textContent = violation.id;
                    rule.addEventListener('click', (event) => event.stopPropagation());
                    row.append(impact, help, rule);
                    row.addEventListener('click', () => highlight(violation));
                    return row;
                })
            );
        } finally {
            checking = false;
        }
    }

    section.addEventListener('toggle', () => {
        if (section.open) void check();
        else clearHighlight();
    });
    again.addEventListener('click', () => void check());
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
.row { display: grid; grid-template-columns: 52px 1fr 40px 64px 60px auto; gap: 8px; padding: 4px 10px; border-top: 1px solid #2b2650; }
.tools { display: flex; gap: 6px; }
.tools button { padding: 0 4px; border: 1px solid #4a447a; border-radius: 4px; background: none; color: #ccc; font: inherit; cursor: pointer; }
.tools button:disabled { opacity: .4; cursor: default; }
.path { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
button.path { padding: 0; border: 0; background: none; color: inherit; font: inherit; text-align: left; cursor: pointer; }
button.path:hover { text-decoration: underline; }
.ok { color: #7bd88f; } .warn { color: #f3c969; } .bad { color: #ff7b72; }
.ms, .size { text-align: right; color: #aaa; }
.size.large { color: #f3c969; }
.payload { grid-column: 2 / -1; color: #f3c969; }
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
.cookies-tools { display: flex; gap: 8px; align-items: center; padding: 2px 10px 6px; }
.cookies-note { color: #aaa; }
.cookies-row { display: grid; grid-template-columns: minmax(80px, 1fr) 2fr auto; gap: 2px 8px; padding: 3px 10px; font-family: ui-monospace, monospace; }
.cookies-name { color: #f3c969; }
.cookies-value { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.cookies-about { grid-column: 1 / -1; color: #aaa; font-family: system-ui, sans-serif; }
.cookies-about:empty { display: none; }
.cookies-row.broken .cookies-value { color: #ff8f8f; }
.cookies-row.unset .cookies-name { color: #aaa; }
.cookies-row button[hidden], .cookies-clear[hidden] { display: none; }
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
.status { border-top: 1px solid #2b2650; font-family: system-ui, sans-serif; }
.status summary { padding: 6px 10px; cursor: pointer; }
.status-rows { padding-bottom: 6px; }
.status-row { display: grid; grid-template-columns: minmax(120px, 1fr) 2fr; gap: 8px; padding: 2px 10px; }
.status-row span:first-child { color: #aaa; }
.status-row span:last-child { overflow-wrap: anywhere; }
.status-row.ok span:last-child { color: #7bd88f; }
.status-row.bad span:last-child { color: #ff7b72; }
.environment { border-top: 1px solid #2b2650; font-family: system-ui, sans-serif; }
.environment summary { padding: 6px 10px; cursor: pointer; }
.environment-tools { display: flex; gap: 8px; align-items: center; padding: 2px 10px 6px; }
.environment-filter { flex: 1; min-width: 0; padding: 2px 4px; border: 1px solid #4a447a; border-radius: 4px; background: #15122b; color: #eee; font: 12px ui-monospace, monospace; }
.environment-note { color: #aaa; }
.environment-group { padding: 6px 10px 2px; color: #aaa; }
.environment-row { display: grid; grid-template-columns: minmax(120px, 1fr) 2fr; gap: 8px; padding: 1px 10px; font-family: ui-monospace, monospace; }
.environment-row span { overflow-wrap: anywhere; }
.environment-row span:first-child { color: #f3c969; }
.environment-row.hidden span:last-child { color: #aaa; }
.migrations { border-top: 1px solid #2b2650; font-family: system-ui, sans-serif; }
.migrations summary { padding: 6px 10px; cursor: pointer; }
.migrations-note { margin: 0; padding: 2px 10px 6px; color: #aaa; }
.migrations-note.warn { color: #f3c969; }
.migrations-note.bad { color: #ff7b72; }
.migrations-rows { padding-bottom: 6px; }
.migrations-row { display: grid; grid-template-columns: 40px 1fr 80px auto; gap: 8px; padding: 1px 10px; }
.migrations-row span:first-child { font-family: ui-monospace, monospace; }
.migrations-row span:last-child { color: #aaa; }
.migrations-row.warn span:nth-child(3) { color: #f3c969; }
.migrations-row.bad span:nth-child(3) { color: #ff7b72; }
.runtime { border-top: 1px solid #2b2650; font-family: system-ui, sans-serif; }
.runtime summary { padding: 6px 10px; cursor: pointer; }
.runtime-tools { display: flex; gap: 8px; align-items: center; padding: 2px 10px 6px; }
.runtime-tools button { padding: 2px 8px; border: 1px solid #4a447a; border-radius: 4px; background: none; color: #ccc; font: inherit; cursor: pointer; }
.runtime-heap { flex: 1; height: 8px; }
.runtime-rows { padding-bottom: 6px; }
.runtime-row { display: grid; grid-template-columns: minmax(120px, 1fr) 2fr; gap: 8px; padding: 2px 10px; }
.runtime-row span:first-child { color: #aaa; }
.runtime-row.bad span:last-child { color: #ff7b72; }
.slowest { border-top: 1px solid #2b2650; font-family: system-ui, sans-serif; }
.slowest summary { padding: 6px 10px; cursor: pointer; }
.slowest-tools { display: flex; gap: 8px; align-items: center; padding: 2px 10px 6px; color: #aaa; }
.slowest-tools button { padding: 2px 8px; border: 1px solid #4a447a; border-radius: 4px; background: none; color: #ccc; font: inherit; cursor: pointer; }
.slowest-rows { padding-bottom: 6px; }
.slowest-row { display: grid; grid-template-columns: 52px 1fr 64px; gap: 2px 8px; padding: 2px 10px; font-family: ui-monospace, monospace; }
.slowest-about { grid-column: 2 / -1; color: #aaa; font-family: system-ui, sans-serif; }
.theme { border-top: 1px solid #2b2650; font-family: system-ui, sans-serif; }
.theme[hidden] { display: none; }
.theme summary { padding: 6px 10px; cursor: pointer; }
.theme-rows { display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px 8px; padding: 2px 10px 6px; }
.theme-row { display: flex; gap: 6px; align-items: center; }
.theme-row input { width: 28px; height: 20px; padding: 0; border: 1px solid #4a447a; background: none; }
.theme-tools { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; padding: 2px 10px 8px; color: #aaa; }
.theme-tools button { padding: 2px 8px; border: 1px solid #4a447a; border-radius: 4px; background: none; color: #ccc; font: inherit; cursor: pointer; }
.theme-name { width: 110px; padding: 2px 4px; border: 1px solid #4a447a; border-radius: 4px; background: #15122b; color: #eee; font: 12px ui-monospace, monospace; }
.a11y { border-top: 1px solid #2b2650; font-family: system-ui, sans-serif; }
.a11y summary { padding: 6px 10px; cursor: pointer; }
.a11y-tools { display: flex; gap: 8px; align-items: center; padding: 2px 10px 6px; color: #aaa; }
.a11y-tools button { padding: 2px 8px; border: 1px solid #4a447a; border-radius: 4px; background: none; color: #ccc; font: inherit; cursor: pointer; }
.a11y-row { display: grid; grid-template-columns: 64px 1fr auto; gap: 8px; width: 100%; padding: 3px 10px; border: 0; background: none; color: #eee; font: inherit; text-align: left; cursor: pointer; }
.a11y-row:hover { background: #2b2650; }
.a11y-row span:first-child { color: #f3c969; }
.a11y-row.critical span:first-child, .a11y-row.serious span:first-child { color: #ff7b72; }
.a11y-row a { color: #9ecbff; }
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
const MASK = '***';
let sensitiveNames = new Set();

async function learnSensitiveNames() {
    try {
        const response = await plainFetch('/_ktor-svelte/dev/sensitive', { headers: { accept: 'application/json' } });
        if (response.ok) sensitiveNames = new Set((await response.json()).map((name) => name.toLowerCase()));
    } catch {
        return;
    }
}

function masked(value) {
    if (sensitiveNames.size === 0 || value === null || typeof value !== 'object') return value;
    if (Array.isArray(value)) return value.map(masked);
    return Object.fromEntries(
        Object.entries(value).map(([name, inner]) => [name, sensitiveNames.has(name.toLowerCase()) && inner != null ? MASK : masked(inner)])
    );
}

function maskedText(text) {
    if (text === undefined || sensitiveNames.size === 0) return text;
    try {
        return JSON.stringify(masked(JSON.parse(text)));
    } catch {
        return text;
    }
}
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
            ...(call.body === undefined ? {} : { request: masked(jsonOrText(call.body)) }),
            ...(call.answer === undefined ? {} : { response: masked(call.answer) })
        }));
    return { recorded: new Date().toISOString(), calls };
}

async function saveFixtures() {
    await learnSensitiveNames();
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
    headers.delete('idempotency-key');
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
    if (seen?.body !== undefined) parts.push('--data-raw', quoted(maskedText(seen.body)));
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
        await learnSensitiveNames();
        button.textContent = (await copyText(curlCommand(entry))) ? 'Copied' : 'Failed';
        setTimeout(() => (button.textContent = 'curl'), 1500);
    });
    curl.disabled = !repeatable;
    tools.append(again, curl);
    return tools;
}

async function clearSiteData() {
    const quietly = async (work) => {
        try {
            await work();
        } catch {
            return;
        }
    };
    await quietly(() => plainFetch('/_ktor-svelte/dev/clear-site-data', { method: 'POST', headers: { 'X-Ktor-Svelte-Dev': '1' } }));
    await quietly(() => localStorage.clear());
    await quietly(() => sessionStorage.clear());
    await quietly(async () => Promise.all((await caches.keys()).map((name) => caches.delete(name))));
    await quietly(async () => Promise.all((await navigator.serviceWorker.getRegistrations()).map((worker) => worker.unregister())));
    await quietly(async () =>
        Promise.all(
            (await indexedDB.databases()).map(
                (database) =>
                    new Promise((resolve) => {
                        const request = indexedDB.deleteDatabase(database.name);
                        request.onsuccess = request.onerror = request.onblocked = resolve;
                    })
            )
        )
    );
    await quietly(() =>
        document.cookie.split(';').forEach((cookie) => {
            const name = cookie.split('=')[0].trim();
            if (name) document.cookie = `${name}=; Max-Age=0; path=/`;
        })
    );
    location.reload();
}

function openInEditor(source) {
    return fetch(`/_ktor-svelte/dev/open?file=${encodeURIComponent(source.path)}&line=${source.line}`).catch(() => undefined);
}

const LARGE_PAYLOAD = 100 * 1024;

function bytesText(bytes) {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

function fieldsText(fields) {
    return (fields ?? [])
        .map((field) => `${field.name} ${bytesText(field.bytes)}${field.items === undefined ? '' : ` (${field.items} items)`}`)
        .join(', ');
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
                <button type="button" class="clear">Clear</button>
                <button type="button" class="clear-site" title="Clear the cookies, storage, caches and service workers of this app in this browser, then reload">Clear site data</button></span>
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
            <details class="cookies">
                <summary>Cookies</summary>
                <div class="cookies-tools"><button type="button" class="cookies-clear" hidden>Clear all</button><span class="cookies-note"></span></div>
                <div class="cookies-rows"></div>
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
            <details class="status">
                <summary>Status</summary>
                <div class="status-rows"></div>
            </details>
            <details class="environment">
                <summary>Environment</summary>
                <div class="environment-tools">
                    <input type="search" class="environment-filter" placeholder="Filter by name or value" aria-label="Filter the environment" />
                    <span class="environment-note"></span>
                </div>
                <div class="environment-rows"></div>
            </details>
            <details class="migrations">
                <summary>Migrations</summary>
                <p class="migrations-note">Loading...</p>
                <div class="migrations-rows"></div>
            </details>
            <details class="runtime">
                <summary>Memory and threads</summary>
                <div class="runtime-tools">
                    <meter class="runtime-heap" min="0" max="1" low="0.7" high="0.85" optimum="0" aria-label="Heap in use"></meter>
                    <button type="button" class="runtime-gc" title="Ask the JVM for a garbage collection, to see what memory is really still in use">Collect garbage</button>
                </div>
                <div class="runtime-rows"></div>
            </details>
            <details class="slowest">
                <summary>Slowest routes</summary>
                <div class="slowest-tools"><button type="button" class="slowest-refresh">Refresh</button><span class="slowest-note"></span></div>
                <div class="slowest-rows"></div>
            </details>
            <details class="theme" hidden>
                <summary>Theme colors</summary>
                <div class="theme-rows"></div>
                <div class="theme-tools">
                    <input class="theme-name" value="custom" aria-label="Theme name" spellcheck="false" />
                    <button type="button" class="theme-copy">Copy for Gradle</button>
                    <button type="button" class="theme-reset">Reset</button>
                    <span class="theme-note"></span>
                </div>
            </details>
            <details class="a11y">
                <summary>Accessibility<span class="a11y-count"></span></summary>
                <div class="a11y-tools"><button type="button" class="a11y-check">Check again</button><span class="a11y-note"></span></div>
                <div class="a11y-rows"></div>
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
                [`${entry.ms.toFixed(entry.ms < 10 ? 1 : 0)} ms`, 'ms'],
                [entry.size ? bytesText(entry.size.bytes) : '', entry.size?.bytes >= LARGE_PAYLOAD ? 'size large' : 'size']
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
                if (className.startsWith('size') && entry.size?.fields) cell.title = `Largest fields: ${fieldsText(entry.size.fields)}`;
                row.append(cell);
            }
            row.append(rowTools(entry));
            if (entry.size?.bytes >= LARGE_PAYLOAD && entry.size.fields) {
                const payload = document.createElement('span');
                payload.className = 'payload';
                payload.textContent = `${bytesText(entry.size.bytes)} answer, largest: ${fieldsText(entry.size.fields)}`;
                row.append(payload);
            }
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
    root.querySelector('.save').addEventListener('click', () => void saveFixtures());
    root.querySelector('.clear-site').addEventListener('click', (event) => {
        event.currentTarget.textContent = 'Clearing...';
        void clearSiteData();
    });
    configEditor(root);
    cookieInspector(root);
    routeMap(root);
    statusView(root);
    slowestRoutes(root);
    runtimeView(root);
    migrationsView(root);
    environmentView(root);
    themeEditor(root);
    accessibilityHints(root);
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

void learnSensitiveNames();
setInterval(() => void learnSensitiveNames(), 15000);

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
        return JSON.stringify(value, (name, item) => {
            if (typeof item === 'object' && item !== null) {
                if (seen.has(item)) return '[circular]';
                seen.add(item);
            }
            if (name !== '' && item != null && sensitiveNames.has(name.toLowerCase())) return MASK;
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
