<template>
  <q-page>
    <q-btn label="Создать новую анкету" />
    <p>Мои анкеты:</p>
    <div class="row q-mt-sm">
      <template v-for="(order, index) in orders" :key="order.title + index">
        <q-card class="col-2 q-mx-xs">
          <q-card-section>
            <div class="text-h6">{{ order.title }}</div>
          </q-card-section>
          <q-card-section>
            {{ order.description }}
          </q-card-section>
          <q-card-actions>
            <q-btn>Изменить</q-btn>
            <q-btn>Удалить</q-btn>
          </q-card-actions>
        </q-card>
      </template>
    </div>
  </q-page>
</template>

<script setup lang="ts">
let orders = [
  {
    title: 'Хочу татировку',
    description: 'Хочу очень классную татуировку',
  },
  {
    title: 'Хочу эскиз',
    description: 'Хочу очень классный эскиз',
  },
];
</script>

<style scoped></style>
