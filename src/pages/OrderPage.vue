<template>
  <q-page class="q-ma-sm">
    <q-input
      class="q-my-sm"
      type="search"
      full-width
      outlined
      filled
      v-model="orderSearch"
      label="Поиск"
    >
      <template v-slot:append>
        <q-icon name="search" />
      </template>
    </q-input>
    <div class="search-button-wrapper">
      <q-btn color="info" label="Поиск" @click="createOrder" />
      <q-select
        filled
        v-model="multiple"
        multiple
        :options="options"
        label="Фильтры"
        style="width: 250px"
      />
    </div>

    <h4 class="text-primary text-weight-bold q-mt-md">Предложения мастеров:</h4>
    <div class="row">
      <template v-for="(order, index) in orders" :key="order.title + index">
        <order-component
          class="col-xs-12 col-sm-6 col-lg-3 col-xl-3 q-mx-xs q-mb-md"
          :order="order"
          :another-buttons="true"
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

const orderSearch = ref<string>('');

const multiple = ref<string[]>([]);
const options = [
  'Цветные татуировки',
  'Черно-белые татуировки',
  'Уникальный дизайн',
  'Мастер-татуировщик',
  'Стерильность студии',
  'Профессиональное оборудование',
];
const defaultOrder: Order = {
  id: crypto.randomUUID(),
  title: 'Анкета',
  description: 'Описание анкеты',
};

const orders = ref<Order[]>([
  {
    id: '96d182d3-b513-427b-8cfb-6d8194ce114f',
    title: 'Ирисы в технике watercolor',
    description: 'Яркая татуировка на плече',
    color: 'Фиолетовый, синий, зеленый',
    size: 'Большой',
    sketchAvailability: false,
    placement: 'Плечо',
    style: 'Абстрактный',
    painTolerance: true,
    completionTime: 'Через три недели',
    budgetLimit: 250,
    tattooLocation: 'Студия татуировки',
  },
  {
    id: '96d182d3-b513-427b-8cfb-6d8194ce114f',
    title: 'Ирисы в технике watercolor',
    description: 'Яркая татуировка на плече',
    color: 'Фиолетовый, синий, зеленый',
    size: 'Большой',
    sketchAvailability: false,
    placement: 'Плечо',
    style: 'Абстрактный',
    painTolerance: true,
    completionTime: 'Через три недели',
    budgetLimit: 250,
    tattooLocation: 'Студия татуировки',
  },
  {
    id: '96d182d3-b513-427b-8cfb-6d8194ce114f',
    title: 'Ирисы в технике watercolor',
    description: 'Яркая татуировка на плече',
    color: 'Фиолетовый, синий, зеленый',
    size: 'Большой',
    sketchAvailability: false,
    placement: 'Плечо',
    style: 'Абстрактный',
    painTolerance: true,
    completionTime: 'Через три недели',
    budgetLimit: 250,
    tattooLocation: 'Студия татуировки',
  },
  {
    id: '34f775eb-f485-4b50-9981-7bd3653190a4',
    title: 'Мандала на запястье',
    description: 'Этническая татуировка на запястье',
    color: 'Черный, синий, белый',
    size: 'Маленький',
    sketchAvailability: false,
    placement: 'Запястье',
    style: 'Этнический',
    painTolerance: true,
    completionTime: 'Через неделю',
    budgetLimit: 100,
    tattooLocation: 'Студия татуировки',
  },
  {
    id: 'fed76995-1e28-4c9c-b28a-8006ba0e604e',
    title: 'Традиционный череп в розах',
    description: 'Классическая татуировка на спине',
    color: 'Черный, красный, зеленый',
    size: 'Крупный',
    sketchAvailability: false,
    placement: 'Спина',
    style: 'Традиционный',
    painTolerance: true,
    completionTime: 'Через месяц',
    budgetLimit: 400,
    tattooLocation: 'Студия татуировки',
  },
  {
    id: '72cb51ff-326b-42c2-96d9-afde3b4ce0cc',
    title: 'Геометрический лев',
    description: 'Современная татуировка на предплечье',
    color: 'Черный, серебряный',
    size: 'Средний',
    sketchAvailability: false,
    placement: 'Предплечье',
    style: 'Геометрический',
    painTolerance: true,
    completionTime: 'Через три недели',
    budgetLimit: 200,
    tattooLocation: 'Дом клиента',
  },
  {
    id: 'e6a06b87-4e90-4acb-a7e8-6da3cf8e1811',
    title: 'Цветущее дерево',
    description: 'Натуральная татуировка на бедре',
    color: 'Зеленый, коричневый, розовый',
    size: 'Большой',
    sketchAvailability: false,
    placement: 'Бедро',
    style: 'Реалистичный',
    painTolerance: true,
    completionTime: 'Через месяц',
    budgetLimit: 300,
    tattooLocation: 'Студия татуировки',
  },
  {
    id: '34f775eb-f485-4b50-9981-7bd3653190a4',
    title: 'Мандала на запястье',
    description: 'Этническая татуировка на запястье',
    color: 'Черный, синий, белый',
    size: 'Маленький',
    sketchAvailability: false,
    placement: 'Запястье',
    style: 'Этнический',
    painTolerance: true,
    completionTime: 'Через неделю',
    budgetLimit: 100,
    tattooLocation: 'Студия татуировки',
  },
  {
    id: 'af6f95d6-3dbc-4ae5-8297-b45885fb1a2c',
    title: 'Розовый фламинго',
    description: 'Яркая татуировка на голени',
    color: 'Розовый, черный',
    size: 'Средний',
    sketchAvailability: false,
    placement: 'Голень',
    style: 'Неоновый',
    painTolerance: true,
    completionTime: 'Через две недели',
    budgetLimit: 200,
    tattooLocation: 'Дом клиента',
  },
  {
    id: '7dc3f5ec-a67f-4b64-ad88-e5bdf13d03eb',
    title: 'Розовые пионы',
    description: 'Татуировка в стиле реализм на предплечье',
    color: 'Розовый, зеленый, черный',
    size: 'Средний',
    sketchAvailability: false,
    placement: 'Предплечье',
    style: 'Реалистичный',
    painTolerance: true,
    completionTime: 'Через две недели',
    budgetLimit: 150,
    tattooLocation: 'Студия татуировки',
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

<style scoped>
.search-button-wrapper {
  display: flex;
  justify-content: space-between;
}
</style>
