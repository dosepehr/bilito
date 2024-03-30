import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            screens: {
                sm: { min: '500px' },
                md: { min: '768px' },
                lg: { min: '992px' },
                xl: { min: '1200px' },
            },
            colors: {
                blue: {
                    primary: '#1D91CC',
                },
                gray: {
                    1: '#F9F9F9',
                    3: '#DFDFDF',
                    5: '#ADADAD',
                    7: '#606060',
                    8: '#404040',
                    9: '#202020',
                },
                tint: {
                    1: '#E8F4FA',
                },
                shade: {
                    2: '#11577A',
                    3: '#0C3A52',
                },
            },
            fontFamily: {
                ISBlack: 'ISBlack',
                ISBold: 'ISBold',
                IS: 'IS',
                ISMedium: 'ISMedium',
                ISLight: 'ISLight',
                ISUltraLight: 'ISUltraLight',
            },
        },
    },
    plugins: [],
};
export default config;

