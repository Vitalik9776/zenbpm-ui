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
        dark: branding.buttonPrimaryHover,
        light: brandLight,
        contrastText: branding.badgeSuccessText,
      },
      secondary: {
        main: branding.buttonSecondary,
        dark: branding.buttonSecondaryHover,
        contrastText: branding.buttonSecondaryText,
      },
      text: {
        primary: branding.textPrimary,
        secondary: branding.textSecondary,
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
            '--zb-table-header': branding.tableHeaderBackground,
            '--zb-table-header-text': branding.tableHeaderText,
            '--zb-table-border': branding.tableBorder,
            '--zb-text-muted': branding.textMuted,
            '--zb-text-primary': branding.textPrimary,
            '--zb-text-secondary': branding.textSecondary,
            '--zb-font-size': `${branding.fontSize}px`,
            '--zb-button-font-size': `${branding.buttonFontSize}px`,
            '--zb-button-small-font-size': `${branding.buttonSmallFontSize}px`,
            '--zb-button-font-weight': String(branding.buttonFontWeight),
            '--zb-page-title-size': `${branding.pageTitleFontSize}px`,
            '--zb-page-title-weight': String(branding.pageTitleFontWeight),
            '--zb-body-font-size': `${branding.bodyFontSize}px`,
            '--zb-small-font-size': `${branding.smallFontSize}px`,
            '--zb-caption-font-size': `${branding.captionFontSize}px`,
            '--zb-table-font-size': `${branding.tableFontSize}px`,
            '--zb-table-header-font-size': `${branding.tableHeaderFontSize}px`,
            '--zb-badge-success': branding.badgeSuccess,
            '--zb-badge-success-text': branding.badgeSuccessText,
            '--zb-badge-danger': branding.badgeDanger,
            '--zb-badge-danger-text': branding.badgeDangerText,
            '--zb-badge-neutral': branding.badgeNeutral,
            '--zb-badge-neutral-text': branding.badgeNeutralText,
            '--zb-badge-soft': branding.badgeSoft,
            '--zb-badge-soft-text': branding.badgeSoftText,
            '--zb-pagination-selected': branding.paginationSelected,
            '--zb-pagination-selected-text': branding.paginationSelectedText,
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
          html: {
            fontSize: branding.fontSize,
          },
          body: {
            backgroundColor: branding.pageBackground,
            color: branding.textPrimary,
            fontFamily: branding.fontFamily,
            fontSize: branding.bodyFontSize,
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
