import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';

import { router } from '../routing/router';
import { createAppDependencies } from './app-dependencies';
import { appEnv } from './app-env';
import { AppContextProvider, type AppContextValue } from './context';

export const run = async () => {
  const root = document.getElementById('root');

  if (!root) {
    throw new Error('Root element not found');
  }

  const env = appEnv();
  const dependencies = createAppDependencies(env);

  const value: AppContextValue = {
    env,
    dependencies,
    appName: 'Trading App',
  };

  const content = (
    <StrictMode>
      <AppContextProvider value={value}>
        <RouterProvider router={router} />
      </AppContextProvider>
    </StrictMode>
  );

  createRoot(root).render(content);
};
