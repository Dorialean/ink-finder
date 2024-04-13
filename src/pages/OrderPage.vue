<template>
  <q-page>
    <q-btn label="Создать новую анкету" @click="createOrder" />
    <p>Мои анкеты:</p>
    <div class="row q-mt-sm">
      <template v-for="(order, index) in orders" :key="order.title + index">
        <order-component
          :order="order"
          @update-order="updateOrder"
          @delete-order="deleteOrder"
        />
      </template>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import OrderComponent from 'src/components/OrderComponent.vue';
import { Order } from 'src/models/Order';

const defaultOrder: Order = {
  id: crypto.randomUUID(),
  title: 'Анкета',
  description: 'Описание анкеты',
};
const orders = ref<Order[]>([
  {
    id: '7fb01838-cfd7-4598-b237-7bc8a3577751',
    title: 'Хочу татировку',
    description: 'Хочу очень классную татуировку',
  },
  {
    id: 'cb65938a-d572-441b-b4a5-1539f81d93b9',
    title: 'Хочу эскиз',
    description: 'Хочу очень классный эскиз',
  },
]);

const createOrder = () => orders.value.unshift(defaultOrder);
const updateOrder = (order: Order) => {
  let updatableOrder = orders.value.find((o) => o.id == order.id);
  if (updatableOrder == undefined) return;
  updatableOrder.title = order.title;
  updatableOrder.description = order.description;
};
const deleteOrder = (id: string) =>
  (orders.value = orders.value.filter((order) => order.id != id));
</script>

<style scoped></style>
