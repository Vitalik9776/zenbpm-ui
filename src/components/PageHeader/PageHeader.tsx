import { Box, Typography } from '@mui/material';

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  children?: React.ReactNode;
}

export const PageHeader = ({ title, subtitle, actions, children }: PageHeaderProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        mb: 4,
      }}
    >
      <Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: 'var(--zb-page-title-size)',
              fontWeight: 'var(--zb-page-title-weight)',
              letterSpacing: '-0.5px',
              color: 'var(--zb-text-primary)',
            }}
          >
            {title}
          </Typography>
          {children}
        </Box>
        {subtitle && (
          <Typography
            sx={{
              mt: 0.75,
              fontSize: 'var(--zb-body-font-size)',
              color: 'var(--zb-text-muted)',
            }}
          >
            {subtitle}
          </Typography>
        )}
      </Box>
      {actions && <Box sx={{ display: 'flex', gap: 1.5 }}>{actions}</Box>}
    </Box>
  );
};
