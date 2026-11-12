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
