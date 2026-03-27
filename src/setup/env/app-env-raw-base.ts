export type AppEnvMode = 'development' | 'production' | string;

export interface AppEnvRawBase {
  readonly MODE: AppEnvMode;
  readonly BASE_URL: string;
  readonly PROD: boolean;
  readonly DEV: boolean;
  readonly SSR: boolean;
}
