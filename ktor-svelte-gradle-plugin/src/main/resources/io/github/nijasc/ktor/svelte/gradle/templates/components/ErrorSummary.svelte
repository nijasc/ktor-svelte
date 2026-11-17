<script lang="ts">
    interface Props {
        errors: Record<string, string[] | undefined>;
        labels?: Record<string, string>;
        title?: string;
        class?: string;
    }

    let { errors, labels = {}, title = 'Please check these fields:', class: className = '' }: Props = $props();

    const entries = $derived(Object.entries(errors).filter((entry): entry is [string, string[]] => (entry[1]?.length ?? 0) > 0));

    function fieldOf(name: string): HTMLElement | null {
        return document.getElementById(name) ?? (document.getElementsByName(name)[0] as HTMLElement | undefined) ?? null;
    }

    function open(event: MouseEvent, name: string) {
        const target = fieldOf(name);
        if (!target) return;
        event.preventDefault();
        target.focus({ preventScroll: true });
        target.scrollIntoView({ block: 'center' });
    }
</script>

{#if entries.length > 0}
    <div class="{{wrapper}} {className}" role="alert">
        <p class="{{title}}">{title}</p>
        <ul class="{{list}}">
            {#each entries as [name, messages] (name)}
                <li><a class="{{link}}" href="#{name}" onclick={(event) => open(event, name)}>{labels[name] ?? name}: {messages.join(' ')}</a></li>
            {/each}
        </ul>
    </div>
{/if}{{style}}
