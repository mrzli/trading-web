import { type CSSProperties, type FC, Suspense, use, useMemo } from 'react';

import type { JsonPlaceholderPost } from '../../api';
import { useAppContext } from '../../setup';

const preStyle: CSSProperties = {
  border: '1px solid #ccc',
  backgroundColor: '#f5f5f5',
  padding: '0.5rem',
  overflowX: 'auto',
};

export const ApiPage: FC = () => {
  const { dependencies } = useAppContext();

  const offlinePromise = useMemo(
    () => dependencies.api.example.offline(),
    [dependencies.api.example],
  );

  const jsonPlaceholderPromise = useMemo(
    () => dependencies.api.example.jsonPlaceholder(2),
    [dependencies.api.example],
  );

  return (
    <div>
      <h1>API Page</h1>
      <p>This page demonstrates how to use the API.</p>
      <br />
      <Suspense fallback={<p>Loading offline data...</p>}>
        <OfflineResponse promise={offlinePromise} />
      </Suspense>
      <br />
      <Suspense fallback={<p>Loading JSON Placeholder...</p>}>
        <JsonPlaceholderResponse promise={jsonPlaceholderPromise} />
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

const JsonPlaceholderResponse: FC<{
  readonly promise: Promise<JsonPlaceholderPost>;
}> = ({ promise }) => {
  const post = use(promise);
  return <pre style={preStyle}>{JSON.stringify(post, undefined, 2)}</pre>;
};
