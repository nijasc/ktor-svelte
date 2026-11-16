class FakeDialog {
    open = false;
    shown = 0;
    listeners: Record<string, Set<(event: { target: unknown }) => void>> = {};
    addEventListener(name: string, listener: (event: { target: unknown }) => void) {
        (this.listeners[name] ??= new Set()).add(listener);
    }
    removeEventListener(name: string, listener: (event: { target: unknown }) => void) {
        this.listeners[name]?.delete(listener);
    }
    fire(name: string, target: unknown = this) {
        this.listeners[name]?.forEach((listener) => listener({ target }));
    }
    showModal() {
        this.open = true;
        this.shown++;
    }
    close() {
        if (!this.open) return;
        this.open = false;
        this.fire('close');
    }
    listening() {
        return Object.values(this.listeners).reduce((sum, set) => sum + set.size, 0);
    }
}

const { modal } = await import(process.argv[2]);
const results: Record<string, unknown> = {};

const unattached = modal();
try {
    unattached.open();
    results.unattached = 'opened';
} catch (error) {
    results.unattached = (error as Error).message;
}

const share = modal<string>();
const node = new FakeDialog();
const attached = share.attach(node as unknown as HTMLDialogElement);
results.closedAtFirst = share.isOpen;
const first = share.open();
results.sameWhileOpen = share.open() === first;
results.opened = [share.isOpen, node.shown];
share.close('ada@example.com');
results.result = await first;
results.closedAfter = [share.isOpen, node.open];

const escaped = share.open();
node.close();
results.escaped = (await escaped) ?? null;

const backdrop = share.open();
node.fire('click', { inside: true });
results.clickInsideKeepsOpen = share.isOpen;
node.fire('click');
results.backdrop = [(await backdrop) ?? null, share.isOpen];

results.answerDoesNotLeak = await (async () => {
    const again = share.open();
    node.close();
    return (await again) ?? null;
})();

const leaving = share.open();
attached.destroy();
results.destroyed = [(await leaving) ?? null, node.listening()];

const sticky = modal<number>({ closeOnBackdrop: false });
const stickyNode = new FakeDialog();
sticky.attach(stickyNode as unknown as HTMLDialogElement);
const kept = sticky.open();
stickyNode.fire('click');
results.stickyStaysOpen = sticky.isOpen;
sticky.close(7);
results.stickyResult = await kept;
sticky.close(9);
results.closingTwiceIsHarmless = sticky.isOpen;

console.log(JSON.stringify(results));
