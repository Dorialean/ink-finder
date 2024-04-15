import { useFetch, UseFetchReturn } from '@vueuse/core';
import { useUserStore } from 'src/stores/useUserStore';
import { useHttpClient } from '../useHttpClient';
import { Token } from 'src/models/Token';
import { User } from 'src/models/User';

const USER_API_PATH = '/user';
const userStore = useUserStore();

async function register(email: string, password: string) {
  const response = await useFetch(process.env.VITE_SERVER_PATH + '/register')
    .post({
      email: email,
      password: password,
    })
    .json<Token>();
  const user: User = {
    id: undefined,
    email: email,
    phone: null,
    firstName: null,
    lastName: null,
    fatherName: null,
    birthday: null,
  };
  userStore.setUser(user);
  const tokenInfo: Token = response.data.value;
  userStore.setTokens(tokenInfo!.accessToken, tokenInfo!.refreshToken);
}

async function login(email: string, password: string) {
  const user: User = {
    id: undefined,
    email: email,
    phone: null,
    firstName: null,
    lastName: null,
    fatherName: null,
    birthday: null,
  };
  userStore.setUser(user);
  const token = await useFetch(process.env.VITE_SERVER_PATH + '/login')
    .post({
      email: email,
      password: password,
    })
    .json();
  userStore.setTokens(
    token.data.value.accessToken,
    token.data.value.refreshToken
  );
}

async function refresh() {
  const token = await useFetch(process.env.VITE_SERVER_PATH + '/refresh')
    .post({
      refreshToken: userStore.refreshToken,
    })
    .json();
  userStore.setTokens(
    token.data.value.accessToken,
    token.data.value.refreshToken
  );
}

function getUser(): User {
  let user: User;
  if (userStore.user != null) {
    user = useHttpClient(USER_API_PATH + '/' + userStore.user.email)
      .get()
      .json<User>().data.value;
    return user;
  }
  throw new Error('Пользователь не авторизован');
}

export const useUserService = {
  register,
  login,
  refresh,
  getUser,
};
