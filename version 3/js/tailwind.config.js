/* Configuración de Tailwind (CDN). Debe cargarse justo después del script de Tailwind. */
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primario
        'primary': '#3e6560',
        'on-primary': '#ffffff',
        'primary-container': '#8db6b0',
        'on-primary-container': '#204844',
        'primary-fixed': '#c1ebe4',
        'primary-fixed-dim': '#a5cfc8',
        'on-primary-fixed': '#00201d',
        'on-primary-fixed-variant': '#264d49',
        'inverse-primary': '#a5cfc8',

        // Secundario
        'secondary': '#4b6700',
        'on-secondary': '#ffffff',
        'secondary-container': '#c1ef61',
        'on-secondary-container': '#4e6c00',
        'secondary-fixed': '#c4f264',
        'secondary-fixed-dim': '#a9d54a',
        'on-secondary-fixed': '#141f00',
        'on-secondary-fixed-variant': '#374e00',

        // Terciario
        'tertiary': '#9a4244',
        'on-tertiary': '#ffffff',
        'tertiary-container': '#fc8f8e',
        'on-tertiary-container': '#752629',
        'tertiary-fixed': '#ffdad8',
        'tertiary-fixed-dim': '#ffb3b1',
        'on-tertiary-fixed': '#410007',
        'on-tertiary-fixed-variant': '#7c2b2e',

        // Error
        'error': '#ba1a1a',
        'on-error': '#ffffff',
        'error-container': '#ffdad6',
        'on-error-container': '#93000a',

        // Superficies
        'background': '#fafaf0',
        'on-background': '#1a1c16',
        'surface': '#fafaf0',
        'on-surface': '#1a1c16',
        'surface-variant': '#e3e3d9',
        'on-surface-variant': '#414847',
        'surface-bright': '#fafaf0',
        'surface-dim': '#dadbd1',
        'surface-tint': '#3e6560',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#f4f4ea',
        'surface-container': '#eeeee5',
        'surface-container-high': '#e9e9df',
        'surface-container-highest': '#e3e3d9',
        'inverse-surface': '#2f312b',
        'inverse-on-surface': '#f1f1e7',

        // Contornos
        'outline': '#717977',
        'outline-variant': '#c0c8c6',

        // Semáforo (luces del indicador de riesgo)
        'signal-red': '#e86a69',
        'signal-amber': '#f2c14e',
        'signal-green': '#a9d54a',
      },

      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },

      spacing: {
        'space-xs': '0.25rem',
        'space-sm': '0.5rem',
        'space-md': '1rem',
        'space-lg': '1.5rem',
        'space-xl': '2.5rem',
        'gutter': '1.5rem',
        'gutter-mobile': '1rem',
        'margin': '2rem',
        'margin-mobile': '1.25rem',
      },

      fontFamily: {
        'display': ['Plus Jakarta Sans'],
        'display-mobile': ['Plus Jakarta Sans'],
        'headline-lg': ['Plus Jakarta Sans'],
        'headline-lg-mobile': ['Plus Jakarta Sans'],
        'headline-md': ['Plus Jakarta Sans'],
        'headline-sm': ['Plus Jakarta Sans'],
        'body-lg': ['Plus Jakarta Sans'],
        'body-md': ['Plus Jakarta Sans'],
        'body-sm': ['Plus Jakarta Sans'],
        'label-md': ['Space Mono'],
        'label-sm': ['Space Mono'],
        'code-badge': ['Space Mono'],
      },

      fontSize: {
        'display': ['56px', { lineHeight: '64px', letterSpacing: '-0.03em', fontWeight: '800' }],
        'display-mobile': ['36px', { lineHeight: '44px', letterSpacing: '-0.02em', fontWeight: '800' }],
        'headline-lg': ['40px', { lineHeight: '48px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-lg-mobile': ['28px', { lineHeight: '36px', letterSpacing: '-0.01em', fontWeight: '700' }],
        'headline-md': ['28px', { lineHeight: '36px', letterSpacing: '-0.01em', fontWeight: '600' }],
        'headline-sm': ['22px', { lineHeight: '30px', letterSpacing: '0em', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px', letterSpacing: '0em', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '24px', letterSpacing: '0em', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '20px', letterSpacing: '0.01em', fontWeight: '400' }],
        'label-md': ['14px', { lineHeight: '20px', letterSpacing: '0.02em', fontWeight: '400' }],
        'label-sm': ['11px', { lineHeight: '14px', letterSpacing: '0.06em', fontWeight: '400' }],
        'code-badge': ['12px', { lineHeight: '16px', letterSpacing: '0.05em', fontWeight: '700' }],
      },
    },
  },
};
