import type { FC } from 'react';

import { useAppContext } from '../../setup';

export const ContextPage: FC = () => {
  const { env, appName } = useAppContext();

  return <div>App name from context: {appName}, Example Var: {env.exampleVar}</div>;
};
