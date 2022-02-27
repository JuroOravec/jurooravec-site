import type { GridsomeConfig } from '@/typings/gridsome';

export const analyticsConfigGridsome: GridsomeConfig = {
  plugins: [
    {
      use: 'gridsome-plugin-sentry',
      options: {
        dsn: 'https://aaa9f167f7fc4c4fa4a19bc7114c9cfc@o470159.ingest.sentry.io/5500430',
        attachProps: true,
        logErrors: process.env.NODE_ENV === 'development',
      },
    },
  ],
};
