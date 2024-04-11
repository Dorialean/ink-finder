<template>
  <q-page>
    <p class="text-center q-mt-sm">Мои чаты</p>
    <div class="q-mx-sm">
      <q-list>
        <template v-for="(chat, index) in chats" :key="chat.with + index">
          <q-item clickable>
            <q-item-section>
              <q-item-label>{{ chat.with }}</q-item-label>
              <q-item-label>{{ chat.lastMessage }}</q-item-label>
            </q-item-section>
          </q-item>
        </template>
      </q-list>
    </div>
  </q-page>
</template>

<script setup lang="ts">
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
