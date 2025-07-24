<template>
  <router-link :to="{name: 'AnimeDetail',params:{ id:anime.mal_id }}">
    <div
      class="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-700 hover:border-theme1"
    >
      <!-- Image avec overlay gradient -->
      <div class="relative overflow-hidden">
        <img
          :src="anime.images.webp.image_url"
          :alt="anime.title"
          class="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <!-- Gradient overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
        ></div>

        <!-- Badge flottant -->
        <div
          class="absolute top-4 right-4 bg-theme1 text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg"
        >
          {{ anime.source }}
        </div>
      </div>

      <!-- Contenu -->
      <div class="p-6 flex-1 flex flex-col relative">
        <!-- Titre avec effet néon -->
        <h3
          class="text-xl font-bold mb-3 text-white group-hover:text-theme1 transition-colors duration-300 line-clamp-2"
        >
          {{ anime.title_english }}
        </h3>

        <!-- Synopsis avec fade -->
        <p
          class="text-gray-300 text-sm leading-relaxed flex-1 mb-6 line-clamp-3"
        >
          {{ anime.synopsis }}
        </p>

        <!-- Bouton simplifié avec theme1 -->
        <button
          @click="$emit('toggle-fav')"
          class="relative overflow-hidden bg-theme1 text-black font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-theme1/20 group/btn"
        >
          <!-- Effet de brillance -->
          <div
            class="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"
          ></div>

          <span class="relative flex items-center justify-center gap-2">
            <svg
              class="w-5 h-5 transition-transform duration-300 group-hover/btn:scale-110"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
              />
            </svg>
            Ajouter aux favoris
          </span>
        </button>
      </div>

      <!-- Effet de bordure animée -->
      <div
        class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      >
        <div
          class="absolute inset-0 rounded-2xl border-2 border-theme1 animate-pulse"
        ></div>
      </div>
    </div>
  </router-link>
</template>

<script setup>
defineProps({
  anime: {
    type: Object,
    required: true,
  },
});

defineEmits(["toggle-fav"]);
</script>
