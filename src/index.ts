import { DMUM } from './application';
import { ApplicationConfig } from '@loopback/core';

export { DMUM };

export async function main(options?: ApplicationConfig) {
  const app = new DMUM(options);
  await app.boot();
  await app.start();
  return app;
}
