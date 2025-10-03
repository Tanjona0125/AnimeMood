<template>
  <Loading v-if="load" />
  <div v-else>
    <MoodSelector @select="currentMood = $event" />
    <AnimeList v-if="currentMood && !showFav" :mood="currentMood" :animeList="dataStore" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import MoodSelector from "../components/sections/MoodSelector.vue";
import AnimeList from "../components/sections/AnimeList.vue";
import Loading from "../components/states/Loading.vue";

import { useApi } from "../api/animeApi";

const currentMood = ref(null);
const showFav = ref(false);
const load = ref(false);
const storedData = localStorage.getItem('dataAnime');

const dataStore = ref(
  storedData ? JSON.parse(storedData) : []
)

const { data, error, fetchData } = useApi(
  "https://api.jikan.moe/v4/top/anime"
);

onMounted(async () => {
  if (dataStore.value.length === 0) {
    load.value = true;

    try{
    await fetchData();
    if (error.value) {
      console.error("Erreur API :", error.value);
      load.value = false;
    }
    if (data.value) {
      localStorage.setItem("dataAnime", JSON.stringify(data.value.data));
      dataStore.value = data.value.data;
    }
  }finally{
    load.value = false;
  }
  }
});
</script>
