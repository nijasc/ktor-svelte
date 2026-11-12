import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import { h } from 'vue';
import ArchitectureDiagram from './ArchitectureDiagram.vue';
import ConfigBuilder from './ConfigBuilder.vue';
import GeneratorPlayground from './GeneratorPlayground.vue';
import SetupBuilder from './SetupBuilder.vue';
import StackBlitzButton from './StackBlitzButton.vue';
import VersionBanner from './VersionBanner.vue';
import VersionSwitcher from './VersionSwitcher.vue';
import './custom.css';

export default {
    extends: DefaultTheme,
    Layout: () =>
        h(DefaultTheme.Layout, null, {
            'layout-top': () => h(VersionBanner),
            'nav-bar-content-after': () => h(VersionSwitcher)
        }),
    enhanceApp({ app }) {
        app.component('ArchitectureDiagram', ArchitectureDiagram);
        app.component('ConfigBuilder', ConfigBuilder);
        app.component('GeneratorPlayground', GeneratorPlayground);
        app.component('SetupBuilder', SetupBuilder);
        app.component('StackBlitzButton', StackBlitzButton);
    }
} satisfies Theme;
