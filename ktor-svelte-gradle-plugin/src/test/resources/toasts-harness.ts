class FakeElement {
    children: FakeElement[] = [];
    parent?: FakeElement;
    className = '';
    textContent = '';
    type = '';
    id = '';
    attributes: Record<string, string> = {};
    listeners: Record<string, () => void> = {};
    constructor(readonly tag: string) {}
    get isConnected(): boolean {
        return this === body || (this.parent?.isConnected ?? false);
    }
    setAttribute(name: string, value: string) {
        this.attributes[name] = value;
    }
    addEventListener(name: string, listener: () => void) {
        this.listeners[name] = listener;
    }
    append(...items: FakeElement[]) {
        for (const item of items) {
            item.parent = this;
            this.children.push(item);
        }
    }
    remove() {
        if (this.parent) this.parent.children = this.parent.children.filter((child) => child !== this);
        this.parent = undefined;
    }
    click() {
        this.listeners.click?.();
    }
}

const body = new FakeElement('body');
const head = new FakeElement('head');
let reloads = 0;
Object.assign(globalThis, {
    document: { createElement: (tag: string) => new FakeElement(tag), getElementById: () => null, body, head },
    location: { reload: () => reloads++ }
});

const { toast, toastNewBuild, toastMessages } = await import(process.argv[2]);
const toasts = () => body.children[0]?.children ?? [];
const buttons = (item: FakeElement) => item.children.filter((child) => child.tag === 'button').map((child) => child.textContent);
const results: Record<string, unknown> = {};

toast('Saved.', { duration: 0 });
results.plainButtons = buttons(toasts()[0]);
toasts()[0].remove();

let ran = 0;
toast('Note deleted.', { duration: 0, action: { label: 'Undo', run: () => ran++ } });
results.actionButtons = buttons(toasts()[0]);
toasts()[0].children[1].click();
results.actionRan = ran;
results.actionClosesTheToast = toasts().length;

toastMessages.reload = 'Neu laden';
toastNewBuild();
toastNewBuild();
results.newBuildToasts = toasts().length;
results.newBuildText = toasts()[0].children[0].textContent;
results.newBuildButtons = buttons(toasts()[0]);
results.reloadsBeforeClick = reloads;
toasts()[0].children[1].click();
results.reloadsAfterClick = reloads;

console.log(JSON.stringify(results));
