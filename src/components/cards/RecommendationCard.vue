<template>
    <div>
        <div v-if="isLoading" v-for="n in 3" :key="n" class="flex items-center gap-3 p-3 rounded-lg">
            <div class="skeleton w-12 h-16 rounded bg-base-200"></div>
            <div>
                <div class="skeleton w-30 h-7 rounded bg-base-200"></div>
            </div>
        </div>
        <div v-else>
            <div v-if="animeRecommendation && animeRecommendation.length > 0" v-for="item in animeRecommendation.slice(0, 10)" :key="item.entry.mal_id">
                <router-link :to="{ name: 'anime_detail', params: { id: item.entry.mal_id } }">
                    <div
                        class="flex items-center gap-3 p-3 bg-base-300 rounded-lg hover:bg-base-200/80 transition-colors cursor-pointer">
                        <img :src="item.entry.images.webp.large_image_url" :alt="item.title"
                            class="w-12 h-16 object-cover rounded">
                        <div>
                            <h3 class="font-medium text-base-content text-sm">{{ item.entry.title }}</h3>
                        </div>
                    </div>
                </router-link>
            </div>
            <div v-else class="flex items-center">
                <p class="font-medium text-base-content text-sm text-center">Je n'ai vraiment rien a recommender.</p>
            </div>
        </div>

    </div>

</template>
<script setup>
import { watch } from 'vue';
import { useAnimeRecommendation } from '../../composables/useAnimeRecommendation';

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
});

const { animeRecommendation, isLoading, fetchRecommendation } = useAnimeRecommendation();

watch(
    () => props.id,
    (newId, oldId) => {
        if (newId !== oldId) {
            fetchRecommendation(newId);
        }
    },
    { immediate: true }
);

</script>