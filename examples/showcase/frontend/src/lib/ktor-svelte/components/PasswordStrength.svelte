<script lang="ts">
    import { passwordRules, passwordStrength } from '#api';

    interface Props {
        password: string | null | undefined;
        requirements?: Record<string, string>;
        label?: string;
        strongText?: string;
        class?: string;
    }

    let {
        password,
        requirements = {},
        label = 'Password strength',
        strongText = 'Strong enough.',
        class: className = ''
    }: Props = $props();

    const strength = $derived(passwordStrength(password ?? ''));
</script>

<div class="grid gap-1 text-sm {className}">
    <progress class="progress progress-success w-full" max={passwordRules.length} value={strength.met.length} aria-label={label}></progress>
    <ul class="grid gap-0.5">
        {#each passwordRules as rule (rule.pattern)}
            {@const met = strength.met.includes(rule)}
            <li class={met ? 'text-success' : 'opacity-70'} data-met={met}>
                <span aria-hidden="true">{met ? '+' : '-'}</span>
                {requirements[rule.requirement] ?? rule.requirement}
            </li>
        {/each}
    </ul>
    <p class="text-success min-h-5" aria-live="polite">{strength.strong ? strongText : ''}</p>
</div>
