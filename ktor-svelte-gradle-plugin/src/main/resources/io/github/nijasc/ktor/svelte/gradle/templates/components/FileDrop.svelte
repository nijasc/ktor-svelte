<script lang="ts" generics="T">
    import { onDestroy } from 'svelte';
    import { errorMessage, type RequestOptions, type UploadRules } from '#api';

    interface Item {
        id: number;
        name: string;
        size: number;
        preview?: string;
        progress: number;
        state: 'waiting' | 'uploading' | 'failed';
        message: string;
    }

    interface Props {
        upload: (file: File, options: RequestOptions) => Promise<T>;
        label: string;
        rules?: UploadRules;
        hint?: string;
        multiple?: boolean;
        disabled?: boolean;
        uploading?: string;
        problem?: (error: unknown, file: File) => string;
        onuploaded?: (result: T, file: File) => void;
        id?: string;
        class?: string;
    }

    let {
        upload,
        label,
        rules,
        hint,
        multiple = false,
        disabled = false,
        uploading = 'Uploading',
        problem,
        onuploaded,
        id,
        class: className = ''
    }: Props = $props();

    const uid = $props.id();
    const inputId = $derived(id ?? uid);
    const accept = $derived(rules?.types?.join(','));
    let items = $state<Item[]>([]);
    let over = $state(false);
    let count = 0;

    function sizeText(bytes: number): string {
        if (bytes < 1024) return `${bytes} B`;
        const unit = bytes < 1024 * 1024 ? 'KiB' : 'MiB';
        return `${(bytes / (unit === 'KiB' ? 1024 : 1024 * 1024)).toFixed(1).replace(/\.0$/, '')} ${unit}`;
    }

    function change(item: number, to: Partial<Item>) {
        const found = items.find((other) => other.id === item);
        if (found) Object.assign(found, to);
    }

    function forget(item: number) {
        const preview = items.find((other) => other.id === item)?.preview;
        if (preview) URL.revokeObjectURL(preview);
        items = items.filter((other) => other.id !== item);
    }

    async function send(item: number, file: File) {
        change(item, { state: 'uploading' });
        try {
            const result = await upload(file, {
                silent: true,
                onUploadProgress: ({ loaded, total }) => change(item, { progress: total ? loaded / total : 0 })
            });
            forget(item);
            onuploaded?.(result, file);
        } catch (error) {
            change(item, { state: 'failed', message: problem ? problem(error, file) : errorMessage(error) });
        }
    }

    async function take(files: File[]) {
        if (disabled) return;
        items.filter((item) => item.state === 'failed').forEach((item) => forget(item.id));
        const chosen = (multiple ? files : files.slice(0, 1)).map((file) => ({ file, item: ++count }));
        items = [
            ...items,
            ...chosen.map(({ file, item }) => ({
                id: item,
                name: file.name,
                size: file.size,
                preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : undefined,
                progress: 0,
                state: 'waiting' as const,
                message: ''
            }))
        ];
        for (const { file, item } of chosen) await send(item, file);
    }

    function picked(event: Event) {
        const input = event.currentTarget as HTMLInputElement;
        const files = [...(input.files ?? [])];
        input.value = '';
        void take(files);
    }

    function dropped(event: DragEvent) {
        event.preventDefault();
        over = false;
        void take([...(event.dataTransfer?.files ?? [])]);
    }

    function hovering(event: DragEvent) {
        event.preventDefault();
        over = !disabled;
    }

    onDestroy(() => items.forEach((item) => item.preview && URL.revokeObjectURL(item.preview)));
</script>

<div
    class={['{{zone}}', over && '{{over}}', className]}
    role="presentation"
    data-drop-zone
    data-over={over}
    ondragover={hovering}
    ondragleave={() => (over = false)}
    ondrop={dropped}
>
    <label class="{{label}}" for={inputId}>{label}</label>
    <input id={inputId} class="{{input}}" type="file" {multiple} {accept} {disabled} onchange={picked} />
    {#if hint}<p class="{{hint}}">{hint}</p>{/if}
    {#if items.length > 0}
        <ul class="{{list}}">
            {#each items as item (item.id)}
                <li class="{{row}}" data-upload-state={item.state}>
                    {#if item.preview}<img class="{{preview}}" src={item.preview} alt="" />{/if}
                    <span class="{{name}}">{item.name}</span>
                    <span>{sizeText(item.size)}</span>
                    {#if item.state === 'failed'}
                        <p class="{{error}}" role="alert">{item.message}</p>
                    {:else}
                        <progress class="{{progress}}" value={item.progress} max="1" aria-label="{uploading} {item.name}"></progress>
                    {/if}
                </li>
            {/each}
        </ul>
    {/if}
</div>
{{style}}