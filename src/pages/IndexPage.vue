<template>
  <q-page class="row justify-evenly">
    <q-timeline class="q-px-md q-mt-sm" color="secondary">
      <q-timeline-entry class="text-center" heading>
        Лента InkFinder
      </q-timeline-entry>

      <template
        v-for="(timeEvent, index) in timelineEvents"
        :key="timeEvent.created + index"
      >
        <q-timeline-entry
          :title="timeEvent.title"
          :subtitle="timeEvent.created.format('LL')"
          color="green"
          icon="done_all"
        >
          <div>{{ timeEvent.description }}</div>
        </q-timeline-entry>
      </template>
    </q-timeline>

    <h4 class="q-mb-none q-mt-sm">Последние работы:</h4>

    <div class="row q-mb-sm">
      <template v-for="definition in inkFinderDefinitions" :key="definition">
        <q-card dark bordered class="col q-mx-sm bg-primary">
          <q-img :src="definition.path" />
          <q-card-section>
            <div class="text-h6">{{ definition.title }}</div>
            <div class="text-subtitle2">{{ definition.subtitle }}</div>
          </q-card-section>
          <q-separator dark inset />
          <q-card-section>
            {{ definition.text }}
          </q-card-section>
        </q-card>
      </template>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import moment from 'moment';

const inkFinderDefinitions = [
  {
    title: 'Магические символы',
    subtitle: 'Выполнено Алина Петрова',
    text: 'Эта татуировка принесла мне удачу и защиту от злых сил!',
    path: new URL('../assets/img/magic_symbols_tatoo.jpeg', import.meta.url)
      .href,
  },
  {
    title: 'Реалистичный портрет',
    subtitle: 'Выполнено Иван Иванов',
    text: 'Очень доволен работой мастера, портрет выглядит как живой!',
    path: new URL('../assets/img/realistic_face_tatoo.jpeg', import.meta.url)
      .href,
  },
  {
    title: 'Графический рисунок',
    subtitle: 'Выполнено Елена Сидорова',
    text: 'Эта татуировка выглядит очень стильно и современно, все друзья в восторге!',
    path: new URL('../assets/img/graphical_tatoo.jpeg', import.meta.url).href,
  },
  {
    title: 'Фэнтезийный ландшафт',
    subtitle: 'Выполнено Денис Кузнецов',
    text: 'Смотреть на эту татуировку как на картину, так много деталей и оттенков!',
    path: new URL(
      '../assets/img/graphical_lanshaft_tatoo.jpeg',
      import.meta.url
    ).href,
  },
  {
    title: 'Цветочный узор',
    subtitle: 'Выполнено Ольга Смирнова',
    text: 'Такая нежная и красивая татуировка, добавила моей коже эстетики и женственности!',
    path: new URL('../assets/img/flowerfull_tatoo.jpeg', import.meta.url).href,
  },
  {
    title: 'Трибал',
    subtitle: 'Выполнено Артем Белов',
    text: 'Этот тату обладает особой энергией и силой, мне кажется, что он даже мой характер отразил!',
    path: new URL('../assets/img/tribal_tatoo.jpeg', import.meta.url).href,
  },
];
const timelineEvents = [
  {
    title: 'Первый запуск InkFinder в App Store и Google Play',
    description:
      'В марте 2022 года InkFinder был впервые запущен в официальных магазинах приложений (App Store и Google Play), предлагая пользователям доступ к базе данных тату-мастеров, стилей и дизайнов тату.',
    created: moment('05-05-2022', 'DD-MM-YYYY'),
  },
  {
    title: 'Партнерство с крупным медиа-ресурсом в области татуировок',
    description:
      'InkFinder заключил партнерство с крупным медиа-ресурсом, специализирующимся на тематике татуировок, для расширения своей аудитории и предоставления уникального контента пользователям.',
    created: moment('20-09-2022', 'DD-MM-YYYY'),
  },
  {
    title: 'Запуск функции онлайн-консультаций для пользователей InkFinder',
    description:
      'В начале 2023 года добавлена возможность проведения онлайн-консультаций пользователям приложения с тату-мастерами, что упростило коммуникацию и планирование тату-сессий.',
    created: moment('15-01-2023', 'DD-MM-YYYY'),
  },
  {
    title: 'Организация мастер-класса с участием известного тату-мастера',
    description:
      'InkFinder провел свой первый мастер-класс с участием известного тату-мастера, где участники могли узнать новые техники и подходы к созданию татуировок.',
    created: moment('08-07-2023', 'DD-MM-YYYY'),
  },
  {
    title:
      'Запуск поддержки Real-Time чата для мастеров и пользователей InkFinder',
    description:
      'InkFinder внедрил возможность общения в реальном времени между тату-мастерами и пользователями через чат в приложении, что ускорило процесс обсуждения деталей и планирование проектов.',
    created: moment('10-09-2023', 'DD-MM-YYYY'),
  },
  {
    title: 'Организация масштабного фестиваля татуировок с участием InkFinder',
    description:
      ' InkFinder принял активное участие в организации фестиваля татуировок, на котором были представлены лучшие мастера индустрии, проведены конкурсы, выставки и мастер-классы, привлекшие тысячи посетителей.',
    created: moment('02-04-2024', 'DD-MM-YYYY'),
  },
].sort((nextTimeEvent, prevTimeEvent) =>
  nextTimeEvent.created.diff(prevTimeEvent.created)
);

defineOptions({
  name: 'IndexPage',
});
</script>

<style scoped lang="scss"></style>
