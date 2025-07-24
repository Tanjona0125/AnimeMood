<template>
  <div v-if="!load">
    <MoodSelector @select="currentMood = $event" />
    <AnimeList v-if="currentMood && !showFav" :mood="currentMood" :data="dataStore" />
  </div>
  <Loading v-else />
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
const dataStore = ref(JSON.parse(localStorage.getItem('dataAnime')).data);


const goHome = () => {
  currentMood.value = null;
  showFav.value = false;
};


// if ((2>1)) {
  onMounted(async () => {
  if (dataStore.value.length === 0) {
    console.log("fetching");

    const { data, error, isLoading, fetchData } = useApi(
      "https://api.jikan.moe/v4/top/anime"
    );

    load.value = true;

    await fetchData();

    if (error.value) {
      console.error("Erreur API :", error.value);
      load.value = false;
    }

    if (data.value) {
      localStorage.setItem("dataAnime", JSON.stringify(data.value.data));
      dataStore.value = data.value;
    }

    load.value = false;
  }
});
</script>

<style scoped>
/* Animation des lignes diagonales */
@keyframes slide-diagonal {
  0% {
    transform: translateY(-100vh) translateX(-100px) rotate(45deg);
    opacity: 0;
  }
  10% {
    opacity: 0.3;
  }
  90% {
    opacity: 0.3;
  }
  100% {
    transform: translateY(100vh) translateX(100px) rotate(45deg);
    opacity: 0;
  }
}

.animate-slide-diagonal {
  animation: slide-diagonal linear infinite;
}

/* Animation du gradient */
@keyframes gradient-shift {
  0%,
  100% {
    background: linear-gradient(
      135deg,
      rgba(0, 255, 249, 0.05) 0%,
      transparent 50%,
      rgba(31, 41, 55, 0.5) 100%
    );
  }
  50% {
    background: linear-gradient(
      135deg,
      transparent 0%,
      rgba(0, 255, 249, 0.03) 50%,
      rgba(31, 41, 55, 0.3) 100%
    );
  }
}

.animate-gradient-shift {
  animation: gradient-shift 20s ease-in-out infinite;
}

/* Couleurs theme1 personnalisées */
.bg-theme1\/20 {
  background-color: rgba(0, 255, 249, 0.2);
}

.bg-theme1\/10 {
  background-color: rgba(0, 255, 249, 0.1);
}

.bg-theme1\/5 {
  background-color: rgba(0, 255, 249, 0.05);
}

.border-theme1\/10 {
  border-color: rgba(0, 255, 249, 0.1);
}

.from-theme1\/5 {
  --tw-gradient-from: rgba(0, 255, 249, 0.05);
}
</style>
