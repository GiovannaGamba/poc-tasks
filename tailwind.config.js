/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: '#F8FAFC',
          100: '#E8EAEF',
          200: '#CED1D3',
          300: '#959BA0',
          400: '#81878D',
          500: '#606971',
          600: '#4C5359',
          700: '#2D3033',
          800: '#1C1E20',
          900: '#101213',
        },
        primary: {
          50: '#EBF0FE',
          100: '#C0D1FD',
          200: '#A2BBFB',
          300: '#779CFA',
          400: '#5D89F9',
          500: '#346BF7',
          600: '#2F61E1',
          700: '#254CAF',
          800: '#1D3B88',
          900: '#162D68',
        },
        secondary: {
          50: '#E8E6F1',
          100: '#B6B2D3',
          200: '#938CBE',
          300: '#6258A1',
          400: '#43378E',
          500: '#140572',
          600: '#120568',
          700: '#0E0451',
          800: '#0B033F',
          900: '#080230',
        },
        success: {
          50: '#CFFEEA',
          100: '#B8E3D1',
          200: '#94C9B3',
          300: '#63B090',
          400: '#45A17A',
          500: '#168959',
          600: '#147D51',
          700: '#10613F',
          800: '#0C4B31',
          900: '#093A25',
        },
        warning: {
          50: '#FFF8DB',
          100: '#FBE9B7',
          200: '#F9DE95',
          300: '#F6CF64',
          400: '#F5C546',
          500: '#F2B718',
          600: '#DCA716',
          700: '#AC8211',
          800: '#7F5F01',
          900: '#664D0A',
        },
        danger: {
          50: '#FBEDED',
          100: '#F3C7C7',
          200: '#EDACAC',
          300: '#E58686',
          400: '#E06F6F',
          500: '#D84B4B',
          600: '#C54444',
          700: '#993535',
          800: '#772929',
          900: '#5B2020',
        },
        info: {
          50: '#E0F2FE',
          100: '#BAE6FD',
          200: '#7DD3FC',
          300: '#38BDF8',
          400: '#0EA5E9',
          500: '#0284C7',
          600: '#0369A1',
          700: '#075985',
          800: '#0C4A6E',
          900: '#082F49',
        },
        pink: {
          200: '#F6ABD0',
          500: '#EC4899',
          700: '#A8336D',
          900: '#631E40',
        },
        green: {
          200: '#8AD0C6',
          500: '#009883',
          700: '#006C5D',
          900: '#004037',
        },
        orange: {
          200: '#F6C1AA',
          500: '#EC7846',
          700: '#A85532',
          900: '#63321D',
        },
        purple: {
          200: '#E0B9FC',
          500: '#BB66F8',
          700: '#8548B0',
          900: '#4F2B68',
        },
      },
      fontFamily: {
        // Fonte principal: Inter
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Sistema de tipografia baseado no Inter
        'heading-1': ['36px', { 
          lineHeight: '48px', 
          fontWeight: '600',
          letterSpacing: '0em'
        }],
        'heading-2': ['24px', { 
          lineHeight: '32px', 
          fontWeight: '600',
          letterSpacing: '0em'
        }],
        'heading-3': ['18px', { 
          lineHeight: '24px', 
          fontWeight: '600',
          letterSpacing: '0em'
        }],
        'title-1': ['16px', { 
          lineHeight: '22px', 
          fontWeight: '600',
          letterSpacing: '0em'
        }],
        'title-2': ['16px', { 
          lineHeight: '22px', 
          fontWeight: '400',
          letterSpacing: '0em'
        }],
        'body-1': ['14px', { 
          lineHeight: '20px', 
          fontWeight: '700',
          letterSpacing: '0.2%'
        }],
        'body-2': ['14px', { 
          lineHeight: '20px', 
          fontWeight: '500',
          letterSpacing: '0.2%'
        }],
        'body-3': ['14px', { 
          lineHeight: '20px', 
          fontWeight: '400',
          letterSpacing: '0.2%'
        }],
        'caption-1': ['12px', { 
          lineHeight: '18px', 
          fontWeight: '700',
          letterSpacing: '0.2%'
        }],
        'caption-2': ['12px', { 
          lineHeight: '18px', 
          fontWeight: '500',
          letterSpacing: '0.2%'
        }],
        'detail-1': ['10px', { 
          lineHeight: '16px', 
          fontWeight: '700',
          letterSpacing: '0.3%'
        }],
        'detail-2': ['10px', { 
          lineHeight: '16px', 
          fontWeight: '500',
          letterSpacing: '0.3%'
        }],
      },
      fontWeight: {
        // Pesos específicos para Inter
        'regular': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
    },
  },
  plugins: [],
}

