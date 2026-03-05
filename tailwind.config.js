/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // ═══════════ LIGHT MODE ═══════════
                'cream': '#FAF7F2',
                'warm-sand': '#F0EBE3',
                'stone-100': '#E8E2D9',
                'pure-card': '#FFFFFF',

                'gold': '#B8860B',
                'gold-light': '#D4A844',
                'gold-deep': '#8B6508',
                'gold-soft': '#FDF5E6',
                'gold-mist': '#F5ECD5',

                'teal': '#0D9488',
                'teal-deep': '#134E4A',
                'teal-light': '#5EEAD4',
                'teal-soft': '#E6FAF7',

                'coral': '#E85D4A',
                'coral-deep': '#C0392B',
                'coral-soft': '#FDEDEB',

                'ink': '#1A1613',
                'charcoal': '#3D3529',
                'stone-text': '#6B5E50',
                'muted-text': '#9C8E7E',

                'cat-batik': '#7C3AED',
                'cat-food': '#E85D4A',
                'cat-craft': '#0D9488',
                'cat-weave': '#6366F1',
                'cat-pottery': '#B45309',
                'cat-herbal': '#16A34A',

                // ═══════════ DARK MODE ═══════════
                'night': '#0F0D0A',
                'night-surface': '#1A1613',
                'night-card': '#231F1B',
                'night-border': '#332D26',

                'gold-neon': '#E8C560',
                'gold-bright': '#D4A844',
                'gold-glow-bg': '#3D2E0A',

                'teal-neon': '#5EEAD4',
                'teal-bright': '#2DD4BF',
                'teal-glow-bg': '#0A3D37',

                'coral-neon': '#FF7B6B',
                'coral-bright': '#E85D4A',
                'coral-glow-bg': '#3D1510',

                'dark-heading': '#F5F0E8',
                'dark-body': '#D4CCBF',
                'dark-muted': '#9C8E7E',

                'cat-batik-dark': '#A78BFA',
                'cat-food-dark': '#FF7B6B',
                'cat-craft-dark': '#5EEAD4',
                'cat-weave-dark': '#818CF8',
                'cat-pottery-dark': '#D97706',
                'cat-herbal-dark': '#4ADE80',
            },
            fontFamily: {
                serif: ['DM Serif Display', 'Georgia', 'Times New Roman', 'serif'],
                sans: ['DM Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
            },
            transitionDuration: {
                '250': '250ms',
            },
        },
    },
    plugins: [],
}
