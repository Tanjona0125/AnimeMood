<template>
  <BorderCard>
    <div class="max-w-7xl mx-auto">
      <!-- Header avec stats -->
      <div class="mb-8">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-4">
            <div class="w-2 h-8 bg-primary rounded-full"></div>
            <div>
              <h2 class="text-3xl font-bold text-base-content-lighter">Mes Favoris</h2>
              <p class="text-base-content">Votre collection personnelle</p>
            </div>
          </div>
          
          <!-- Actions -->
          <div class="flex items-center gap-4">
            <!-- Compteur -->
            <div class="bg-base-300 px-4 py-2 rounded-xl border border-base-100">
              <span class="text-base-content text-sm">Total : </span>
              <span class="text-primary font-bold">{{ favorites.length }}</span>
            </div>
            
            <!-- Bouton clear all -->
            <button
              v-if="favorites.length > 0"
              @click="showClearModal = true"
              class="px-4 py-2 bg-warning hover:warning/70 text-warning-content rounded-xl transition-colors duration-300 flex items-center gap-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Tout supprimer
            </button>
          </div>
        </div>

        <!-- Barre de progression -->
        <div class="w-full bg-base-300 rounded-full h-2">
          <div 
            class="bg-primary h-2 rounded-full transition-all duration-500" 
            :style="{ width: `${Math.min((favorites.length / 10) * 100, 100)}%` }"
          ></div>
        </div>
        <p class="text-base-content text-sm mt-2">
          {{ favorites.length }}/10 favoris recommandés
        </p>
      </div>

      <!-- Loading state -->
      <div v-if="isLoading" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div 
          v-for="n in 6" 
          :key="n"
          class="bg-base-100 rounded-2xl h-80 animate-pulse border border-base-300"
        >
          <div class="w-full h-56 bg-base-300 rounded-t-2xl"></div>
          <div class="p-4 space-y-3">
            <div class="h-4 bg-base-300 rounded w-3/4"></div>
            <div class="h-3 bg-base-300 rounded w-full"></div>
          </div>
        </div>
      </div>

      <!-- Grid des favoris -->
      <div v-else-if="favorites.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div
          v-for="(anime, index) in favorites"
          :key="anime.mal_id"
          :style="{ animationDelay: `${index * 100}ms` }"
          class="animate-fade-in-up relative group"
        >
          <AnimeCard
            :anime="anime"
            @toggle-fav="confirmRemove(anime)"
          />
          
          <!-- Bouton de suppression rapide -->
          <button
            @click="confirmRemove(anime)"
            class="absolute top-2 left-2 w-8 h-8 bg-warning hover:bg-warning/70 text-warning-content rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-10"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Empty state -->
      <div v-else class="text-center py-20">
        <div class="mb-6">
          <div class="w-24 h-24 bg-base-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-base-content mb-2">
            Aucun favori pour le moment
          </h3>
          <p class="text-base-content/80 mb-6 max-w-md mx-auto">
            Explorez nos recommandations et ajoutez vos animes préférés à votre collection personnelle
          </p>
          <button
            @click="$emit('back-to-home')"
            class="px-6 py-3 bg-primary text-primary-content font-semibold rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            Découvrir des animes
          </button>
        </div>
      </div>
    </div>

    <!-- Modal de confirmation pour suppression -->
    <div v-if="showRemoveModal" class="fixed inset-0 bg-base-200 flex items-center justify-center z-50 p-4">
      <div class="bg-gray-800 rounded-2xl p-6 max-w-md w-full border border-base-300">
        <h3 class="text-xl font-bold text-base-content-lighter mb-4">Supprimer des favoris ?</h3>
        <p class="text-base-content mb-6">
          Êtes-vous sûr de vouloir supprimer "{{ animeToRemove?.title }}" de vos favoris ?
        </p>
        <div class="flex gap-4">
          <button
            @click="showRemoveModal = false"
            class="flex-1 px-4 py-2 bg-info text-info-content rounded-xl hover:bg-info/70 transition-colors"
          >
            Annuler
          </button>
          <button
            @click="confirmRemoveAction"
            class="flex-1 px-4 py-2 bg-warning text-warning-content rounded-xl hover:bg-warning/70 transition-colors"
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>

    <!-- Modal de confirmation pour tout supprimer -->
    <div v-if="showClearModal" class="fixed inset-0 bg-base-200 flex items-center justify-center z-50 p-4">
      <div class="bg-base-300 rounded-2xl p-6 max-w-md w-full border border-base-300/80">
        <h3 class="text-xl font-bold text-base-content-lighter mb-4">Supprimer tous les favoris ?</h3>
        <p class="text-base-content mb-6">
          Cette action supprimera définitivement tous vos {{ favorites.length }} favoris. Cette action est irréversible.
        </p>
        <div class="flex gap-4">
          <button
            @click="showClearModal = false"
            class="flex-1 px-4 py-2 bg-info text-info-content rounded-xl hover:bg-info/80 transition-colors"
          >
            Annuler
          </button>
          <button
            @click="clearAllFavorites"
            class="flex-1 px-4 py-2 bg-warning text-warning-content rounded-xl hover:bg-warning/70 transition-colors"
          >
            Tout supprimer
          </button>
        </div>
      </div>
    </div>
  </BorderCard>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AnimeCard from '../components/cards/AnimeCard.vue'
import BorderCard from '../components/cards/BorderCard.vue'

// États
const favorites = ref([])
const isLoading = ref(true)
const showRemoveModal = ref(false)
const showClearModal = ref(false)
const animeToRemove = ref(null)

// Émissions
defineEmits(['back-to-home'])

// Chargement des favoris
function load() {
  setTimeout(() => {
    favorites.value = JSON.parse(localStorage.getItem('favorites') || '[]')
    isLoading.value = false
  }, 800)
}

// Confirmation de suppression
function confirmRemove(anime) {
  animeToRemove.value = anime
  showRemoveModal.value = true
}

// Suppression confirmée
function confirmRemoveAction() {
  if (animeToRemove.value) {
    remove(animeToRemove.value)
    showRemoveModal.value = false
    animeToRemove.value = null
  }
}

// Suppression d'un favori
function remove(anime) {
  favorites.value = favorites.value.filter(a => a.mal_id !== anime.mal_id)
  localStorage.setItem('favorites', JSON.stringify(favorites.value))
}

// Suppression de tous les favoris
function clearAllFavorites() {
  favorites.value = []
  localStorage.setItem('favorites', JSON.stringify([]))
  showClearModal.value = false
}

onMounted(load);
</script>