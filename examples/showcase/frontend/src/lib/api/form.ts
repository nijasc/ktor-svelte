export interface FieldBounds {
    required?: boolean;
    minlength?: number;
    maxlength?: number;
    min?: number;
    max?: number;
    pattern?: string;
}

export interface FieldOptions {
    bounds?: FieldBounds;
    errors?: string[];
    errorClass?: string;
}

type FieldElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

let fieldCount = 0;

export function field(node: FieldElement, options: FieldOptions = {}) {
    const message = document.createElement('p');
    message.id = `ktor-svelte-field-${++fieldCount}`;
    message.setAttribute('role', 'alert');
    const applied = new Set<string>();

    function apply({ bounds = {}, errors = [], errorClass = 'field-error' }: FieldOptions) {
        applied.forEach((name) => node.removeAttribute(name));
        applied.clear();
        for (const [name, value] of Object.entries(bounds)) {
            if (value === undefined || value === false) continue;
            node.setAttribute(name, value === true ? '' : String(value));
            applied.add(name);
        }
        const text = errors.join(' ');
        message.className = errorClass;
        message.textContent = text;
        if (text === '') {
            node.removeAttribute('aria-invalid');
            node.removeAttribute('aria-describedby');
            message.remove();
            return;
        }
        node.setAttribute('aria-invalid', 'true');
        node.setAttribute('aria-describedby', message.id);
        if (!message.isConnected) node.after(message);
    }

    apply(options);
    return { update: apply, destroy: () => message.remove() };
}
