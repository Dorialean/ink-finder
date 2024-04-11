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
});
