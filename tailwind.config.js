/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#2563EB',
                    hover: '#1D4ED8',
                    glow: '#3B82F6',
                },
                dark: {
                    DEFAULT: '#0a0a0a',
                    card: '#111111',
                    elevated: '#161616',
                }
            },
            fontFamily: {
                display: ['Sora', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            },
            boxShadow: {
                'glow-blue': '0 0 40px rgba(37, 99, 235, 0.15)',
                'glow-blue-sm': '0 0 20px rgba(37, 99, 235, 0.1)',
                'glow-blue-md': '0 0 30px rgba(37, 99, 235, 0.2)',
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
                'pulse-slow': 'pulse 3s ease-in-out infinite',
                'bounce-slow': 'bounceSlow 2s ease-in-out infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                bounceSlow: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(8px)' },
                },
            },
        },
    },
    plugins: [],
}

