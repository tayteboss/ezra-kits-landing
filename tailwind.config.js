import { nextui } from "@nextui-org/react";

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class",
  theme: {
    extend: {
      gridTemplateRows: {
        12: "repeat(12, minmax(0, 1fr))",
      },
      transitionDuration: {
        1000: "1000ms",
        500: "500ms",
      },
      transitionTimingFunction: {
        "ease-custom": "ease", // Custom timing function
      },
      colors: {
        border: "var(--border)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: {
          DEFAULT: "var(--secondary)",
        },
        muted: {
          DEFAULT: "var(--muted)",
        },
        card: {
          DEFAULT: "var(--card)",
        },
        accent: {
          DEFAULT: "var(--accent)",
        },
        "system-foreground": "var(--system-foreground)",
        "system-background": "var(--system-background)",
        "system-muted": "var(--system-muted)",
        "system-secondary": "var(--system-secondary)",
        "system-card": "var(--system-card)",
        "system-icon": "var(--system-icon)",
        "system-input": "var(--system-input)",
        "system-accent": "var(--system-accent)",
        "system-light": "var(--system-light)",
  
        "white-foreground": "var(--white-foreground)",
        "white-background": "var(--white-background)",
        "white-secondary": "var(--white-secondary)",
        "yolk-foreground": "var(--yolk-foreground)",
        "yolk-background": "var(--yolk-background)",
        "yolk-secondary": "var(--yolk-secondary)",
        "amber-foreground": "var(--amber-foreground)",
        "amber-background": "var(--amber-background)",
        "amber-secondary": "var(--amber-secondary)",
        "forrest-foreground": "var(--forrest-foreground)",
        "forrest-background": "var(--forrest-background)",
        "forrest-secondary": "var(--forrest-secondary)",
        "sky-foreground": "var(--sky-foreground)",
        "sky-background": "var(--sky-background)",
        "sky-secondary": "var(--sky-secondary)",
        "voilet-foreground": "var(--voilet-foreground)",
        "voilet-background": "var(--voilet-background)",
        "voilet-secondary": "var(--voilet-secondary)",
        "beige-foreground": "var(--beige-foreground)",
        "beige-background": "var(--beige-background)",
        "beige-secondary": "var(--beige-secondary)",
        "scarlet-foreground": "var(--scarlet-foreground)",
        "scarlet-background": "var(--scarlet-background)",
        "scarlet-secondary": "var(--scarlet-secondary)",
        "cacao-foreground": "var(--cacao-foreground)",
        "cacao-background": "var(--cacao-background)",
        "cacao-secondary": "var(--cacao-secondary)",
        "lilac-foreground": "var(--lilac-foreground)",
        "lilac-background": "var(--lilac-background)",
        "lilac-secondary": "var(--lilac-secondary)",
        "night-foreground": "var(--night-foreground)",
        "night-background": "var(--night-background)",
        "night-secondary": "var(--night-secondary)",
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        gtAplinaStandardLightItalic: [
          "gtAplinaStandardLightItalic",
          "sans-serif",
        ],
        itcGaramondStdBookNarrow: ["itcGaramondStdBookNarrow", "sans-serif"],
        pPAcmaLight: ["pPAcmaLight", "sans-serif"],
        twkLausanne450: ["twkLausanne450", "sans-serif"],
        basisGrotesqueMonoRegularPro: [
          "basisGrotesqueMonoRegularPro",
          "sans-serif",
        ],
        helveticaNeueCondensedBlack: [
          "helveticaNeueCondensedBlack",
          "sans-serif",
        ],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      opacity: {
        90: ".90",
        75: ".75",
        50: ".50",
        25: ".25",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-animate"),
  nextui({
    addCommonColors: true,
  }),
  ],
};
