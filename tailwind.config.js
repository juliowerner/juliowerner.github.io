/** @type {import('tailwindcss').Config} */
const colorsTheme = {
    primary: 'var(--color-primary)',
    'primary-focus': 'var(--color-primary-focus)',
    'primary-content': 'var(--color-primary-content)',
    secondary: 'var(--color-secondary)',
    'secondary-focus': 'var(--color-secondary-focus)',
    'secondary-content': 'var(--color-secondary-content)',
    base: {
        100: 'var(--color-base-100)',
        200: 'var(--color-base-200)',
        300: 'var(--color-base-300)',
        400: 'var(--color-base-400)'
    },
    'base-content': 'var(--color-base-content)',

    info: 'var(--color-info)',
    'info-content': 'var(--color-info-content)',
    success: 'var(--color-success)',
    'success-content': 'var(--color-success-content)',
    warning: 'var(--color-warning)',
    'warning-content': 'var(--color-warning-content)',
    error: 'var(--color-error)',
    'error-content': 'var(--color-error-content)'
};

export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    darkMode: 'selector',
    theme: {
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
            serif: ['Noto Serif', 'serif'],
            mono: ['Roboto Mono', 'monospace']
        },
        extend: {
            colors: colorsTheme,
            animation: {
                flip: 'flip 6s infinite steps(2, end)',
                kitrotate: 'kitrotate 3s linear infinite both',
                shine: 'shine 2s linear infinite',
                slide: 'slide 40s linear infinite',
                spotlight: 'spotlight 2s ease .75s 1 forwards',
                'border-width': 'border-width 3s infinite alternate',
                'text-gradient': 'text-gradient 2s linear infinite',
                'text-shake': 'text-shake 1s ease 1',
                'text-glitch-to': 'text-glitch-to 0.6s ease-in-out infinite',
                'text-glitch-from': 'text-glitch-from 0.6s ease-in-out infinite',
                'text-scale': 'text-scale 1s linear infinite forwards',
                spin: 'spin 2s linear infinite',
                // From UI-Snippets : https://ui.ibelick.com
                // 'text-gradient': 'text-gradient 1.5s linear infinite',
                'background-shine': 'background-shine 2s linear infinite',
                'pulse-slow': 'pulse 6s infinite cubic-bezier(0.4, 0, 0.6, 1)'
            },
            keyframes: {
                spin: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' }
                },
                flip: {
                    to: {
                        transform: 'rotate(360deg)'
                    }
                },
                kitrotate: {
                    to: {
                        transform: 'rotate(90deg)'
                    }
                },
                shine: {
                    from: {
                        backgroundPosition: '0 0'
                    },
                    to: {
                        backgroundPosition: '-200% 0'
                    }
                },
                'border-width': {
                    from: {
                        width: '10px',
                        opacity: '0'
                    },
                    to: {
                        width: '100px',
                        opacity: '1'
                    }
                },
                'text-gradient': {
                    to: {
                        backgroundPosition: '200% center'
                    }
                },
                'text-shake': {
                    '15%': { transform: 'translateX(5px)' },
                    '30%': { transform: 'translateX(-5px)' },
                    '50%': { transform: 'translateX(3px)' },
                    '80%': { transform: 'translateX(2px)' },
                    '100%': { transform: 'translateX(0)' }
                },
                'text-glitch-to': {
                    from: {
                        transform: 'translateY(0)'
                    },
                    to: {
                        transform: 'translateY(-100%)'
                    }
                },
                'text-glitch-from': {
                    from: {
                        transform: 'translateY(100%)'
                    },
                    to: {
                        transform: 'translateY(0)'
                    }
                },
                'text-scale': {
                    '0%': {
                        transform: 'scaleX(0)',
                        transformOrigin: 'bottom left'
                    },
                    '25%': {
                        transform: 'scaleX(1)',
                        transformOrigin: 'bottom left'
                    },
                    '75%': {
                        transform: 'scaleX(1)',
                        transformOrigin: 'bottom right'
                    },
                    '100%': {
                        transform: 'scaleX(0)',
                        transformOrigin: 'bottom right'
                    }
                },
                slide: {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(calc(-100% - var(--gap)))' }
                },
                spotlight: {
                    '0%': {
                        opacity: '0',
                        transform: 'translate(-72%, -62%) scale(0.5)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translate(-50%,-40%) scale(1)'
                    }
                },
                // For Gradient Input, UI-Snippets : https://ui.ibelick.com
                'background-shine': {
                    from: { backgroundPosition: '0 0' },
                    to: { backgroundPosition: '-200% 0' }
                }
            } // Keyframes
        } // Extend
    },
    plugins: [
        require('@tailwindcss/typography'),
    ]
};
