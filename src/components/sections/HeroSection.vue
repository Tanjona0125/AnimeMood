<template>
  <Loading v-if="isLoading" />
  <div v-else class="min-h-screen">
    <div class="relative overflow-hidden">
      <div class="relative z-10">
        <div class="max-w-7xl mx-auto px-8 py-16">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div class="space-y-8">
              <div class="inline-block">
                <div class="badge badge-info">
                  {{ animeRandom.status }}
                </div>
              </div>
              <h1 class="text-5xl md:text-6xl font-bold text-base-content leading-tight text-balance line-clamp-3">
                   {{ animeRandom.title }}
              </h1>
              <p class="text-xl  text-base-content/60">
                {{ animeRandom.title_japanese}}
              </p>
              <p class="text-lg text-base-content leading-relaxed max-w-xl">
                {{ truncate(animeRandom.synopsis,400) }}
              </p>
              <div class="grid grid-cols-3 gap-4 py-4">
                <div>
                  <p class="text-base-content/80 text-sm">Type</p>
                  <p class="text-base-content font-semibold">{{ animeRandom.type}}</p>
                </div>
                <div>
                  <p class="text-base-content/80 text-sm">Duration</p>
                  <p class="text-base-content font-semibold">{{ animeRandom.duration}}</p>
                </div>
                <div>
                  <p class="text-base-content/80 text-sm">Rating</p>
                  <p class="text-base-content font-semibold">{{ animeRandom.rating}}</p>
                </div>
              </div>
              <div class="flex flex-wrap gap-2">
                <span v-for="genre in animeRandom.genres" class="badge badge-neutral">{{ genre.name }}</span>
              </div>
              <div class="flex gap-4 pt-4">
                <button class="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105">
                  Watch Trailer
                </button>
                <button class="px-8 py-3 border border-gray-600 text-white font-semibold rounded-full hover:bg-gray-800/50 transition">
                  Add to Watchlist
                </button>
              </div>
            </div>
            <div class="relative group">
              <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl filter blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <div class="relative bg-gradient-to-br from-slate-800 to-slate-900 p-1 rounded-2xl overflow-hidden">
                <img 
                  :src="animeRandom.images.webp.large_image_url" 
                  alt="Love Live! Nijigasaki" 
                  class="w-full h-auto rounded-xl object-cover shadow-2xl group-hover:scale-105 transition duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/10 pointer-events-none rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="relative z-10 max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-700/50">
          <div class="space-y-2">
            <p class="text-gray-400 text-sm">Studio</p>
            <p class="text-white font-semibold text-lg">Sunrise</p>
          </div>
          <div class="space-y-2">
            <p class="text-gray-400 text-sm">Popularity</p>
            <p class="text-white font-semibold text-lg">#9,966 on MAL</p>
          </div>
          <div class="space-y-2">
            <p class="text-gray-400 text-sm">Community</p>
            <p class="text-white font-semibold text-lg">4,041 Members</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue';
import { useAnimeRandom } from '../../composables/useAnimeRandom';
import { useText } from '../../composables/useText';
import Loading from '../states/Loading.vue';

const { animeRandom, isLoading, fetchAnimeRandom } = useAnimeRandom();
const {truncate} = useText();

onMounted(() => {
  // console.log(animeRandom.value);
  fetchAnimeRandom();
  
});

</script>