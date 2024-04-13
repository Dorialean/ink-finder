<template>
  <q-page>
    <authorize-component v-if="!isAuthorized" />
    <div v-else>Личный кабинет</div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from 'src/stores/useUserStore';
import AuthorizeComponent from 'src/components/AuthorizeComponent.vue';

const userStore = useUserStore();
const isAuthorized = ref<boolean>(
  !!userStore.accessToken && !!userStore.refreshToken
);
</script>

<style scoped></style>
