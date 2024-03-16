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
                    7: '#606060',
                },
                tint: {
                    1: '#E8F4FA',
                },
            },
        },
    },
    plugins: [],
};
export default config;

