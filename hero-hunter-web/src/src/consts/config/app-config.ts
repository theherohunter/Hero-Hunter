import { AppConfig } from '@root/types';

export const appConfig: AppConfig = {
  isProd: Boolean(process.env.isProd),
};
