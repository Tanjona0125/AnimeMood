<template>
  <BorderCard>
    <AnimeList :anime-list="animeList" :load="isLoading" />
  </BorderCard>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import BorderCard from '../components/cards/BorderCard.vue'
import AnimeList from '../components/sections/AnimeList.vue';
import { useAnimeList } from '../composables/useAnimeList';
import { useRoute } from 'vue-router';

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
const { animeList, isLoading, fetchList } = useAnimeList();
onMounted(() => {
  fetchList()
});
</script>