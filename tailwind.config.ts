
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				cyber: {
					dark: '#0D1117',
					darker: '#060B14',
					navy: '#0A0F1E',
					light: '#00D4FF',
					accent: '#7C3AED',
					secondary: '#00B4D8',
					cyan: '#00FFFF',
					violet: '#8B5CF6',
					green: '#00FF88',
					red: '#FF3366',
					orange: '#FF8C00',
					muted: '#6B7A99',
					card: '#0D1524',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(40px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'glow-cyan': {
					'0%, 100%': { boxShadow: '0 0 5px rgba(0,212,255,0.3), 0 0 20px rgba(0,212,255,0.1)' },
					'50%': { boxShadow: '0 0 20px rgba(0,212,255,0.6), 0 0 40px rgba(0,212,255,0.2)' }
				},
				'glow-violet': {
					'0%, 100%': { boxShadow: '0 0 5px rgba(124,58,237,0.3)' },
					'50%': { boxShadow: '0 0 20px rgba(124,58,237,0.7)' }
				},
				'pulse': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.4' }
				},
				'scan-line': {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(100vh)' }
				},
				'blink': {
					'0%, 50%': { opacity: '1' },
					'51%, 100%': { opacity: '0' }
				},
				'data-flow': {
					'0%': { strokeDashoffset: '1000' },
					'100%': { strokeDashoffset: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-8px)' }
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'counter': {
					'0%': { transform: 'translateY(100%)' },
					'100%': { transform: 'translateY(0%)' }
				},
				'gradient-x': {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'left center'
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center'
					}
				},
				'typing': {
					'0%': { width: '0%' },
					'100%': { width: '100%' }
				},
				'matrix-fall': {
					'0%': { transform: 'translateY(-100%)', opacity: '1' },
					'100%': { transform: 'translateY(100vh)', opacity: '0' }
				},
				'ping-slow': {
					'0%': { transform: 'scale(1)', opacity: '1' },
					'75%, 100%': { transform: 'scale(1.5)', opacity: '0' }
				},
				'slide-down': {
					'0%': { transform: 'translateY(-10px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-in-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'slide-up': 'slide-up 0.5s ease-out',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				'glow-cyan': 'glow-cyan 2.5s ease-in-out infinite',
				'glow-violet': 'glow-violet 2.5s ease-in-out infinite',
				'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'scan-line': 'scan-line 4s linear infinite',
				'blink': 'blink 1s step-end infinite',
				'float': 'float 4s ease-in-out infinite',
				'spin-slow': 'spin-slow 12s linear infinite',
				'gradient-x': 'gradient-x 4s ease infinite',
				'typing': 'typing 3.5s steps(40, end)',
				'ping-slow': 'ping-slow 2s cubic-bezier(0,0,0.2,1) infinite',
				'slide-down': 'slide-down 0.3s ease-out',
			},
			backgroundImage: {
				'cyber-grid': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300D4FF' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
				'cyber-gradient': 'linear-gradient(135deg, #0A0F1E 0%, #060B14 50%, #0D1117 100%)',
				'hero-gradient': 'linear-gradient(135deg, #060B14 0%, #0A0F1E 60%, #0D1524 100%)',
				'cyan-gradient': 'linear-gradient(135deg, #00D4FF, #00B4D8)',
				'violet-gradient': 'linear-gradient(135deg, #7C3AED, #8B5CF6)',
				'card-gradient': 'linear-gradient(135deg, rgba(13,21,36,0.9) 0%, rgba(6,11,20,0.95) 100%)',
			},
			boxShadow: {
				'cyan-sm': '0 0 10px rgba(0,212,255,0.2)',
				'cyan-md': '0 0 20px rgba(0,212,255,0.3)',
				'cyan-lg': '0 0 40px rgba(0,212,255,0.4)',
				'violet-sm': '0 0 10px rgba(124,58,237,0.2)',
				'violet-md': '0 0 20px rgba(124,58,237,0.4)',
				'card': '0 4px 32px rgba(0,0,0,0.4)',
				'card-hover': '0 8px 48px rgba(0,212,255,0.15)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
