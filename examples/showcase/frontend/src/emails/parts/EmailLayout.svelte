<script lang="ts">
    import type { Snippet } from 'svelte';
    import { m } from '#i18n';

    let { children }: { children: Snippet } = $props();
</script>

<div class="frame">
    <p class="brand">{m.appTitle()}</p>
    {@render children()}
    <p class="footer">{m.emailFooter()}</p>
</div>

<style>
    .frame {
        max-width: 560px;
        margin: 0 auto;
        padding: 24px;
        font-family: Inter, Arial, sans-serif;
        color: #1f1b3a;
        background: #fdfcff;
    }
    .brand {
        margin: 0 0 24px;
        font-weight: 600;
        color: #7f52ff;
    }
    .footer {
        margin: 32px 0 0;
        font-size: 12px;
        color: #6b6880;
    }
</style>
