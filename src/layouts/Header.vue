<template>
  <div class="navbar bg-base-100 shadow-sm">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </div>
        <nav>
          <ul tabindex="-1" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><a>Homepage</a></li>
            <li><a>Portfolio</a></li>
            <li><a>About</a></li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="navbar-center">
      <Logo />
    </div>
    <div class="navbar-end">
      <button class="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </div>
  </div>
  <div class="px-4">
    <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
      <legend class="fieldset-legend">Recherche</legend>
      <div class="grid grid-cols-2 gap-3">
        <div class="flex flex-col col-span-3">
          <label for="search" class="input my-2 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-4">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input id="search" type="text" placeholder="Jojo's Bizzare Adventure" />
          </label>
        </div>
        <div v-for="select in inputFilterForm">
          <div v-if="select.types === 'select'" class="flex flex-col">
            <p class="label">{{ select.label }}</p>
            <select class="select my-2 capitalize min-w-64">
              <option disabled selected>{{ select.placeholder }}</option>
              <option v-for="data in select.input" :value="data.value" class="capitalize">{{ data.name }}</option>
            </select>
          </div>
          <div v-if="select.types === 'checkbox'" class=" h-full flex items-center">
            <p class="label">
              <input type="checkbox" checked="checked" class="checkbox" />
              {{ select.label }}
            </p>
          </div>

        </div>
        <div class="flex flex-col col-span-3">
          <p class="label">Genre</p>
          <fieldset class="my-2">
            <label v-for="genre in animeGenre" :class="[
        'badge badge-primary m-0.5 cursor-pointer',
        selectedGenres.includes(genre.mal_id) ? '' : 'badge-outline'
      ]">
              <input type="checkbox" name="fruits[]" :value="genre.mal_id" v-model="selectedGenres" hidden>
              {{genre.name}}
            </label>
          </fieldset>
        </div>
      </div>

    </fieldset>
  </div>
</template>

<script setup>
import Logo from '../components/ui/Logo.vue';
import { useAnimeGenre } from '../composables/useAnimeGenre';
import { inputFilterForm } from '../constants/inputFilterForm';
import { onMounted, ref } from 'vue';

const selectedGenres = ref([]);


const { animeGenre, isLoading, fetchGenre } = useAnimeGenre();

onMounted(() => {
  fetchGenre();
});

defineEmits(["show-fav", "go-home"]);
</script>
