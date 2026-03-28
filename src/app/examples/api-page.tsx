import { type FC, Suspense, use, useMemo } from 'react';

import { useAppContext } from '../../setup';

export const ApiPage: FC = () => {
  const { dependencies } = useAppContext();

  const offlinePromise = useMemo(
    () => dependencies.api.example.offline(),
    [dependencies.api.example],
  );

  return (
    <div>
      <h1>API Page</h1>
      <p>This page demonstrates how to use the API.</p>
      <Suspense fallback={<p>Loading API data...</p>}>
        <OfflineResponse promise={offlinePromise} />
      </Suspense>
    </div>
  );
};

const OfflineResponse: FC<{ readonly promise: Promise<string> }> = ({
  promise,
}) => {
  const offlineResponse = use(promise);
  return <p>Offline API Response: {offlineResponse}</p>;
};
