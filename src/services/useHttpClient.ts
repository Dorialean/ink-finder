import { createFetch } from '@vueuse/core';
import { useUserStore } from 'src/stores/useUserStore';

const userStore = useUserStore();

export const useHttpClient = createFetch({
  baseUrl: process.env.VITE_SERVER_PATH,
  options: {
    beforeFetch({ options }) {
      if (userStore.accessToken && userStore.refreshToken) {
        options.headers = {
          Authorization: `Bearer ${userStore.accessToken}`,
        };
        return { options };
      }
    },
  },
});
