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

<div class="{{wrapper}} {className}">
    <progress class="{{meter}}" max={passwordRules.length} value={strength.met.length} aria-label={label}></progress>
    <ul class="{{list}}">
        {#each passwordRules as rule (rule.pattern)}
            {@const met = strength.met.includes(rule)}
            <li class={met ? '{{met}}' : '{{missing}}'} data-met={met}>
                <span aria-hidden="true">{met ? '+' : '-'}</span>
                {requirements[rule.requirement] ?? rule.requirement}
            </li>
        {/each}
    </ul>
    <p class="{{status}}" aria-live="polite">{strength.strong ? strongText : ''}</p>
</div>{{style}}
