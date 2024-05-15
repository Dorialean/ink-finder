<template>
  <q-card class="q-pa-md">
    <q-card-section>
      <div class="q-gutter-md text-h6 text-center">{{ fullName }}</div>
      <div class="text-center">
        <q-avatar rounded size="100px">
          <img
            v-if="photoPath"
            class="text-center"
            :src="getImageUrl(photoPath).toString()"
            style="max-width: 100%; max-height: 200px"
          />
        </q-avatar>
      </div>
      <div class="q-mt-md text-center">{{ comment }}</div>
      <div class="row">
        <q-chip
          v-for="(spec, index) in specializations"
          :key="index"
          :label="spec"
          color="info"
          text-color="white"
          size="sm"
        />
      </div>
    </q-card-section>
    <div class="text-center absolute-bottom q-mb-sm">
      <q-rating v-model="rating" :max="10" :readonly="true" />
    </div>
  </q-card>
</template>

<script setup lang="ts">
const props = defineProps<{
  fullName: string;
  rating?: number;
  photoPath?: string;
  comment?: string;
  specializations?: string[];
}>();

const rating = props.rating ?? 0;
const specializations = props.specializations ?? [];

function getImageUrl(fileName: string) {
  return new URL(`../assets/img/professionals/${fileName}`, import.meta.url);
}
</script>

<style lang="scss">
.q-pa-md {
  max-width: 300px;
  margin: 10px;
}
</style>
