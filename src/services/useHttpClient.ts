import { createFetch } from '@vueuse/core';

export const useHttpClient = createFetch({
  baseUrl: process.env.VITE_SERVER_PATH,
});
