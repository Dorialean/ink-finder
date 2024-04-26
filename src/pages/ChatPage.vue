<template>
  <q-page>
    <p class="text-center q-mt-sm">Мои чаты</p>
    <div class="q-mx-sm" v-if="!isDialog">
      <q-list>
        <template v-for="(chat, index) in chats" :key="chat.with + index">
          <q-item clickable>
            <q-item-section @click="isDialog = !isDialog">
              <q-item-label>{{ chat.with }}</q-item-label>
              <q-item-label>{{ chat.lastMessage }}</q-item-label>
            </q-item-section>
          </q-item>
        </template>
      </q-list>
    </div>

    <div v-else>
      <template
        v-for="(message, index) in messages"
        :key="index + message.createdAt"
      >
        <q-chat-message
          v-if="index % 2 == 0"
          :name="message.author"
          :text="[message.text]"
          sent
        />
        <q-chat-message v-else :name="message.author" :text="[message.text]" />
      </template>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import moment from 'moment';

const isDialog = ref<boolean>(false);

const messages = [
  {
    createdAt: moment().subtract(5, 'minutes').format(),
    author: 'Я',
    text: 'Привет, как прошел твой сеанс татуирования?',
  },
  {
    createdAt: moment().subtract(3, 'minutes').format(),
    author: 'Эрон Херс',
    text: 'Привет, все прошло отлично! Моя новая татуировка - это объект с полями createdAt, author и text.',
  },
  {
    createdAt: moment().subtract(2, 'minutes').format(),
    author: 'Я',
    text: 'Звучит интересно, какой автор у твоей татуировки?',
  },
  {
    createdAt: moment().subtract(1, 'minutes').format(),
    author: 'Эрон Херс',
    text: 'Автор - мой любимый татуировщик из студии "Ink Master".',
  },
  {
    createdAt: moment().format(),
    author: 'Я',
    text: 'Понятно, это звучит круто! Надеюсь, у тебя все зажило хорошо.',
  },
  {
    createdAt: moment().add(1, 'minutes').format(),
    author: 'Эрон Херс',
    text: 'Спасибо, да, все зажило отлично. Теперь у меня уникальная татуировка, созданная в JavaScript стиле.',
  },
];
const chats = [
  {
    with: 'Эрон Херс',
    lastMessage: 'здарова',
    isArchive: false,
  },
  {
    with: 'Грабби',
    lastMessage: 'Покеда',
    isArchive: false,
  },
];
</script>

<style scoped></style>
