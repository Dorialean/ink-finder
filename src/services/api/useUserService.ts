import { useFetch, UseFetchReturn } from '@vueuse/core';
import { Token } from 'src/models/Token';

async function registerUser(
  email: string,
  password: string
): Promise<UseFetchReturn<Token>> {
  const token = await useFetch(process.env.VITE_SERVER_PATH + '/register')
    .post({
      email: email,
      password: password,
    })
    .json<Token>();
  return token;
}

export const useUserService = {
  registerUser,
};
