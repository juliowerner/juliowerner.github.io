/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

const colorsTheme = {
	'primary':'rgba(var(--color-primary))',
	'surface-tint':'rgba(var(--color-surface-tint))',
	'on-primary':'rgba(var(--color-on-primary))',
	'primary-container':'rgba(var(--color-pricontainer))',
	'on-primary-container':'rgba(var(--color-on-primary-container))',
	'secondary':'rgba(var(--color-secondary))',
	'on-secondary':'rgba(var(--color-on-secondary))',
	'secondary-container':'rgba(var(--color-secondary-container))',
	'on-secondary-container':'rgba(var(--color-on-secondary-container))',
	'tertiary':'rgba(var(--color-tertiary))',
	'on-tertiary':'rgba(var(--color-on-tertiary))',
	'tertiary-container':'rgba(var(--color-tertiary-container))',
	'on-tertiary-container':'rgba(var(--color-on-tertiary-container))',
	'error':'rgba(var(--color-error))',
	'on-error':'rgba(var(--color-on-error))',
	'error-container':'rgba(var(--color-error-container))',
	'on-error-container':'rgba(var(--color-on-error-container))',
	'background':'rgba(var(--color-background))',
	'on-background':'rgba(var(--color-on-background))',
	'surface':'rgba(var(--color-surface))',
	'on-surface':'rgba(var(--color-on-surface))',
	'surface-variant':'rgba(var(--color-surface-variant))',
	'on-surface-variant':'rgba(var(--color-on-surface-variant))',
	'outline':'rgba(var(--color-outline))',
	'outline-variant':'rgba(var(--color-outline-variant))',
	'shadow':'rgba(var(--color-shadow))',
	'scrim':'rgba(var(--color-scrim))',
	'inverse-surface':'rgba(var(--color-inverse-surface))',
	'inverse-on-surface':'rgba(var(--color-inverse-on-surface))',
	'inverse-primary':'rgba(var(--color-inverse-primary))',
	'primary-fixed':'rgba(var(--color-primary-fixed))',
	'on-primary-fixed':'rgba(var(--color-on-primary-fixed))',
	'primary-fixed-dim':'rgba(var(--color-primary-fixed-dim))',
	'on-primary-fixed-variant':'rgba(var(--color-on-primary-fixed-variant))',
	'secondary-fixed':'rgba(var(--color-secondary-fixed))',
	'on-secondary-fixed':'rgba(var(--color-on-secondary-fixed))',
	'secondary-fixed-dim':'rgba(var(--color-secondary-fixed-dim))',
	'on-secondary-fixed-variant':'rgba(var(--color-on-secondary-fixed-variant))',
	'tertiary-fixed':'rgba(var(--color-tertiary-fixed))',
	'on-tertiary-fixed':'rgba(var(--color-on-tertiary-fixed))',
	'tertiary-fixed-dim':'rgba(var(--color-tertiary-fixed-dim))',
	'on-tertiary-fixed-variant':'rgba(var(--color-on-tertiary-fixed-variant))',
	'surface-dim':'rgba(var(--color-surface-dim))',
	'surface-bright':'rgba(var(--color-surface-bright))',
	'surface-container-lowest':'rgba(var(--color-surface-container-lowest))',
	'surface-container-low':'rgba(var(--color-surface-container-low))',
	'surface-container':'rgba(var(--color-surface-container))',
	'surface-container-high':'rgba(var(--color-surface-container-high))',
	'surface-container-highest':'rgba(var(--color-surface-container-highest))',
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
	plugins: [typography]
};
