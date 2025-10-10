import { ref } from "vue";
import { useApi } from "../api/animeApi";

export function useAnimeRecommendation() {
  const { data, fetchData, isLoading } = useApi();

  const storedData = localStorage.getItem("lastRecommendation");
  const cached = storedData ? JSON.parse(storedData) : null;
  const animeRecommendation = ref(cached);

  async function fetchRecommendation(id) {

    await fetchData(`https://api.jikan.moe/v4/anime/${id}/recommendations`);

    if (data.value?.data) {
      animeRecommendation.value = data.value.data;
      localStorage.setItem("lastRecommendation", JSON.stringify(data.value.data));
    }
    
  }
  return { animeRecommendation, isLoading, fetchRecommendation };
}
