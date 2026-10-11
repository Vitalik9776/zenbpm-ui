import {
  brandingColorKeys,
  brandingSizeKeys,
  brandingWeightKeys,
  defaultBranding,
  type Branding,
  type BrandingColorKey,
  type BrandingSizeKey,
  type BrandingWeightKey,
} from './types';

const HEX_COLOR = /^#[0-9a-fA-F]{6}$/;
const RGBA_COLOR = /^rgba\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*(?:0|1|0?\.\d+)\s*\)$/;

const isColor = (value: unknown): value is string =>
  typeof value === 'string' && (value === 'transparent' || HEX_COLOR.test(value) || RGBA_COLOR.test(value));

const isSize = (value: unknown): value is number =>
  typeof value === 'number' && Number.isFinite(value) && value >= 0 && value <= 96;

const isWeight = (value: unknown): value is number =>
  typeof value === 'number' && Number.isFinite(value) && value >= 100 && value <= 900;

const FONT_FAMILY = /^[A-Za-z0-9 ,"'-]+$/;

const isFontFamily = (value: unknown): value is string =>
  typeof value === 'string' && value.trim().length > 0 && value.trim().length <= 200 && FONT_FAMILY.test(value.trim());

const normalize = (parsed: Partial<Branding> & { logo?: unknown }): Branding => {
  const colors = {} as Pick<Branding, BrandingColorKey>;
  for (const key of brandingColorKeys) {
    const value = parsed[key];
    colors[key] = isColor(value) ? value : defaultBranding[key];
  }

  const sizes = {} as Pick<Branding, BrandingSizeKey>;
  for (const key of brandingSizeKeys) {
    const value = parsed[key];
    sizes[key] = isSize(value) ? value : defaultBranding[key];
  }

  const weights = {} as Pick<Branding, BrandingWeightKey>;
  for (const key of brandingWeightKeys) {
    const value = parsed[key];
    weights[key] = isWeight(value) ? value : defaultBranding[key];
  }

  const logo = typeof parsed.logo === 'string' ? parsed.logo.trim() : 'default';
  const logoUrl = logo.startsWith('/') || logo.startsWith('./') || /^https?:\/\//i.test(logo) ? logo : null;

  return {
    ...colors,
    ...sizes,
    ...weights,
    fontFamily: isFontFamily(parsed.fontFamily) ? parsed.fontFamily.trim() : defaultBranding.fontFamily,
    logoUrl,
  };
};

/** Reads appearance from `public/branding.json`, served as `/branding.json`. */
export const getBranding = async (): Promise<Branding> => {
  try {
    const response = await fetch('/branding.json');
    if (!response.ok) {
      return defaultBranding;
    }
    return normalize((await response.json()) as Partial<Branding> & { logo?: unknown });
  } catch {
    return defaultBranding;
  }
};
