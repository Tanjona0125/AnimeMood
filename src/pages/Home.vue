<template>
  <Loading v-if="isLoading" />
  <div v-else>
    <HeroSection/>
    <AnimeList :animeList="animeList" :load="isLoading" />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import HeroSection from "../components/sections/HeroSection.vue";
import AnimeList from "../components/sections/AnimeList.vue";
import Loading from "../components/states/Loading.vue";
import { useAnimeList } from "../composables/useAnimeList";
const { animeList, isLoading, fetchList } = useAnimeList();
onMounted(() => {
  fetchList()
});
</script>
