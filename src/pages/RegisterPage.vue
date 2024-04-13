<template>
  <q-page>
    <q-input v-model="email" label="Почта" filled type="email" hint="Почта" />
    <q-input
      v-model="password"
      label="Пароль"
      filled
      type="password"
      hint="Пароль"
    />
    <q-btn label="Войти" @click="register(email, password)" />
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Token } from 'src/models/Token';
import { useUserService } from 'src/services/api/useUserService';
import { useUserStore } from 'src/stores/useUserStore';

const email = ref<string>('');
const password = ref<string>('');
const userStore = useUserStore();

const register = async (email: string, password: string) => {
  const tokenInfo = await useUserService.registerUser(email, password);
  const token: Token | null = tokenInfo.data.value;
  if (token === null) return;
  userStore.setTokens(token.accessToken, token.refreshToken);
};
</script>

<style scoped></style>
