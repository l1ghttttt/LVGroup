import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import aspectRatio from "@tailwindcss/aspect-ratio";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/entities/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
	"./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@shadcn/ui/components/**/*.{js,ts,jsx,tsx}",
	"./public/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border-color))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		fontSize: {
			headerSize: 'var(--text-header)',
			mainZag: 'var(--mainZag)',
			welcomeLink: 'var(--welcome-link)',
			welcomeDescr: 'var(--welcome-link-deskr)',
		},
		textColor: {
			headerColor: 'hsl(var(--header-color))',
			altColor: 'hsl(var(--text-inversion))',
			welcomeColorDescr: 'hsl(var(--welcome-colorDescr))',
			mainColor: 'hsl(var(--main-color))',
		},
		backgroundColor: {
			mainColor: 'hsl(var(--main-color))',
			darkMain: 'hsl(var(--dark-main))',
		},
		fontFamily: {
			railway: 'var(--title-font)',
		},
		padding: {
			welcomePadding: 'var(--welcome-pl)',
			welcomeWrapper: 'var(--welcome-wrapper)',
			welcomeWrapperBottom: 'var(--welcome-wrapper-bottom)',
			welcomeLinkPadding: 'var(--welcome-link-padding)',
			welcomeLinkPaddingTop: 'var(--welcome-link-padding-top)',
		}
  	}
  },
  plugins: [forms, typography, aspectRatio, require("tailwindcss-animate")],
} satisfies Config;