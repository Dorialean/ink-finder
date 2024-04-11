<template>
  <q-page>
    Настройки
    <q-card class="q-mx-sm">
      <q-card-section>
        <q-select
          v-model="theme"
          :options="['Светлая', 'Тёмная']"
          label="Цветовая тема"
        />
      </q-card-section>

      <q-card-section>
        <q-select
          v-model="language"
          :options="['Русский', 'Английский']"
          label="Язык интерфейса"
        />
      </q-card-section>

      <q-card-section>
        <q-select
          v-model="fontSize"
          :options="[12, 14, 16, 18, 20]"
          label="Размер шрифта"
        />
      </q-card-section>

      <q-card-section>
        <q-select
          v-model="allowAccountVisibility"
          :options="['Только мне', 'Всем', 'Только тем, с кем ведётся чат']"
          label="Кому виден мой аккаунт"
        />
      </q-card-section>

      <q-card-actions align="left">
        <q-checkbox
          v-model="allowEmailMessaging"
          size="xs"
          label="Подписаться на сообщения от InkFinder"
        />
      </q-card-actions>

      <q-card-actions align="right">
        <q-btn
          label="Сохранить настройки"
          color="primary"
          @click="saveSettings"
        />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const theme = ref('Светлая');
const language = ref('Русский');
const fontSize = ref(14);
const allowAccountVisibility = ref('Только мне');
const allowEmailMessaging = ref(false);

const saveSettings = () => {
  // Save settings logic here
};
</script>

<style scoped lang="scss"></style>
