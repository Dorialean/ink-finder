<template>
  <q-layout view="lHr Lpr fff">
    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-btn
            to="/"
            text-color="accent"
            label="InkFinder"
            push
            icon="brush"
          />
        </q-toolbar-title>

        <q-btn
          v-if="false"
          dense
          flat
          round
          icon="menu"
          @click="toggleRightDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-scroll-area class="fit">
        <q-list>
          <template v-for="(menuItem, index) in menuList" :key="index">
            <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index" v-if="menuItem.separator" />
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-drawer
      v-if="false"
      show-if-above
      v-model="rightDrawerOpen"
      side="right"
      bordered
    >
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-secondary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const leftDrawerOpen = ref(false);
const rightDrawerOpen = ref(false);

const menuList = [
  {
    icon: 'account_circle',
    label: 'Личный кабинет',
    separator: false,
  },
  {
    icon: 'inbox',
    label: 'Анкеты',
    separator: false,
  },
  {
    icon: 'send',
    label: 'Чаты',
    separator: false,
  },
  {
    icon: 'color_lens',
    label: 'Татуировки',
    separator: true,
  },
  {
    icon: 'settings',
    label: 'Настройки',
    separator: false,
  },
  {
    icon: 'feedback',
    label: 'Отправить Feedback',
    separator: false,
  },
  {
    icon: 'help',
    iconColor: 'primary',
    label: 'Помощь',
    separator: false,
  },
];

const toggleLeftDrawer = () => (leftDrawerOpen.value = !leftDrawerOpen.value);
const toggleRightDrawer = () =>
  (rightDrawerOpen.value = !rightDrawerOpen.value);

defineOptions({
  name: 'MainLayout',
});
</script>
