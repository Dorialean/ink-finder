import { useFetch } from '@vueuse/core';
import { useHttpClient } from '../useHttpClient';

function registerUser(email: string, password: string) {
  return useFetch(process.env.VITE_SERVER_PATH + '/register')
    .post({
      email: email,
      password: password,
    })
    .json();
}

export const useUserService = {
  registerUser,
};
