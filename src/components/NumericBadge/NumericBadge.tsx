import { Chip, type ChipProps } from '@mui/material';

export interface NumericBadgeProps {
  value: number;
  color?: Exclude<ChipProps['color'], 'default'>;
}

const badgeTone: Record<string, { background: string; text: string }> = {
  primary: { background: 'var(--zb-badge-success)', text: 'var(--zb-badge-success-text)' },
  success: { background: 'var(--zb-badge-success)', text: 'var(--zb-badge-success-text)' },
  error: { background: 'var(--zb-badge-danger)', text: 'var(--zb-badge-danger-text)' },
  warning: { background: 'var(--zb-badge-danger)', text: 'var(--zb-badge-danger-text)' },
  info: { background: 'var(--zb-badge-success)', text: 'var(--zb-badge-success-text)' },
  secondary: { background: 'var(--zb-badge-neutral)', text: 'var(--zb-badge-neutral-text)' },
};

export const NumericBadge = ({ value, color = 'primary' }: NumericBadgeProps) => {
  const hasPositiveValue = value > 0;
  const tone = badgeTone[color] ?? badgeTone.primary;

  return (
    <Chip
      size="small"
      label={value}
      sx={{
        bgcolor: hasPositiveValue ? tone.background : 'var(--zb-badge-neutral)',
        color: hasPositiveValue ? tone.text : 'var(--zb-badge-neutral-text)',
        fontWeight: 600,
        minWidth: 40,
      }}
    />
  );
};
