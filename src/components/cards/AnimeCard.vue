<template>
  <router-link :to="{ name: 'anime_detail', params: { id: anime.mal_id } }">
    <div class="group relative h-96 bg-gradient-to-br from-base-100 to-base-300 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-base-content hover:border-primary">
      <!-- Image avec overlay gradient -->
      <div class="relative overflow-hidden">
        <img :src="anime.images.webp.large_image_url" :alt="anime.title"
          class="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-110" />
        <!-- Gradient overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-base-100/60 via-transparent to-transparent"></div>

        <!-- Badge flottant -->
        <div class="absolute top-4 right-4 bg-primary text-primary-content px-3 py-1 rounded-full text-xs font-bold shadow-lg">
          {{ anime.score }}
        </div>
      </div>

      <!-- Contenu -->
      <div class="p-4 flex flex-col relative h-max">
        <h3
          class="text-xl font-bold text-base-lighter group-hover:text-primary transition-colors duration-300 line-clamp-1 mb-2">
          {{ anime.title }}

        </h3>
        <p class="text-base-content text-sm leading-relaxed flex-1 line-clamp-3 mb-4">
          {{ anime.synopsis }}
        </p>

        <button @click="$emit('toggle-fav')"
          class="relative overflow-hidden bg-primary text-primary-content font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/20 group/btn">
          <div class="absolute inset-0 bg-neutral-content transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700">
          </div>

          <span class="relative flex items-center justify-center gap-2">
            <svg class="w-5 h-5 transition-transform duration-300 group-hover/btn:scale-110" fill="currentColor"
              viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd" />
            </svg>
            Ajouter aux favoris
          </span>
        </button>
      </div>

      <div
        class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div class="absolute inset-0 rounded-2xl border-2 border-primary animate-pulse"></div>
      </div>
    </div>
  </router-link>
</template>

<script setup>
const props = defineProps({
  anime: {
    type: Object,
    required: true,
  },
});

defineEmits(["toggle-fav"]);
</script>
