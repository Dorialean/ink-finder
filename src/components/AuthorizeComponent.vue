<template>
  <q-card>
    <q-card-section class="text-center text-h4">
      Войдите в аккаунт
    </q-card-section>

    <q-card-section class="q-gutter-md">
      <q-input v-model="email" placeholder="Почта" filled type="email" />
      <q-input v-model="password" label="Пароль" filled type="password" />
    </q-card-section>

    <q-card-actions class="justify-center column">
      <q-btn
        label="Войти"
        color="secondary"
        class="text-accent q-my-xs"
        @click="login(email, password)"
      />
      <q-btn
        label="Забыли пароль?"
        class="text-primary q-my-xs"
        to="/forgot-password"
      />
      <q-btn label="Регистрация" class="text-primary q-my-xs" to="/register" />
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const email = ref<string>('');
const password = ref<string>('');

const login = async (email: string, passowrd: string) => {
  console.log(email, passowrd);
};
</script>

<style scoped></style>
