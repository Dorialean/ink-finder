<template>
  <q-page class="q-ma-sm">
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
import { useUserService } from 'src/services/api/useUserService';

const email = ref<string>('');
const password = ref<string>('');

const register = async (email: string, password: string) =>
  await useUserService.register(email, password);
</script>

<style scoped></style>
