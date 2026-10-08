import { alpha, createTheme, darken, lighten } from '@mui/material/styles';
import type { Branding } from '@base/branding';
import { theme } from './index';

/** Applies saved branding on top of the default theme via CSS variables and palette. */
export const createAppTheme = (branding: Branding) => {
  const brandDark = darken(branding.brandColor, 0.18);
  const brandLight = lighten(branding.brandColor, 0.32);

  return createTheme(theme, {
    typography: {
      fontFamily: branding.fontFamily,
      h1: { fontFamily: branding.fontFamily },
      h2: { fontFamily: branding.fontFamily },
      h3: { fontFamily: branding.fontFamily },
      h4: { fontFamily: branding.fontFamily },
      h5: { fontFamily: branding.fontFamily },
      h6: { fontFamily: branding.fontFamily },
      subtitle1: { fontFamily: branding.fontFamily },
      subtitle2: { fontFamily: branding.fontFamily },
      body1: { fontFamily: branding.fontFamily },
      body2: { fontFamily: branding.fontFamily },
      button: { fontFamily: branding.fontFamily },
      caption: { fontFamily: branding.fontFamily },
      captionNormal: { fontFamily: branding.fontFamily },
    },
    palette: {
      primary: {
        main: branding.brandColor,
        dark: brandDark,
        light: brandLight,
        contrastText: branding.buttonPrimaryText,
      },
      secondary: {
        main: branding.buttonSecondary,
        contrastText: branding.buttonSecondaryText,
      },
      background: {
        default: branding.pageBackground,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          ':root': {
            '--zb-brand': branding.brandColor,
            '--zb-brand-dark': brandDark,
            '--zb-brand-light': brandLight,
            '--zb-brand-bg': alpha(branding.brandColor, 0.12),
            '--zb-brand-glow': alpha(branding.brandColor, 0.1),
            '--zb-page-background': branding.pageBackground,
            '--zb-table-row-hover': branding.tableRowHover,
            '--zb-button-radius': `${branding.buttonRadius}px`,
            '--zb-button-primary': branding.buttonPrimary,
            '--zb-button-primary-hover': branding.buttonPrimaryHover,
            '--zb-button-primary-text': branding.buttonPrimaryText,
            '--zb-button-secondary': branding.buttonSecondary,
            '--zb-button-secondary-hover': branding.buttonSecondaryHover,
            '--zb-button-secondary-text': branding.buttonSecondaryText,
            '--zb-button-secondary-border': branding.buttonSecondaryBorder,
            '--zb-button-secondary-hover-border': branding.buttonSecondaryHoverBorder,
            '--zb-button-delete': branding.buttonDelete,
            '--zb-button-delete-hover': branding.buttonDeleteHover,
            '--zb-button-delete-text': branding.buttonDeleteText,
            '--zb-button-outlined-text': branding.buttonOutlinedText,
            '--zb-button-outlined-border': branding.buttonOutlinedBorder,
            '--zb-button-outlined-hover': branding.buttonOutlinedHover,
            '--zb-button-outlined-hover-border': branding.buttonOutlinedHoverBorder,
          },
          body: {
            backgroundColor: branding.pageBackground,
            fontFamily: branding.fontFamily,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: branding.buttonRadius,
          },
          sizeSmall: {
            borderRadius: branding.buttonRadius,
          },
        },
      },
    },
  });
};
