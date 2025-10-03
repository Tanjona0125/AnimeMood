<template>
    <div>
        <div v-if="load" class="flex items-center gap-3 p-3 rounded-lg">
            <div class="skeleton w-12 h-16 rounded bg-base-200"></div>
            <div>
                <div class="skeleton w-30 h-7 rounded bg-base-200"></div>
            </div>
        </div>
        <div v-else v-for="item in apiRecommendation.data" :key="item.id">
            <router-link :to="{ name: 'anime_detail', params: { id: item.entry.mal_id } }">
                <div class="flex items-center gap-3 p-3 bg-base-300 rounded-lg hover:bg-base-200/80 transition-colors cursor-pointer">
                    <img :src="item.entry.images.webp.large_image_url" :alt="item.title"
                        class="w-12 h-16 object-cover rounded">
                    <div>
                        <h3 class="font-medium text-base-content text-sm">{{ item.entry.title }}</h3>
                    </div>
                </div>
            </router-link>
        </div>

    </div>

</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useApi } from '../../api/animeApi';

const load = ref(false);

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
});
const storedData = localStorage.getItem('lastRecommendation');
const apiRecommendation = ref(
    storedData ? JSON.parse(storedData) : {}
);


const { data, error, fetchData } = useApi(
    `https://api.jikan.moe/v4/anime/${props.id}/recommendations`
);

onMounted(async () => {
        load.value = true;

        try {
            await fetchData();

            if (error.value) {
                console.error("Error API :", error.value);
            }

            if (data.value) {
                localStorage.setItem("lastRecommendation", JSON.stringify(data.value));
                apiRecommendation.value = data.value;
            }
        } finally {
            load.value = false;
        }
    }
);


</script>