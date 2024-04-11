import { defineStore } from 'pinia';
import { User } from '../models/User';

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      accessToken: '' as string,
      refreshToken: '' as string,
      user: {} as User,
    };
  },
  getters: {
    getAccessToken: (state) => state.accessToken,
    getRefreshToken: (state) => state.refreshToken,
    getUser: (state) => state.user,
  },
  actions: {
    setTokens(accessToken: string, refreshToken: string) {
      this.accessToken = accessToken;
      this.refreshToken = refreshToken;
    },
    //TODO: добавить setеры для всех полей пользователя
  },
});
