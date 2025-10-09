<template>
  <Loading v-if="load" />

  <!-- Contenu principal -->
  <BorderCard v-else>
    <button @click="$emit('go-back')"
      class="group flex items-center gap-3 mb-4 px-4 py-2 bg-base-200 text-base-content rounded-xl border border-base-300 hover:border-primary hover:bg-base-300 transition-all duration-300 hover:scale-105">
      <svg class="w-5 h-5 group-hover:text-primary transition-colors" fill="none" stroke="currentColor"
        viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
      <span class="group-hover:text-primary transition-colors">Retour</span>
    </button>

    <!-- Hero Section -->
    <div
      class="bg-base-300 rounded-3xl border border-primary/80 overflow-hidden mb-8 hover:border-primary/30 transition-colors">
      <div class="flex flex-col lg:flex-row">
        <!-- Image principale -->
        <div v-if="animeDetail.images && animeDetail.images.webp" class="lg:w-1/3 relative group overflow-hidden">
          <img :src="animeDetail.images.webp.large_image_url" :alt="animeDetail.title"
            class="w-full h-96 lg:h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <!-- Overlay gradient -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/60">
          </div>

          <!-- Badge de statut -->
          <div
            class="absolute top-4 right-4 bg-primary text-primary-content px-4 py-2 rounded-full font-bold text-sm shadow-lg">
            {{ animeDetail.status || 'En cours' }}
          </div>
        </div>
        <span v-else class="loading loading-spinner text-primary loading-xl"></span>

        <!-- Informations principales -->
        <div class="lg:w-2/3 p-8 relative">
          <div class="space-y-6">
            <!-- Titre et note -->
            <div>
              <h1 class="text-4xl font-bold text-base-content mb-2 group-hover:text-primary transition-colors">
                {{ animeDetail.title }}
              </h1>
              <h2 class="text-2xl font-bold text-base-content/50 mb-2 group-hover:text-primary transition-colors">
                {{ animeDetail.title_japanese }}
              </h2>
              <div class="flex items-center gap-4 mb-4">
                <div class="flex items-center gap-2">
                  <div class="flex">
                    <svg v-for="i in 5" :key="i" class="w-5 h-5"
                      :class="i <= (animeDetail.score || 4) ? 'text-primary' : 'text-primary-content'"
                      fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <span class="text-primary font-bold">{{ animeDetail.score || 8.2 }}/10</span>
                </div>
                <span class="text-base-content/80">•</span>
                <span class="text-base-content/80">{{ animeDetail.year || '2023' }}</span>
                <span class="text-base-content/80">•</span>
                <span class="text-base-content/80">{{ animeDetail.episodes || '24' }} épisodes</span>
              </div>
            </div>

            <!-- Genres -->
            <div class="flex flex-wrap gap-2">
              <span v-for="genre in (animeDetail.genres || ['Action', 'Aventure', 'Drame'])" :key="genre"
                class="px-3 py-1 bg-primary text-primary-content rounded-full text-sm font-medium border border-primary/30">
                {{ genre.name }}
              </span>
            </div>

            <!-- Synopsis court -->
            <p class="text-base-content text-lg leading-relaxed">
              {{ truncate(animeDetail.synopsis, 500) }}
            </p>

            <!-- Actions -->
            <div class="flex gap-4 pt-4">
              <button @click="$emit('toggle-fav', anime)"
                class="group flex items-center gap-3 px-6 py-3 bg-primary text-primary-content font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
                <svg class="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd" />
                </svg>
                Ajouter aux favoris
              </button>
              <button
                class="group flex items-center gap-3 px-6 py-3 bg-base-300 text-base-content font-semibold rounded-xl border border-base-content hover:border-primary hover:bg-primary-content transition-all duration-300 cursor-pointer"
                popovertarget="popover-1" style="anchor-name:--anchor-1">
                <svg class="w-5 h-5 group-hover:text-primary transition-colors" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Regarder
              </button>
              <ul class="dropdown dropdown-right menu w-52 rounded-lg shadow-sm bg-base-200 border-primary" popover
                id="popover-1" style="position-anchor:--anchor-1">
                <li v-for="(link, index) in animeDetail.streaming" :key="index"><a :href="link.url" target="_blank">{{
                  link.name }}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

      <div class="lg:col-span-2 space-y-8">
        <Card title="Synopsis complet">
          <p class="text-base-content leading-relaxed text-lg">
            {{ animeDetail.synopsis }}
          </p>
        </Card>
        <Card title="Personnages principaux">
          <div v-for="character in (animeDetail.characters || defaultCharacters)" :key="character.name"
            class="flex items-center gap-4 p-4 bg-base-300 rounded-xl hover:bg-base--300/80 transition-colors">
            <div class="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
              <span class="text-primary font-bold">{{ character.name.charAt(0) }}</span>
            </div>
            <div>
              <h3 class="font-semibold text-base-content">{{ character.name }}</h3>
              <p class="text-base-content/80 text-sm">{{ character.role }}</p>
            </div>
          </div>
        </Card>
      </div>

      <div class="space-y-6">
        <Card title="Information">
          <div class="flex justify-between">
            <p class="text-base-content/80">Studio</p>
            <p class="text-base-content font-medium">
              <span>
                {{(animeDetail.studios || [{ name: 'Studio Ghibli' }]).map(s => s.name).join(' • ')}}
              </span>
            </p>
          </div>
          <div class="flex justify-between">
            <p class="text-base-content/80">Durée</p>
            <p class="text-base-content font-medium">{{ animeDetail.duration || '24 min/ép' }}</p>
          </div>
          <div class="flex justify-between">
            <p class="text-base-content/80">Source</p>
            <p class="text-base-content font-medium">{{ animeDetail.source || 'Manga' }}</p>
          </div>
          <div>
            <div class="flex justify-between mb-2">
              <p class="text-base-content/80">Popularité</p>
              <p class="text-primary font-bold">92%</p>
            </div>
            <div class="w-full bg-base-200 rounded-full h-2">
              <div class="bg-primary h-2 rounded-full" style="width: 92%"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between mb-2">
              <p class="text-base-content/80">Note critique</p>
              <p class="text-primary font-bold">88%</p>
            </div>
            <div class="w-full bg-base-200 rounded-full h-2">
              <div class="bg-primary h-2 rounded-full" style="width: 88%"></div>
            </div>
          </div>
        </Card>
        <Card title="Similaires" class="h-[500px] overflow-x-auto">
          <RecommendationCard :id="animeId"/>
        </Card>
      </div>
    </div>
  </BorderCard>
</template>

<script setup>
import { useRoute } from 'vue-router';
import Loading from '../components/states/Loading.vue';
import { onMounted, ref, watch } from 'vue';
import { useApi } from '../api/animeApi';
import { useText } from '../composables/useText';
import Card from '../components/cards/Card.vue';
import BorderCard from '../components/cards/BorderCard.vue';
import RecommendationCard from '../components/cards/RecommendationCard.vue';

const { truncate } = useText()

const route = useRoute()
const animeId = route.params.id;
const load = ref(false);
const storedData = localStorage.getItem('lastAnime');
const animeDetail = ref(
  storedData ? JSON.parse(storedData) : {}
);

// Données par défaut
const defaultCharacters = [
  { name: 'Protagoniste', role: 'Héros principal' },
  { name: 'Deutéragoniste', role: 'Personnage secondaire' },
  { name: 'Antagoniste', role: 'Rival/Ennemi' },
  { name: 'Mentor', role: 'Guide spirituel' }
]


const fetchDetail = async (id) => {
  const { data, error, fetchData } = useApi(
    `https://api.jikan.moe/v4/anime/${id}/full`
  );
  if (Object.keys(animeDetail.value).length === 0 || id !== animeDetail.value.mal_id) {
    load.value = true;

    try {
      await fetchData();

      if (error.value) {
        console.error("Erreur API :", error.value);
      }

      if (data.value) {
        localStorage.setItem("lastAnime", JSON.stringify(data.value.data));
        animeDetail.value = data.value.data;
        console.log('data fetched', animeDetail.value);

      }
    } finally {
      load.value = false;
    }
  }
}

watch(
  () => route.params.id,
  (newId, oldId) => {
    if (newId !== oldId) {
      fetchDetail(newId);
    }
  },
  { immediate: true }
);

</script>