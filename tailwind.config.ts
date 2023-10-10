import type { Config } from 'tailwindcss'

export default {
  mode: 'jit',
  content: ['./src/{popup, options}/**/*.{vue, html}'],
  theme: {
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace']
    }
  },
  plugins: []
} satisfies Config
