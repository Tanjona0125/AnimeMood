<template>
    <div class="grid grid-cols-2">
        <div v-if="isLoading" v-for="n in 2" :key="n">
            <div class="w-60 flex items-center gap-4 p-4 bg-base-300 rounded-xl hover:bg-base--300/80 transition-colors">
                <div class="skeleton w-12 h-20 bg-base-200 rounded">
                </div>
                <div>
                    <div class="skeleton h-7 rounded bg-base-200 mb-2"></div>
                    <div class="skeleton w-30 h-7 rounded bg-base-200"></div>
                </div>
            </div>
        </div>
        <div v-else v-for="character in animeCharacterList.slice(0, 8)" :key="character.character.mal_id"
            class="w-60 flex items-center gap-4 p-4 bg-base-300 rounded-xl hover:bg-base--300/80 transition-colors">
            <div class="bg-primary/20 rounded border border-primary flex items-center justify-center overflow-hidden">
                <img :src="character.character.images.webp.image_url" class="w-12 min-h-20" alt="" srcset="">
            </div>
            <div>
                <h3 class="font-semibold text-base-content mb-2">{{ character.character.name.split(', ').reverse().join(' ') }}</h3>
                <p class="text-base-content/80 text-sm">{{ character.role }}</p>
            </div>
        </div>
    </div>

</template>
<script setup>
import { watch } from 'vue';
import { useAnimeCharacterList } from '../../composables/useAnimeCharacterList';

const props = defineProps({
    id: {
        type: String,
        required: true,
    }
});
const { animeCharacterList, isLoading, fetchCharacterList } = useAnimeCharacterList();

watch(
    () => props.id,
    (newId, oldId) => {
        if (newId !== oldId) {
            fetchCharacterList(newId);
        }
    },
    { immediate: true }
);

</script>