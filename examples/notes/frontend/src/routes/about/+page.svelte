<script lang="ts">
    import { m } from '#i18n';
</script>

<article class="prose">
    <h1>{m.aboutTitle()}</h1>
    <enhanced:img src="#lib/assets/hero.png" alt="" class="rounded-box" sizes="(min-width: 768px) 65ch, 100vw" />
    <ul>
        <li>{m.aboutRoutes()}</li>
        <li>{m.aboutLibraries()}</li>
    </ul>
</article>
