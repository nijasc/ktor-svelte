class FakeElement {
    children: FakeElement[] = [];
    parent?: FakeElement;
    className = '';
    textContent = '';
    type = '';
    id = '';
    disabled = false;
    open = false;
    focused = false;
    attributes: Record<string, string> = {};
    listeners: Record<string, (event: { preventDefault(): void }) => unknown> = {};
    constructor(readonly tag: string) {}
    setAttribute(name: string, value: string) {
        this.attributes[name] = value;
    }
    removeAttribute(name: string) {
        delete this.attributes[name];
    }
    addEventListener(name: string, listener: (event: { preventDefault(): void }) => unknown) {
        this.listeners[name] = listener;
    }
    append(...items: FakeElement[]) {
        for (const item of items) {
            item.remove();
            item.parent = this;
            this.children.push(item);
        }
    }
    insertBefore(item: FakeElement, before: FakeElement) {
        item.remove();
        item.parent = this;
        this.children.splice(this.children.indexOf(before), 0, item);
    }
    remove() {
        if (this.parent) this.parent.children = this.parent.children.filter((child) => child !== this);
        this.parent = undefined;
    }
    showModal() {
        this.open = true;
    }
    close() {
        this.open = false;
    }
    focus() {
        this.focused = true;
    }
    fire(name: string) {
        return this.listeners[name]?.({ preventDefault() {} });
    }
    all(): FakeElement[] {
        return [this, ...this.children.flatMap((child) => child.all())];
    }
}

const body = new FakeElement('body');
const asked: string[] = [];
let answer = true;
Object.assign(globalThis, {
    document: { createElement: (tag: string) => new FakeElement(tag), body },
    HTMLDialogElement: FakeElement,
    window: {
        confirm: (text: string) => {
            asked.push(text);
            return answer;
        }
    }
});

const { confirmed, confirmMessages } = await import(process.argv[2]);
const styled = process.argv[3] === 'daisy';
const results: Record<string, unknown> = {};
const dialog = () => body.children[0];
const part = (matches: (node: FakeElement) => boolean) => dialog().all().find(matches)!;
const confirmButton = () => part((node) => 'data-confirm' in node.attributes);
const cancelButton = () => part((node) => node.tag === 'button' && !('data-confirm' in node.attributes));
const settle = () => new Promise((resolve) => setTimeout(resolve, 5));

if (!styled) {
    let ran = 0;
    results.confirmedValue = await confirmed('Delete this note?', async () => ++ran, { details: 'It cannot be restored.' });
    answer = false;
    results.declinedValue = (await confirmed('Delete this note?', async () => ++ran)) ?? null;
    results.ran = ran;
    results.asked = asked;
    results.failure = await confirmed('Again?', async () => Promise.reject(new Error('down'))).catch((error: Error) => error.message);
    answer = true;
    results.failure = await confirmed('Again?', async () => Promise.reject(new Error('down'))).catch((error: Error) => error.message);
} else {
    let ran = 0;
    const cancelled = confirmed('Delete this task?', async () => ++ran, { details: 'Its comments go too.', confirm: 'Delete', danger: true });
    results.dialog = {
        open: dialog().open,
        labelledBy: dialog().attributes['aria-labelledby'] === part((node) => node.tag === 'h2').id,
        texts: dialog().all().map((node) => node.textContent).filter(Boolean),
        confirmClass: confirmButton().className,
        cancelHasFocus: cancelButton().focused
    };
    cancelButton().fire('click');
    results.cancelled = [(await cancelled) ?? null, ran, body.children.length];

    const escaped = confirmed('Sure?', async () => ++ran);
    results.plainConfirmClass = confirmButton().className;
    results.confirmHasFocus = confirmButton().focused;
    dialog().fire('cancel');
    results.escaped = [(await escaped) ?? null, ran, body.children.length];

    let release: (value: string) => void = () => {};
    const running = confirmed('Archive?', () => new Promise<string>((resolve) => (release = resolve)));
    void confirmButton().fire('click');
    await settle();
    results.whileRunning = [confirmButton().disabled, cancelButton().disabled, confirmButton().attributes['aria-busy']];
    cancelButton().fire('click');
    dialog().fire('cancel');
    void confirmButton().fire('click');
    results.staysOpenWhileRunning = body.children.length;
    release('archived');
    results.finished = [await running, body.children.length];

    let attempts = 0;
    const retried = confirmed('Delete?', async () => {
        if (++attempts === 1) throw Object.assign(new Error('refused'), { body: { message: 'That note is locked.' } });
        return 'deleted';
    });
    void confirmButton().fire('click');
    await settle();
    results.afterFailure = {
        stillOpen: body.children.length,
        alert: part((node) => node.attributes.role === 'alert').textContent,
        enabledAgain: !confirmButton().disabled && !cancelButton().disabled
    };
    void confirmButton().fire('click');
    results.retried = [await retried, attempts, body.children.length];

    const unnamed = confirmed('Delete?', async () => Promise.reject(new Error('boom')));
    void confirmButton().fire('click');
    await settle();
    results.unnamedFailure = part((node) => node.attributes.role === 'alert').textContent === confirmMessages.failed;
    cancelButton().fire('click');
    results.cancelledAfterFailure = (await unnamed) ?? null;
}

console.log(JSON.stringify(results));
