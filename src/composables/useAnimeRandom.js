import { ref } from "vue";
import { useApi } from "../api/animeApi";

export function useAnimeRandom() {
    const { data, fetchData, isLoading } = useApi();

    const storedData = localStorage.getItem("animeRandom");
    const cached = storedData ? JSON.parse(storedData) : null;
    const animeRandom = ref(cached);

    async function fetchAnimeRandom() {
        
        if (animeRandom.value && animeRandom.value.length > 0) return;

        await fetchData(`https://api.jikan.moe/v4/random/anime`);

        if (data.value?.data) {
            animeRandom.value = data.value.data;
            localStorage.setItem("animeRandom", JSON.stringify(data.value.data));
        }

    }
    return { animeRandom, isLoading, fetchAnimeRandom };
}
