<template>
  <q-page>
    <h4
      class="text-center text-primary text-weight-bold q-my-xs"
      v-if="!isDialog"
    >
      Мои чаты
    </h4>
    <div class="q-mx-sm" v-if="!isDialog">
      <q-list>
        <template
          v-for="(chat, index) in chats.sort((prev, next) =>
            next.messageTime.diff(prev.messageTime)
          )"
          :key="chat.with + index"
        >
          <q-item
            padding
            clickable
            :class="{ 'bg-secondary': chat.isUserMessage }"
            class="rounded-border q-mb-sm"
          >
            <q-item-section @click="isDialog = !isDialog">
              <q-item-label :class="{ overline: chat.isUserMessage }">{{
                chat.with
              }}</q-item-label>
              <q-item-label caption>
                {{ chat.lastMessage }}
                <q-badge>{{
                  chat.messageTime?.locale('ru').format('DD MMMM YYYY')
                }}</q-badge>
              </q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="chat_bubble" color="green" />
            </q-item-section>
          </q-item>
        </template>
      </q-list>
    </div>

    <div class="q-pa-md" v-else>
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
    text: 'Привет, я пытаюсь подобрать для себя татуировку',
  },
  {
    createdAt: moment().subtract(3, 'minutes').format(),
    author: 'Джаред лето',
    text: 'Привет, отличная идея. Я татуировщик со стажем, постараюсь помочь.',
  },
  {
    createdAt: moment().subtract(2, 'minutes').format(),
    author: 'Я',
    text: 'Для начала я бы хотел разобраться со стилем татуировки',
  },
  {
    createdAt: moment().add(1, 'minutes').format(),
    author: 'Джаред лето',
    text: 'Интересуют японские мотивы для татуировки?',
  },
];
const chats = [
  {
    with: 'Эрон Херс',
    lastMessage: 'Могу записаться на сеанс в 14:30, подойдёт?',
    messageTime: moment('05/06/2024', 'DD/MM/YYYY'),
    isUserMessage: true,
  },
  {
    with: 'Грабби',
    lastMessage: 'Хочу татуировку с надписью',
    messageTime: moment('05/12/2023', 'DD/MM/YYYY'),
    isUserMessage: true,
  },
  {
    with: 'Ирина Шейк',
    lastMessage: 'Здравствуйте! Готова записать на консультацию',
    messageTime: moment('10/07/2024', 'DD/MM/YYYY'),
    isUserMessage: false,
  },
  {
    with: 'Джонни Депп',
    lastMessage: 'Можете нарисовать портрет на руке?',
    messageTime: moment('18/09/2024', 'DD/MM/YYYY'),
    isUserMessage: true,
  },
  {
    with: 'Эмили Ратаковски',
    lastMessage: 'Хочу сделать тату на спине, какие у вас варианты?',
    messageTime: moment('02/02/2023', 'DD/MM/YYYY'),
    isUserMessage: true,
  },

  {
    with: 'Джаред Лето',
    lastMessage: 'Интересуют японские мотивы для татуировки?',
    messageTime: moment('25/11/2024', 'DD/MM/YYYY'),
    isUserMessage: false,
  },
  {
    with: 'Скарлетт Йоханссон',
    messageTime: moment('07/02/2025', 'DD/MM/YYYY'),
    lastMessage: 'Планирую татуировку на запястье, какие стили предлагаете?',
    isUserMessage: true,
  },

  {
    with: 'Крис Хемсворт',
    lastMessage: 'Здравствуйте! Готовы ли вы воплотить мою идею в тату?',
    messageTime: moment('05/02/2025', 'DD/MM/YYYY'),
    isUserMessage: false,
  },
  {
    with: 'Хлоя Грейс Морец',
    messageTime: moment('01/02/2025', 'DD/MM/YYYY'),
    lastMessage: 'Хочу сделать тату в стиле минимализм, возможно ли это у вас?',
    isUserMessage: true,
  },
];
</script>

<style scoped>
.rounded-border {
  border-radius: 15px !important;
  border: 2px solid purple !important;
}
</style>
