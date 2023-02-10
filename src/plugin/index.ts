import type { Plugin } from '@docusaurus/types';

export default function theme(): Plugin<undefined> {
    const name = 'preset-classic';

    return {
        name: `docupotamus-theme-${name}`,

        getThemePath() {
            return '../../lib/plugin/theme';
        },

        getTypeScriptThemePath() {
            return '../../src/plugin/theme';
        },
    };
};

export const getSwizzleComponentList = (): string[] => [];
