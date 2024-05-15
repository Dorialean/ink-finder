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

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-scroll-area class="fit">
        <q-list>
          <template v-for="(menuItem, index) in menuList" :key="index">
            <q-item
              :to="menuItem.route"
              clickable
              :active="menuItem.label === 'Outbox'"
              v-ripple
            >
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

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <h4 class="text-center">Мои анкеты:</h4>
      <q-btn label="Создать новую анкету" color="primary" />
      <template v-for="(order, index) in orders" :key="order.title + index">
        <q-card class="q-mx-sm">
          <q-card-section>
            <span class="text-h6 text-weight-bold">{{ order.title }}</span>
            <span class="break-word">
              <strong>Описание:</strong>
              {{ order.description }}
            </span>
            <br />

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
            <br />
          </q-card-section>

          <q-separator />

          <q-card-actions class="q-mb-sm" align="around">
            <q-btn
              no-caps
              label="Изменить"
              text-color="purple"
              color="yellow-13"
            />
            <q-btn no-caps label="Удалить" color="red" />
          </q-card-actions>
        </q-card>
      </template>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-secondary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar class="q-mt-sm">
            <img src="/favicon.ico" />
          </q-avatar>
          <div>InkFinder</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { Order } from 'src/models/Order';
import { ref } from 'vue';
import OrderComponent from 'src/components/OrderComponent.vue';

const leftDrawerOpen = ref(false);
const rightDrawerOpen = ref(false);

const orders = ref<Order[]>([
  {
    id: '71f486ab-695a-45e5-af75-c76612a3f1d4',
    title: 'Цветочная композиция',
    description:
      'Я бы хотел татуировку в виде красивой цветочной композиции с оттенками розового, фиолетового и зеленого. Размер средний, расположение на плече, стиль реалистичный. Не переношу боль, поэтому возможно потребуется обезболивающее. Готов до конца месяца.',
    color: 'Розовый, фиолетовый, зеленый',
    size: 'Средний',
    sketchAvailability: false,
    placement: 'Плечо',
    style: 'Реалистичный',
    painTolerance: false,
    completionTime: 'До конца месяца',
    budgetLimit: 5000,
    tattooLocation: 'Студия',
  },

  {
    id: 'e2662f2e-d6a7-4449-9e50-2e721781cc56',
    title: 'Дракон',
    description:
      'Мне бы хотелось татуировку дракона в традиционном стиле с черным и красным цветами. Размер большой, расположение на спине. У меня средняя переносимость боли, так что возможно потребуется обезболивающее. Жду готовую работу через 2 недели.',
    color: 'Черный, красный',
    size: 'Большой',
    sketchAvailability: true,
    placement: 'Спина',
    style: 'Традиционный',
    painTolerance: true,
    completionTime: 'Через 2 недели',
    budgetLimit: 10000,
    tattooLocation: 'Дом клиента',
  },

  {
    id: '53e6257d-741f-4c27-a845-4e9a1d4683f4',
    title: 'Геометрический орнамент',
    description:
      'Хочу маленький геометрический орнамент с черными и серебряными оттенками на запястье. Не принимаю обезболивающие, справлюсь с болью. Надеюсь на выполнение на следующей неделе.',
    color: 'Черный, серебряный',
    size: 'Маленький',
    sketchAvailability: false,
    placement: 'Запястье',
    style: 'Геометрический',
    painTolerance: true,
    completionTime: 'На следующей неделе',
    budgetLimit: 3000,
    tattooLocation: 'Салон красоты',
  },

  {
    id: '186b3b70-2572-493a-874c-9ab91c664dea',
    title: 'Пейзаж с горами',
    description:
      'Желаю татуировку в виде пейзажа с горами в реалистичном стиле с оттенками синего, зеленого и серого. Размер средний, размещение на ноге. Могу перенести боль без обезболивающих. Нужно закончить через месяц.',
    color: 'Синий, зеленый, серый',
    size: 'Средний',
    sketchAvailability: true,
    placement: 'Нога',
    style: 'Реалистичный',
    painTolerance: true,
    completionTime: 'Через месяц',
    budgetLimit: 8000,
    tattooLocation: 'Тату-студия',
  },
]);

const menuList = [
  {
    icon: 'account_circle',
    label: 'Личный кабинет',
    separator: false,
    route: '/cabinet',
  },
  {
    icon: 'inbox',
    label: 'Анкеты',
    separator: false,
    route: '/order',
  },
  {
    icon: 'send',
    label: 'Чаты',
    separator: false,
    route: '/chat',
  },
  {
    icon: 'person_search',
    label: 'Специалисты',
    separator: false,
    route: '/profs',
  },
  {
    icon: 'color_lens',
    label: 'Татуировки',
    separator: true,
    route: '/tatoo',
  },
  {
    icon: 'settings',
    label: 'Настройки',
    separator: false,
    route: '/settings',
  },
  {
    icon: 'feedback',
    label: 'Отправить Feedback',
    separator: false,
    route: '/feedback',
  },
  {
    icon: 'help',
    iconColor: 'primary',
    label: 'Помощь',
    separator: false,
    route: '/help',
  },
];

const toggleLeftDrawer = () => (leftDrawerOpen.value = !leftDrawerOpen.value);
const toggleRightDrawer = () =>
  (rightDrawerOpen.value = !rightDrawerOpen.value);

defineOptions({
  name: 'MainLayout',
});
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
