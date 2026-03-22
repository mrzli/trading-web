import type { FC } from 'react';
import { useLoaderData } from 'react-router';

import { loader } from './loader';

export const LoaderPage: FC = () => {
  const data = useLoaderData<typeof loader>();

  console.log('loader data', data);

  return (
    <div>
      <div>loader-page</div>
      <div>{data}</div>
    </div>
  );
};
