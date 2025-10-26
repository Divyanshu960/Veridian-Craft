import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom Veridian Craft colors
        
        // Custom Veridian Craft colors - LIGHT THEME
        quicksand: "#B68B4C",        // replaced (was #d0b182) - darker brown for better contrast
        woodsmoke: "#2A3F72",        // replaced (was #f8f9fa) - light off-white background (from new palette)
        "soya-bean": "#62574e",      // replaced (was #9e6f4c) - medium brown
        merlin: "#ffffff",           // kept as pure white for cards
        gunsmoke: "#73828e",         // replaced (was #4a5568) - mid cool-gray for primary text (from new palette)
        jumbo: "#2A3F72",            // replaced (was #718096) - deeper cool-gray for secondary text (from new palette) 😎
        "cape-cod": "#a99985",       // replaced (was #e2e8f0) - muted taupe for borders (from new palette)
        "mule-fawn": "#d18f48",      // unchanged - signature accent brown
        abbey: "#e8d7c4",            // replaced (was #f7fafc) - warm cream for subtle surfaces (from new palette)
        "outer-space": "#eae6e2",    // replaced (was #f1f5f9) - light off-white for sections (from new palette)
        "white": "#e2e3e5"           // kept as-is
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
