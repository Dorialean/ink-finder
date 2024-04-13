<template>
  <q-card class="col-2 q-mx-xs">
    <q-card-section>
      <span v-if="!isEditMode" class="text-h6">{{ order.title }}</span>
      <div v-else class="text-h6">
        <q-input v-model="order.title" />
      </div>
    </q-card-section>

    <q-card-section>
      <span v-if="!isEditMode">{{ order.description }}</span>
      <div v-else>
        <q-input v-model="order.description" />
      </div>
    </q-card-section>

    <q-card-actions>
      <q-btn no-caps v-if="!isEditMode" @click="changeEditMode">Изменить</q-btn>
      <q-btn no-caps v-else @click="updateOrder">Сохранить</q-btn>
      <q-btn no-caps @click="deleteOrder">Удалить</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Order } from 'src/models/Order';

const props = defineProps<{
  order: Order;
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

<style scoped></style>
