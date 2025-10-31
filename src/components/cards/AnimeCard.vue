<template>
  <router-link :to="{ name: 'anime_detail', params: { id: anime.mal_id } }">
    <div class="group relative h-90 bg-gradient-to-br from-base-100/40 to-base-300/40 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-base-content hover:border-primary overflow-hidden">
      <!-- Image avec overlay gradient -->
      <div class="absolute top-0 left-0">
        <img :src="anime.images.webp.large_image_url" :alt="anime.title"
          class="object-cover transition-transform duration-700 group-hover:scale-110" />

        <!-- Badge flottant -->
        <div class="absolute top-2 right-2 bg-primary text-primary-content px-3 py-1 rounded-full text-xs font-bold shadow-lg">
          {{ anime.score }}
        </div>
      </div>

      <!-- Contenu -->
      <div class="p-4 flex flex-col absolute bottom-0 left-0 h-40 w-full bg-base-200/20  backdrop-blur-[2px]">
        <h3
          class="text-xl font-bold text-base-lighter group-hover:text-primary transition-colors duration-300 mb-2">
          {{ anime.title }}
        </h3>

        <div class="flex flex-wrap">
          <span v-for="genre in (anime.genres || ['Action', 'Aventure', 'Drame'])" :key="genre"
            class="px-3 py-1 m-0.5 bg-primary text-primary-content rounded-full text-sm font-medium border border-primary/30">
            {{ genre.name }}
          </span>
        </div>
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
