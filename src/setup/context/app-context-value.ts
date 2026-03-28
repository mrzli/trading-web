import type { AppDependencies } from '../app-dependencies';
import type { AppEnv } from '../env';

export interface AppContextValue {
  readonly env: AppEnv;
  readonly dependencies: AppDependencies;
  readonly appName: string;
}
