import { useMemo, type ReactNode } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { brandingQueryKey, defaultBranding, getBranding } from '@base/branding';
import { createAppTheme } from '@base/theme/createAppTheme';
import { router } from '@base/router';
import { AuthProvider } from '@base/auth';
import { NotificationProvider } from '@base/contexts';
import '@base/i18n';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60, // 1 minute
      refetchOnWindowFocus: false,
    },
  },
});

const BrandedTheme = ({ children }: { children: ReactNode }) => {
  const { data = defaultBranding } = useQuery({
    queryKey: brandingQueryKey,
    queryFn: getBranding,
    staleTime: Infinity,
  });
  const brandedTheme = useMemo(() => createAppTheme(data), [data]);

  return <ThemeProvider theme={brandedTheme}>{children}</ThemeProvider>;
};

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrandedTheme>
        <CssBaseline />
        <AuthProvider>
          <NotificationProvider>
            <RouterProvider router={router} />
          </NotificationProvider>
        </AuthProvider>
      </BrandedTheme>
    </QueryClientProvider>
  );
};
