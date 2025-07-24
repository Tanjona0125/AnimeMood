<template>
  <div class="min-h-screen bg-gray-900 p-6 relative">
    <!-- Bordures décoratives -->
    <div class="absolute inset-4 border-2 border-theme1/20 rounded-3xl pointer-events-none">
      <div class="absolute -top-1 -left-1 w-6 h-6 border-l-2 border-t-2 border-theme1 rounded-tl-lg"></div>
      <div class="absolute -top-1 -right-1 w-6 h-6 border-r-2 border-t-2 border-theme1 rounded-tr-lg"></div>
      <div class="absolute -bottom-1 -left-1 w-6 h-6 border-l-2 border-b-2 border-theme1 rounded-bl-lg"></div>
      <div class="absolute -bottom-1 -right-1 w-6 h-6 border-r-2 border-b-2 border-theme1 rounded-br-lg"></div>
    </div>

    <!-- Contenu principal -->
    <div class="relative z-10 max-w-6xl mx-auto">
      <!-- Bouton retour -->
      <button
        @click="$emit('go-back')"
        class="group flex items-center gap-3 mb-6 px-4 py-2 bg-gray-800 text-white rounded-xl border border-gray-700 hover:border-theme1 hover:bg-gray-700 transition-all duration-300 hover:scale-105"
      >
        <svg class="w-5 h-5 group-hover:text-theme1 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        <span class="group-hover:text-theme1 transition-colors">Retour</span>
      </button>

      <!-- Hero Section -->
      <div class="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl border border-gray-700 overflow-hidden mb-8 hover:border-theme1/30 transition-colors">
        <div class="flex flex-col lg:flex-row">
          <!-- Image principale -->
          <div class="lg:w-1/3 relative group">
            <img
              :src="anime.image_url"
              :alt="anime.title"
              class="w-full h-96 lg:h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <!-- Overlay gradient -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/60"></div>
            
            <!-- Badge de statut -->
            <div class="absolute top-4 right-4 bg-theme1 text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg">
              {{ anime.status || 'En cours' }}
            </div>
          </div>

          <!-- Informations principales -->
          <div class="lg:w-2/3 p-8 relative">
            <div class="space-y-6">
              <!-- Titre et note -->
              <div>
                <h1 class="text-4xl font-bold text-white mb-2 group-hover:text-theme1 transition-colors">
                  {{ anime.title }}
                </h1>
                <div class="flex items-center gap-4 mb-4">
                  <div class="flex items-center gap-2">
                    <div class="flex">
                      <svg v-for="i in 5" :key="i" class="w-5 h-5" :class="i <= (anime.rating || 4) ? 'text-theme1' : 'text-gray-600'" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <span class="text-theme1 font-bold">{{ anime.rating || 4.2 }}/5</span>
                  </div>
                  <span class="text-gray-400">•</span>
                  <span class="text-gray-400">{{ anime.year || '2023' }}</span>
                  <span class="text-gray-400">•</span>
                  <span class="text-gray-400">{{ anime.episodes || '24' }} épisodes</span>
                </div>
              </div>

              <!-- Genres -->
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="genre in (anime.genres || ['Action', 'Aventure', 'Drame'])" 
                  :key="genre"
                  class="px-3 py-1 bg-theme1/20 text-theme1 rounded-full text-sm font-medium border border-theme1/30"
                >
                  {{ genre }}
                </span>
              </div>

              <!-- Synopsis court -->
              <p class="text-gray-300 text-lg leading-relaxed">
                {{ anime.synopsis }}
              </p>

              <!-- Actions -->
              <div class="flex gap-4 pt-4">
                <button
                  @click="$emit('toggle-fav', anime)"
                  class="group flex items-center gap-3 px-6 py-3 bg-theme1 text-black font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-theme1/20"
                >
                  <svg class="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                  </svg>
                  Ajouter aux favoris
                </button>
                
                <button class="group flex items-center gap-3 px-6 py-3 bg-gray-700 text-white font-semibold rounded-xl border border-gray-600 hover:border-theme1 hover:bg-gray-600 transition-all duration-300 hover:scale-105">
                  <svg class="w-5 h-5 group-hover:text-theme1 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Regarder plus tard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sections détaillées -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Synopsis complet -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Description -->
          <div class="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-theme1/30 transition-colors">
            <h2 class="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <div class="w-1 h-6 bg-theme1 rounded-full"></div>
              Synopsis complet
            </h2>
            <p class="text-gray-300 leading-relaxed text-lg">
              {{ anime.fullSynopsis || anime.synopsis + ' Cette histoire captivante nous emmène dans un voyage épique rempli d\'émotions, d\'action et de développement de personnages remarquable. Les thèmes abordés touchent le cœur des spectateurs et offrent une expérience inoubliable qui marque les esprits longtemps après le visionnage.' }}
            </p>
          </div>

          <!-- Personnages principaux -->
          <div class="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-theme1/30 transition-colors">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-1 h-6 bg-theme1 rounded-full"></div>
              Personnages principaux
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div 
                v-for="character in (anime.characters || defaultCharacters)" 
                :key="character.name"
                class="flex items-center gap-4 p-4 bg-gray-700 rounded-xl hover:bg-gray-600 transition-colors"
              >
                <div class="w-12 h-12 bg-theme1/20 rounded-full flex items-center justify-center">
                  <span class="text-theme1 font-bold">{{ character.name.charAt(0) }}</span>
                </div>
                <div>
                  <h3 class="font-semibold text-white">{{ character.name }}</h3>
                  <p class="text-gray-400 text-sm">{{ character.role }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Informations techniques -->
        <div class="space-y-6">
          <!-- Détails techniques -->
          <div class="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-theme1/30 transition-colors">
            <h2 class="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <div class="w-1 h-5 bg-theme1 rounded-full"></div>
              Informations
            </h2>
            <div class="space-y-3">
              <div class="flex justify-between">
                <span class="text-gray-400">Studio</span>
                <span class="text-white font-medium">{{ anime.studio || 'Studio Ghibli' }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">Réalisateur</span>
                <span class="text-white font-medium">{{ anime.director || 'Hayao Miyazaki' }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">Durée</span>
                <span class="text-white font-medium">{{ anime.duration || '24 min/ép' }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">Source</span>
                <span class="text-white font-medium">{{ anime.source || 'Manga' }}</span>
              </div>
            </div>
          </div>

          <!-- Statistiques -->
          <div class="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-theme1/30 transition-colors">
            <h2 class="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <div class="w-1 h-5 bg-theme1 rounded-full"></div>
              Statistiques
            </h2>
            <div class="space-y-4">
              <div>
                <div class="flex justify-between mb-2">
                  <span class="text-gray-400">Popularité</span>
                  <span class="text-theme1 font-bold">92%</span>
                </div>
                <div class="w-full bg-gray-700 rounded-full h-2">
                  <div class="bg-theme1 h-2 rounded-full" style="width: 92%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between mb-2">
                  <span class="text-gray-400">Note critique</span>
                  <span class="text-theme1 font-bold">88%</span>
                </div>
                <div class="w-full bg-gray-700 rounded-full h-2">
                  <div class="bg-theme1 h-2 rounded-full" style="width: 88%"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Recommandations similaires -->
          <div class="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-theme1/30 transition-colors">
            <h2 class="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <div class="w-1 h-5 bg-theme1 rounded-full"></div>
              Similaires
            </h2>
            <div class="space-y-3">
              <div 
                v-for="similar in similarAnimes" 
                :key="similar.id"
                class="flex items-center gap-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer"
                @click="$emit('view-anime', similar)"
              >
                <img :src="similar.image" :alt="similar.title" class="w-12 h-16 object-cover rounded">
                <div>
                  <h3 class="font-medium text-white text-sm">{{ similar.title }}</h3>
                  <p class="text-gray-400 text-xs">{{ similar.rating }}/5 ⭐</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// Props
const props = defineProps({
  anime: {
    type: Object,
    required: true
  }
})

// Émissions
defineEmits(['go-back', 'toggle-fav', 'view-anime'])

// Données par défaut
const defaultCharacters = [
  { name: 'Protagoniste', role: 'Héros principal' },
  { name: 'Deutéragoniste', role: 'Personnage secondaire' },
  { name: 'Antagoniste', role: 'Rival/Ennemi' },
  { name: 'Mentor', role: 'Guide spirituel' }
]

const similarAnimes = [
  { id: 1, title: 'Anime Similaire 1', rating: 4.3, image: '/placeholder.svg?height=80&width=60' },
  { id: 2, title: 'Anime Similaire 2', rating: 4.1, image: '/placeholder.svg?height=80&width=60' },
  { id: 3, title: 'Anime Similaire 3', rating: 4.5, image: '/placeholder.svg?height=80&width=60' }
]
</script>