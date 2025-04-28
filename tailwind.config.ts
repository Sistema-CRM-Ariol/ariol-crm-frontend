import { heroui } from '@heroui/theme';
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(autocomplete|badge|button|chip|divider|dropdown|form|input|modal|pagination|progress|radio|select|table|tabs|toast|popover|user|ripple|spinner|listbox|scroll-shadow|menu|checkbox|spacer|avatar).js"
  ],
  theme: {
    extend: {
      colors: {
        body: "#f5f7fa"
      }
    }
  },
  plugins: [
    require('tailwindcss-animated'),
    heroui({
      defaultTheme: 'light',
      layout: {
        boxShadow: {
          small: 'rgba(58,101,247,0.1) 0px 0px 16px;',
          medium: 'rgba(58,101,247, 0.2) 0px 4px 16px, rgba(58,101,247, 0.01) 0px 8px 32px;'
        },
        radius: {
          small: '3px',
          medium: '12px',
          large: '9px',
        },
      },

      themes: {
        light: {
          colors: {
            focus: "#000",
            overlay: "#fff",
            background: '#f9f9f9',
            primary: {
              DEFAULT: "#3d4ba4",
              '50': '#f2f5fc',
              '100': '#e2e8f7',
              '200': '#ccd7f1',
              '300': '#a8bee8',
              '400': '#7f9cdb',
              '500': '#607dd1',
              '600': '#4d63c3',
              '700': '#3d4ba4',
              '800': '#3b4492',
              '900': '#343c74',
          },
            secondary: {
              DEFAULT: '#615ffb',
              '50': '#edf0ff',
              '100': '#dee5ff',
              '200': '#c3ceff',
              '300': '#9fadff',
              '400': '#7980ff',
              '500': '#615ffb',
              '600': '#4b3bf0',
              '700': '#402ed4',
              '800': '#3428ab',
              '900': '#2f2887',
            },
          }
        }
      }
    })
  ],
} satisfies Config;
