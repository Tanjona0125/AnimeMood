<template>
  <BorderCard :title='"Des recommendation for you"'>
    <div class="relative z-10 rounded-2xl bg-base-200/50 backdrop-blur-sm p-6">

      <!-- Loading state (skeleton) -->
      <div v-if="load" class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div v-for="n in 8" :key="n"
            class="bg-base-300 rounded-2xl h-80 animate-pulse border border-base-content hover:border-primary/30 transition-colors">
            <div class="w-full h-56 bg-base-300 rounded-t-2xl"></div>
            <div class="p-4 space-y-3">
              <div class="h-4 bg-base-300 rounded w-3/4"></div>
              <div class="h-3 bg-base-300 rounded w-full"></div>
              <div class="h-3 bg-base-300 rounded w-2/3"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Anime grid -->
      <div v-else class="max-w-7xl mx-auto">
        <div
          class="flex items-center justify-between mb-6 p-4 bg-gradient-to-tr from-base-200 to-base-300 rounded-xl border border-base-content hover:border-primary/30 transition-colors">
          <div class="flex items-center gap-4">
            <span class="text-base-content">Résultats trouvés :</span>
            <span class="text-primary font-bold text-lg">{{ animeList.length <= 24 ? animeList.length : '24' }}</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <span class="text-base-content text-sm">Mis à jour</span>
          </div>
        </div>

        <!-- Grid responsive améliorée -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimeCard v-for="anime in animeList.slice(0, 24)" :key="anime.mal_id" :anime="anime"
            :style="{ animationDelay: `${anime.rank * 100}ms` }" class="animate-fade-in-up"
            @toggle-fav="$emit('toggle-fav', anime)" />
        </div>

        <!-- Empty state avec bordures -->
        <div v-if="animeList.length === 0"
          class="text-center py-16 border-2 border-dashed border-base-content rounded-2xl">
          <div class="text-6xl mb-4">🎭</div>
          <h3 class="text-xl font-semibold text-base-content mb-2">
            Aucun anime trouvé
          </h3>
          <p class="text-base-content">
            Rien à l'écran... pour l'instant. Lance une autre recherche — ta prochaine obsession anime t'attend !
          </p>
        </div>
      </div>
    </div>

    <button v-if="showScrollTop" @click="scrollToTop"
      class="fixed bottom-8 right-2 bg-primary text-primary-content p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-primary/20 border-2 border-primary/50 hover:border-primary">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  </BorderCard>
</template>

<script setup>
import AnimeCard from '../cards/AnimeCard.vue'
import { ref, onMounted, onUnmounted, watch } from 'vue'
import BorderCard from '../cards/BorderCard.vue';

const props = defineProps({
  animeList: Object,
  load: Boolean,
});

const emit = defineEmits(['toggle-fav']);


// État de chargement
const showScrollTop = ref(false)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 400
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
};
</script>