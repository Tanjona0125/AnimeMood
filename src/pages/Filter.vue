<template>
  <AnimeList :animeList="animeFilter" :load="isLoading" />
</template>

<script setup>
import { onMounted, ref } from 'vue';
import AnimeList from '../components/sections/AnimeList.vue';
import { useRoute } from 'vue-router';
import { useAnimeFilter } from '../composables/useAnimeFilter';

const route = useRoute();
const filter = ref({
  q: route.query.q,
  type: route.query.type,
  status: route.query.status,
  rating: route.query.rating,
  order_by: route.query.order_by,
  sfw: route.query.sfw,
  selected_genres: route.query.selected_genres,
});

const { animeFilter, isLoading, fetchFilter } = useAnimeFilter();

onMounted(() => {
  fetchFilter(filter)
});
</script>