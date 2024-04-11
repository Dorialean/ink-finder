<template>
  <q-page class="feedback-page">
    <div class="feedback-form">
      <q-input v-model="name" label="Введите никнейм или ФИО" outlined />
      <q-input v-model="email" label="Введите почту для связи" outlined />
      <q-editor v-model="message" placeholder="Сообщение" />
      <q-btn
        class="q-mt-sm"
        color="primary"
        label="Submit"
        @click="submitFeedback"
      />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');

const submitFeedback = () => {
  // Implement feedback submission logic here
};
</script>

<style scoped lang="scss">
.feedback-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.feedback-form {
  max-width: 400px;
  width: 100%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;

  .q-input {
    margin-bottom: 20px;
  }

  .q-btn {
    width: 100%;
  }
}
</style>
