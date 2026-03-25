import { createBrowserRouter } from 'react-router';

import { App } from '../app/app';
import { ChartPage } from '../app/chart/chart-page';
import { AboutPage } from '../app/examples/about-page';
import { ExamplesPage } from '../app/examples/examples-page';
import { loader } from '../app/examples/loader/loader';
import { LoaderPage } from '../app/examples/loader/loader-page';
import { TailwindPage } from '../app/examples/tailwind-page';
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
          {
            path: 'loader',
            element: <LoaderPage />,
            loader: loader,
          },
          {
            path: 'tailwind',
            element: <TailwindPage />,
          },
        ],
      },
      {
        path: 'chart',
        element: <ChartPage />,
      },
    ],
  },
]);
