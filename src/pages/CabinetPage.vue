<template>
  <q-page>
    <authorize-component v-if="isAuthorized" />
    <div v-else>
      <span>Личный кабинет</span>
      <personal-cabinet-component :user="user" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from 'src/stores/useUserStore';
import { User } from 'src/models/User';
import AuthorizeComponent from 'src/components/AuthorizeComponent.vue';
import PersonalCabinetComponent from 'src/components/PersonalCabinetComponent.vue';
import moment from 'moment';

const user: User = {
  id: undefined,
  email: 'aboba@mail.ru',
  phone: '+7(272) 790-0888',
  firstName: 'Jennie',
  lastName: 'Nichols',
  fatherName: null,
  birthday: moment('1992-03-08T15:13:16.688Z'),
};

const userStore = useUserStore();
const isAuthorized = ref<boolean>(
  !!userStore.accessToken && !!userStore.refreshToken
);
</script>

<style scoped></style>
