/**
 * Appearance loaded from `/branding.json`.
 * `logo` in the file is `default` for the built-in mark, or a path such as `/4BPM-logo.svg`.
 */
export interface Branding {
  headerBackground: string;
  headerTextColor: string;
  headerHover: string;
  headerBorder: string;
  menuInactiveColor: string;
  menuInactiveHoverBackground: string;
  menuInactiveHoverColor: string;
  menuActiveBackground: string;
  menuActiveColor: string;
  menuActiveHoverBackground: string;
  menuActiveHoverColor: string;
  menuRadius: number;
  menuFontSize: number;
  menuFontWeight: number;
  menuActiveFontWeight: number;
  brandColor: string;
  buttonPrimary: string;
  buttonPrimaryText: string;
  buttonPrimaryHover: string;
  buttonSecondary: string;
  buttonSecondaryText: string;
  buttonSecondaryHover: string;
  buttonSecondaryBorder: string;
  buttonSecondaryHoverBorder: string;
  buttonDelete: string;
  buttonDeleteText: string;
  buttonDeleteHover: string;
  buttonOutlinedText: string;
  buttonOutlinedBorder: string;
  buttonOutlinedHover: string;
  buttonOutlinedHoverBorder: string;
  buttonRadius: number;
  pageBackground: string;
  tableRowHover: string;
  fontFamily: string;
  logoUrl: string | null;
}

export const brandingColorKeys = [
  'headerBackground',
  'headerTextColor',
  'headerHover',
  'headerBorder',
  'menuInactiveColor',
  'menuInactiveHoverBackground',
  'menuInactiveHoverColor',
  'menuActiveBackground',
  'menuActiveColor',
  'menuActiveHoverBackground',
  'menuActiveHoverColor',
  'brandColor',
  'buttonPrimary',
  'buttonPrimaryText',
  'buttonPrimaryHover',
  'buttonSecondary',
  'buttonSecondaryText',
  'buttonSecondaryHover',
  'buttonSecondaryBorder',
  'buttonSecondaryHoverBorder',
  'buttonDelete',
  'buttonDeleteText',
  'buttonDeleteHover',
  'buttonOutlinedText',
  'buttonOutlinedBorder',
  'buttonOutlinedHover',
  'buttonOutlinedHoverBorder',
  'pageBackground',
  'tableRowHover',
] as const;

export type BrandingColorKey = (typeof brandingColorKeys)[number];

export const brandingNumberKeys = [
  'menuRadius',
  'menuFontSize',
  'menuFontWeight',
  'menuActiveFontWeight',
  'buttonRadius',
] as const;

export type BrandingNumberKey = (typeof brandingNumberKeys)[number];

/** Zen UI look, used when a file value is missing or invalid. */
export const defaultBranding: Branding = {
  headerBackground: '#ffffff',
  headerTextColor: '#1a1a1a',
  headerHover: 'transparent',
  headerBorder: '#f0f0f0',
  menuInactiveColor: '#666666',
  menuInactiveHoverBackground: 'transparent',
  menuInactiveHoverColor: '#1a1a1a',
  menuActiveBackground: 'transparent',
  menuActiveColor: '#1a1a1a',
  menuActiveHoverBackground: 'transparent',
  menuActiveHoverColor: '#1a1a1a',
  menuRadius: 0,
  menuFontSize: 14,
  menuFontWeight: 500,
  menuActiveFontWeight: 600,
  brandColor: '#10bc69',
  buttonPrimary: '#10bc69',
  buttonPrimaryText: '#ffffff',
  buttonPrimaryHover: '#0d9956',
  buttonSecondary: '#1a1a1a',
  buttonSecondaryText: '#ffffff',
  buttonSecondaryHover: '#333333',
  buttonSecondaryBorder: '#1a1a1a',
  buttonSecondaryHoverBorder: '#333333',
  buttonDelete: '#dc2626',
  buttonDeleteText: '#ffffff',
  buttonDeleteHover: '#b91c1c',
  buttonOutlinedText: '#666666',
  buttonOutlinedBorder: '#e0e0e0',
  buttonOutlinedHover: '#f5f5f5',
  buttonOutlinedHoverBorder: '#666666',
  buttonRadius: 8,
  pageBackground: '#ffffff',
  tableRowHover: '#fafafa',
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  logoUrl: null,
};

export const brandingQueryKey = ['branding'] as const;
