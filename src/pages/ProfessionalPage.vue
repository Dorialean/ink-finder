<template>
  <q-page>
    <div class="row">
      <template v-for="master in masters" :key="master">
        <master-card-component
          :full-name="master.fullName"
          :rating="master.rating"
          :photo-path="master.photoPath"
          :comment="master.comment"
          :specializations="master.specializations"
        />
      </template>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import MasterCardComponent from 'src/components/MasterCardComponent.vue';
const masters = [
  {
    fullName: 'Алексей Иванов',
    rating: 9.23,
    photoPath: '',
    comment: 'Профессиональный тату-мейкер с опытом работы более 10 лет',
    specializations: ['тату-дизайнер в стиле модерн', 'черно-белая татуировка'],
  },
  {
    fullName: 'Екатерина Смирнова',
    rating: 8.75,
    photoPath: '',
    comment:
      'Творческий подход к каждому клиенту, люблю делать уникальные дизайны',
    specializations: ['цветная татуировка', 'watercolor тату'],
  },
  {
    fullName: 'Михаил Петров',
    rating: 7.91,
    photoPath: '',
    comment: 'Всегда стремлюсь к совершенству, уделяю внимание каждой детали',
    specializations: ['татуировка в стиле реализм', 'графическая тату'],
  },
  {
    fullName: 'Наталья Козлова',
    rating: 6.57,
    photoPath: '',
    comment: 'Вдохновляюсь искусством и рисую с душой',
    specializations: ['татуировка в стиле готика', 'tribal тату'],
  },
  {
    fullName: 'Дмитрий Соколов',
    rating: 8.32,
    photoPath: '',
    comment: 'Люблю экспериментировать с разными стилями и техниками',
    specializations: ['Японский стиль', 'минималистическое тату'],
  },
  {
    fullName: 'Ольга Никитина',
    rating: 7.44,
    photoPath: '',
    comment: 'Тонкая работа и внимание к деталям',
    specializations: ['татуировка на запястье', 'деликатные татуировки'],
  },
  {
    fullName: 'Иван Кузнецов',
    rating: 9.87,
    photoPath: '',
    comment:
      'Стремлюсь к идеальному результату, клиентская удовлетворенность важна для меня',
    specializations: ['реалистичная татуировка', 'татуировка на предплечье'],
  },
  {
    fullName: 'Елена Морозова',
    rating: 8.11,
    photoPath: '',
    comment: 'Мои работы отражают мою любовь к татуировке и искусству',
    specializations: ['абстрактное тату', 'геометрические узоры'],
  },
  {
    fullName: 'Артем Белов',
    rating: 6.98,
    photoPath: '',
    comment: 'Индивидуальный подход и качественная работа',
    specializations: ['татуировка на спине', 'орнаментальные тату'],
  },
  {
    fullName: 'Людмила Степанова',
    rating: 7.36,
    photoPath: '',
    comment: 'Стремлюсь к освоению новых техник и стилей',
    specializations: ['татуировка на ноге', 'тату с элементами природы'],
  },
  {
    fullName: 'Сергей Козлов',
    rating: 8.65,
    photoPath: '',
    comment: 'Каждая работа - это уникальное произведение искусства',
    specializations: ['татуировка на плече', 'портретная тату'],
  },
  {
    fullName: 'Марина Игнатьева',
    rating: 7.79,
    photoPath: '',
    comment: 'Люблю творческий подход к работе и создание красивых дизайнов',
    specializations: ['черно-серая татуировка', 'мастерская тату'],
  },
];
</script>

<style scoped></style>
