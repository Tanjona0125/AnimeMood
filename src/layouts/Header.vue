<template>
  <header class="relative bg-base-200 border-b border-base-300 mb-8">
    <div class="max-w-7xl mx-auto px-6 py-6">
      <div class="flex items-center justify-between">
        <!-- Logo et titre -->
        <router-link to="/">
          <div class="flex items-center gap-4">
            <button class="group relative cursor-pointer">
              <!-- Icône avec effet glow et animation -->
              <div
                class="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-primary/40"
              >
                <span
                  class="text-2xl transition-transform duration-300 group-hover:scale-125"
                  >🎭</span
                >
              </div>
              <!-- Petit indicateur animé -->
              <div
                class="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full animate-pulse group-hover:animate-bounce"
              ></div>

              <!-- Effet de ripple au hover -->
              <div
                class="absolute inset-0 rounded-xl bg-primary/20 scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100"
              ></div>
            </button>

            <button class="group">
              <h1
                class="text-3xl font-bold text-base-content transition-all duration-300"
              >
                Anime<span class="text-primary">Mood</span>
              </h1>
              <p class="text-base-content text-sm transition-colors duration-300">
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
              <div class="text-primary font-bold text-lg">1.2K</div>
              <div class="text-base-content text-xs">Animes</div>
            </div>
            <div class="text-center">
              <div class="text-primary font-bold text-lg">5</div>
              <div class="text-base-content text-xs">Moods</div>
            </div>
          </div>

          <router-link
            to="/favorites"
            class="group relative flex items-center gap-3 px-6 py-3 bg-base-300 text-base-content rounded-xl border border-base-100 hover:border-primary hover:bg-base-100 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10"
          >
            <!-- Icône cœur -->
            <svg
              class="w-5 h-5 text-base-content group-hover:text-primary transition-colors"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
              />
            </svg>

            <span class="font-medium group-hover:text-primary transition-colors">
              Mes favoris
            </span>

            <!-- Badge de notification -->
            <div
              class="absolute -top-2 -right-2 w-6 h-6 bg-primary text-primary-content text-xs font-bold rounded-full flex items-center justify-center"
            >
              3
            </div>
          </router-link>

          <!-- Menu mobile (optionnel) -->
          <button
            class="md:hidden p-2 text-base-content hover:text-primary transition-colors"
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
    <div class="absolute bottom-0 left-0 w-full h-1 bg-base-300">
      <div class="h-full w-1/3 bg-primary rounded-r-full"></div>
    </div>
  </header>
</template>

<script setup>
defineEmits(["show-fav", "go-home"]);
</script>
