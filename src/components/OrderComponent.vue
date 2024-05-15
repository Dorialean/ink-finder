<template>
  <q-card class="q-mx-xs">
    <q-card-section>
      <span v-if="!isEditMode">
        <span class="text-h6 text-weight-bold">{{ order.title }}</span>
        <q-separator />

        <span class="break-word">
          <strong>Описание:</strong>
          {{ order.description }}
        </span>

        <span>
          <strong>Цветовая палитра:</strong>
          {{ order.color }}
        </span>
        <br />

        <span>
          <strong>Размер:</strong>
          {{ order.size }}
        </span>
        <br />

        <span>
          <strong>Наличие эскиза:</strong>
          {{ order.sketchAvailability ? 'Да' : 'Нет' }}
        </span>
        <br />

        <span>
          <strong>Место размещения:</strong>
          {{ order.placement }}
        </span>
        <br />

        <span>
          <strong> Стиль:</strong>
          {{ order.style }}
        </span>
        <br />

        <span>
          <strong>Толерантность к боли:</strong>
          {{ order.painTolerance ? 'Да' : 'Нет' }}
        </span>
        <br />

        <span>
          <strong>Дедлайн:</strong>
          {{ order.completionTime }}
        </span>
        <br />

        <span>
          <strong>Бюджет:</strong>
          {{ order.budgetLimit }}
        </span>
        <br />

        <span>
          <strong>Локация:</strong>
          {{ order.tattooLocation }}
        </span>
        <br
      /></span>
      <div v-else class="text-h6">
        <q-input v-model="order.title" />
      </div>
    </q-card-section>

    <q-card-actions v-if="anotherButtons" align="left">
      <q-btn
        icon="mail"
        no-caps
        label="Написать"
        text-color="white"
        color="green"
        v-if="!isEditMode"
        @click="changeEditMode"
      />
    </q-card-actions>
    <q-card-actions v-else>
      <q-btn
        no-caps
        label="Изменить"
        text-color="purple"
        color="yellow-13"
        v-if="!isEditMode"
        @click="changeEditMode"
      />
      <q-btn
        no-caps
        label="Сохранить"
        color="info"
        v-else
        @click="updateOrder"
      />
      <q-btn no-caps label="Удалить" color="red" @click="deleteOrder" />
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Order } from 'src/models/Order';

const props = defineProps<{
  order: Order;
  anotherButtons: boolean;
}>();
const emit = defineEmits(['updateOrder', 'deleteOrder', 'changeEditMode']);

const order = ref<Order>(props.order);
const isEditMode = ref<boolean>(false);

const changeEditMode = () => (isEditMode.value = !isEditMode.value);
const updateOrder = () => {
  emit('updateOrder', order);
  changeEditMode();
};
const deleteOrder = () => emit('deleteOrder', props.order.id);
</script>

<style scoped>
.break-word {
  display: inline-block;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
