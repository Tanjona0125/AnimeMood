import { ref } from "vue";
import { useApi } from "../api/animeApi";

export function useAnimeDetail() {
  const { data, fetchData, isLoading } = useApi();

  const storedData = localStorage.getItem("lastAnime");
  const cached = storedData ? JSON.parse(storedData) : null;
  const animeDetail = ref(cached);

  async function fetchDetail(id) {

    if (cached && String(cached.mal_id) === String(id)) {
      animeDetail.value = cached;
      return;
    }

    await fetchData(`https://api.jikan.moe/v4/anime/${id}/full`);

    if (data.value?.data) {
      animeDetail.value = data.value.data;
      localStorage.setItem("lastAnime", JSON.stringify(data.value.data));
    }
  }

  return { animeDetail, isLoading, fetchDetail };
}
