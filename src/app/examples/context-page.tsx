import type { FC } from 'react';

import { useAppContext } from '../../setup';

export const ContextPage: FC = () => {
  const { appName } = useAppContext();

  return <div>App name from context: {appName}</div>;
};
