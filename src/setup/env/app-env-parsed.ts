import { z } from 'zod';

import { APP_ENV_RAW } from './app-env-raw';

const APP_ENV_BASE_SCHEMA = z.object({
  MODE: z.string(),
  BASE_URL: z.string(),
  PROD: z.boolean(),
  DEV: z.boolean(),
  SSR: z.boolean(),
});

const APP_ENV_SCHEMA = z.object({
  ...APP_ENV_BASE_SCHEMA.shape,
  VITE_EXAMPLE_VAR: z.string(),
  VITE_BACKEND_BASE_URL: z.url(),
});

export type AppEnvParsed = z.infer<typeof APP_ENV_SCHEMA>;

export const appEnvParsed = (): AppEnvParsed => {
  return APP_ENV_SCHEMA.parse(APP_ENV_RAW);
};
