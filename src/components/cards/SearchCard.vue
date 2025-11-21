<template>
    <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
        <form action="">
            <legend class="fieldset-legend">Recherche</legend>
            <div>
                <div>
                    <label for="search" class="input my-2 w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                <input id="search" type="text" placeholder="Jojo's Bizzare Adventure" v-model="form.q" />
                        </svg>
                    </label>
                </div>
                <div v-for="field in inputFilterForm" :key="field.label">
                    <div v-if="field.types === 'select'" class="flex flex-col">
                        <p class="label">{{ field.label }}</p>
                        <select class="select my-2 capitalize w-full" v-model="form[field.model]">
                            <option disabled selected>{{ field.placeholder }}</option>
                            <option v-for="data in field.input" :value="data.value" class="capitalize">
                                {{ data.name }}
                            </option>
                        </select>
                    </div>
                    <div v-if="field.types === 'checkbox'" class=" h-full flex items-center my-3">
                        <p class="label">
                            <input type="checkbox" checked="checked" class="checkbox" v-model="form[field.model]" />
                            {{ field.label }}
                        </p>
                    </div>

                </div>
                <div class="flex flex-col">
                    <p class="label">Genre</p>
                    <fieldset class="my-2">
                        <label v-for="genre in animeGenre" :key="genre.mal_id" :class="[
                            'badge badge-primary m-0.5 cursor-pointer',
                        ]">
                            <input type="checkbox" name="g[]" :value="genre.mal_id" v-model="form.selected_genres" class="sr-only">
                            {{ genre.name }}
                        </label>
                    </fieldset>
                </div>
            </div>
            <router-link :to="{
                name: 'filter', query: {
                    q: form.q,
                    status: form.status,
                    type: form.type,
                    rating: form.rating,
                    order_by: form.order_by,
                    sfw: form.sfw,
                    selected_genres: form.selected_genres.join(','),
                }
            }">
                <button class="btn btn-primary">Rechercher</button>
            </router-link>
        </form>
    </fieldset>
</Template>
<script setup>
import { inputFilterForm } from '../../constants/inputFilterForm';
import { useAnimeGenre } from '../../composables/useAnimeGenre'
import { onMounted, ref, watch } from 'vue';

const { animeGenre, fetchGenre } = useAnimeGenre();
const form = ref({
    q: '',
    type: '',
    status: '',
    rating: '',
    order_by: '',
    sfw: false,
    selected_genres: [],
});

onMounted(() => {
    fetchGenre();
});

</script>