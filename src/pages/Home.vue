<template>
  <Loading v-if="isLoading" />
  <div v-else>
    <MoodSelector @select="currentMood = $event" />
    <AnimeList v-if="currentMood && !showFav" :mood="currentMood" :animeList="animeList" />
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import MoodSelector from "../components/sections/MoodSelector.vue";
import AnimeList from "../components/sections/AnimeList.vue";
import Loading from "../components/states/Loading.vue";
import { useAnimeList } from "../composables/useAnimeList";

const currentMood = ref(null);
const showFav = ref(false);
const {animeList,isLoading,fetchList} = useAnimeList();

watch(
  () => currentMood,
  (newMood, oldMood)=> {
    if (newMood !== oldMood) {
      fetchList(newMood);
    }
  },
  { immediate: true }
)
</script>
