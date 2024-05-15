<template>
  <q-card>
    <q-card-section class="column q-gutter-md">
      <span>
        ФИО: {{ user?.firstName }} {{ user?.lastName }} {{ user?.fatherName }}
      </span>
      <span>Почта: {{ user?.email }}</span>
      <span>Телефон: {{ user?.phone }}</span>
      <span>День рождения: {{ user?.birthday }}</span>
    </q-card-section>
    <q-card-actions>
      <q-btn label="Изменить данные" color="primary" />
      <q-btn label="Удалить аккаунт" color="negative" />
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
import { User } from 'src/models/User';

defineProps<{
  user: User;
}>();
</script>

<style scoped></style>
