<template>
  <q-page>
    <div>
      <q-input v-model="email" label="Почта" filled type="email" hint="Почта" />
      <q-input
        v-model="password"
        label="Пароль"
        filled
        type="password"
        hint="Пароль"
      />
      <q-btn label="Войти" @click="register(email, password)" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserService } from 'src/services/api/useUserService';
import { useUserStore } from 'src/stores/useUserStore';

const email = ref<string>('');
const password = ref<string>('');

function register(email: string, password: string) {
  useUserService.registerUser(email, password);
}
</script>

<style scoped></style>
