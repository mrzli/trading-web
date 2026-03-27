import type { AppEnv } from '../env';

export interface AppContextValue {
  readonly env: AppEnv;
  readonly appName: string;
}
