<template>
  <div class="min-h-screen bg-gray-900 p-6 relative rounded-2xl">
    <!-- Bordures décoratives -->
    <div class="absolute inset-4 border-2 border-theme1/20 rounded-3xl pointer-events-none">
      <!-- Coins décoratifs -->
      <div class="absolute -top-1 -left-1 w-6 h-6 border-l-2 border-t-2 border-theme1 rounded-tl-lg"></div>
      <div class="absolute -top-1 -right-1 w-6 h-6 border-r-2 border-t-2 border-theme1 rounded-tr-lg"></div>
      <div class="absolute -bottom-1 -left-1 w-6 h-6 border-l-2 border-b-2 border-theme1 rounded-bl-lg"></div>
      <div class="absolute -bottom-1 -right-1 w-6 h-6 border-r-2 border-b-2 border-theme1 rounded-br-lg"></div>
    </div>

    <!-- Contenu principal avec bordures internes -->
    <div class="relative z-10 border border-gray-800 rounded-2xl bg-gray-900/50 backdrop-blur-sm p-6">
      <!-- Header avec mood -->
      <div class="max-w-7xl mx-auto mb-8">
        <div class="flex items-center gap-4 mb-2">
          <div class="w-2 h-8 bg-theme1 rounded-full"></div>
          <h2 class="text-3xl font-bold text-white">
            Recommandations
          </h2>
        </div>
        <p class="text-gray-400 text-lg ml-6">
          Mood sélectionné : <span class="text-theme1 font-semibold capitalize">{{ mood }}</span>
        </p>
      </div>

      <!-- Loading state (skeleton) -->
      <div v-if="isLoading" class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div 
            v-for="n in 8" 
            :key="n"
            class="bg-gray-800 rounded-2xl h-80 animate-pulse border border-gray-700 hover:border-theme1/30 transition-colors"
          >
            <div class="w-full h-56 bg-gray-700 rounded-t-2xl"></div>
            <div class="p-4 space-y-3">
              <div class="h-4 bg-gray-700 rounded w-3/4"></div>
              <div class="h-3 bg-gray-700 rounded w-full"></div>
              <div class="h-3 bg-gray-700 rounded w-2/3"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Anime grid -->
      <div v-else class="max-w-7xl mx-auto">
        <!-- Stats bar avec bordures -->
        <div class="flex items-center justify-between mb-6 p-4 bg-gray-800 rounded-xl border border-gray-700 hover:border-theme1/30 transition-colors">
          <div class="flex items-center gap-4">
            <span class="text-gray-400">Résultats trouvés :</span>
            <span class="text-theme1 font-bold text-lg">{{ props.data.length }}</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 bg-theme1 rounded-full animate-pulse"></div>
            <span class="text-gray-400 text-sm">Mis à jour</span>
          </div>
        </div>

        <!-- Grid responsive améliorée -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimeCard
            v-for="anime in props.data"
            :key="anime.mal_id"
            :anime="anime"
            :style="{ animationDelay: `${anime.rank * 100}ms` }"
            class="animate-fade-in-up"
            @toggle-fav="$emit('toggle-fav', anime)"
          />
        </div>

        <!-- Empty state avec bordures -->
        <div v-if="props.data.length === 0" class="text-center py-16 border-2 border-dashed border-gray-700 rounded-2xl">
          <div class="text-6xl mb-4">🎭</div>
          <h3 class="text-xl font-semibold text-gray-400 mb-2">
            Aucun anime trouvé
          </h3>
          <p class="text-gray-500">
            Essayez un autre mood pour découvrir de nouveaux animes
          </p>
        </div>
      </div>
    </div>

    <!-- Scroll to top button avec bordure -->
    <button
      v-if="showScrollTop"
      @click="scrollToTop"
      class="fixed bottom-8 right-2 bg-theme1 text-black p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-theme1/20 border-2 border-theme1/50 hover:border-theme1"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import AnimeCard from '../cards/AnimeCard.vue'
import { ref, onMounted, onUnmounted, watch } from 'vue'

// Props et émissions
const props = defineProps({ mood: String,data: Object})
defineEmits(['toggle-fav'])


// État de chargement
const isLoading = ref(true)
const showScrollTop = ref(false)


// Simulation du chargement
let timeoutId



watch(
  () => props.mood,
  () => {
    isLoading.value = true

    if (timeoutId) clearTimeout(timeoutId)

    timeoutId = setTimeout(() => {
      isLoading.value = false
    }, 500)
  },
  { immediate: true }
)


onMounted(() => {
  // Scroll listener pour le bouton scroll to top
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Gestion du scroll
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

<style scoped>
/* Animation fade-in-up */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>