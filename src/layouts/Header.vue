<template>
  <header class="relative bg-gray-900 border-b border-gray-800 mb-8">
    <div class="max-w-7xl mx-auto px-6 py-6">
      <div class="flex items-center justify-between">
        <!-- Logo et titre -->
        <router-link to="/">
          <div class="flex items-center gap-4">
            <button class="group relative cursor-pointer">
              <!-- Icône avec effet glow et animation -->
              <div
                class="w-12 h-12 bg-theme1 rounded-xl flex items-center justify-center shadow-lg shadow-theme1/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-theme1/40"
              >
                <span
                  class="text-2xl transition-transform duration-300 group-hover:scale-125"
                  >🎭</span
                >
              </div>
              <!-- Petit indicateur animé -->
              <div
                class="absolute -top-1 -right-1 w-4 h-4 bg-theme1 rounded-full animate-pulse group-hover:animate-bounce"
              ></div>

              <!-- Effet de ripple au hover -->
              <div
                class="absolute inset-0 rounded-xl bg-theme1/20 scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100"
              ></div>
            </button>

            <button class="group">
              <h1
                class="text-3xl font-bold text-white transition-all duration-300"
              >
                Anime<span class="text-theme1">Mood</span>
              </h1>
              <p class="text-gray-400 text-sm transition-colors duration-300">
                Découvrez selon votre humeur
              </p>
            </button>
          </div>
        </router-link>

        <!-- Navigation et actions -->
        <div class="flex items-center gap-4">
          <!-- Stats rapides -->
          <div class="hidden md:flex items-center gap-6 mr-6">
            <div class="text-center">
              <div class="text-theme1 font-bold text-lg">1.2K</div>
              <div class="text-gray-400 text-xs">Animes</div>
            </div>
            <div class="text-center">
              <div class="text-theme1 font-bold text-lg">5</div>
              <div class="text-gray-400 text-xs">Moods</div>
            </div>
          </div>

          <!-- Bouton favoris amélioré -->
          <router-link
            to="/favorites"
            class="group relative flex items-center gap-3 px-6 py-3 bg-gray-800 text-white rounded-xl border border-gray-700 hover:border-theme1 hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-theme1/10"
          >
            <!-- Icône cœur -->
            <svg
              class="w-5 h-5 text-gray-400 group-hover:text-theme1 transition-colors"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
              />
            </svg>

            <span class="font-medium group-hover:text-theme1 transition-colors">
              Mes favoris
            </span>

            <!-- Badge de notification -->
            <div
              class="absolute -top-2 -right-2 w-6 h-6 bg-theme1 text-black text-xs font-bold rounded-full flex items-center justify-center"
            >
              3
            </div>
          </router-link>

          <!-- Menu mobile (optionnel) -->
          <button
            class="md:hidden p-2 text-gray-400 hover:text-theme1 transition-colors"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Barre de progression décorative -->
    <div class="absolute bottom-0 left-0 w-full h-1 bg-gray-800">
      <div class="h-full w-1/3 bg-theme1 rounded-r-full"></div>
    </div>
  </header>
</template>

<script setup>
defineEmits(["show-fav", "go-home"]);
</script>
