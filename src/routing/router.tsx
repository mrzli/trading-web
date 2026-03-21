import { createBrowserRouter } from 'react-router';

import { AboutPage } from '../app/about-page';
import { App } from '../app/app';
import { HomePage } from '../app/home-page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
    ],
  },
]);
