import { ref } from "vue";
import { useApi } from "../api/animeApi";

export function useAnimeGenre() {
    const { data, fetchData, isLoading } = useApi();

    const storedData = localStorage.getItem("animeGenre");
    const cached = storedData ? JSON.parse(storedData) : null;
    const animeGenre = ref(cached);

    async function fetchGenre() {
        if (animeGenre.value && animeGenre.value.length > 0) return;

        await fetchData(`https://api.jikan.moe/v4/genres/anime?filter=genres`);

        if (data.value?.data) {
            animeGenre.value = data.value.data;
            localStorage.setItem("animeGenre", JSON.stringify(data.value.data));
        }

    }
    return { animeGenre, isLoading, fetchGenre };
}
