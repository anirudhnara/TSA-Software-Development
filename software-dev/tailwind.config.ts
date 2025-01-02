import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
			'-text': {
				50: '#040316',
				100: '#08062d',
				200: '#100c5a',
				300: '#181287',
				400: '#2018b4',
				500: '#281fe0',
				600: '#534be7',
				700: '#7e78ed',
				800: '#a9a5f3',
				900: '#d4d2f9',
				950: '#eae9fc',
				DEFAULT: '#040316',
			},
			'backgroundMain': {
				50: '#0a1208',
				100: '#132310',
				200: '#26471f',
				300: '#3a6a2f',
				400: '#4d8e3e',
				500: '#60b14e',
				600: '#80c171',
				700: '#a0d095',
				800: '#bfe0b8',
				900: '#dfefdc',
				950: '#eff7ed',
				DEFAULT: '#d2e9cd',
			},
			'primaryMain': {
				50: '#0b1109',
				100: '#152211',
				200: '#2b4422',
				300: '#406633',
				400: '#558844',
				500: '#6aaa55',
				600: '#88bb77',
				700: '#a6cc99',
				800: '#c4ddbb',
				900: '#e1eedd',
				950: '#f0f6ee',
				DEFAULT: '#2f4b26',
			},
			'secondaryMain': {
				50: '#041115',
				100: '#08222b',
				200: '#114455',
				300: '#196680',
				400: '#2288aa',
				500: '#2aaad5',
				600: '#55bbdd',
				700: '#7fcce6',
				800: '#aaddee',
				900: '#d4eef7',
				950: '#eaf7fb',
				DEFAULT: "#196680",
			},
			'accentMain': {
				50: '#08110c',
				100: '#102318',
				200: '#20462f',
				300: '#306947',
				400: '#408c5e',
				500: '#50af76',
				600: '#73bf91',
				700: '#96cfad',
				800: '#b9dfc8',
				900: '#dcefe4',
				950: '#eef7f1',
				DEFAULT: '#3f885c',
			},
			   
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		   
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
