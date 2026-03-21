import { createBrowserRouter } from 'react-router';

import { App } from '../app/app';
import { AboutPage } from '../app/examples/about-page';
import { ExamplesPage } from '../app/examples/examples-page';
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
        path: 'examples',
        element: <ExamplesPage />,
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
    ],
  },
]);
