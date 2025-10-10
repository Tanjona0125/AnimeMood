import { ref } from "vue";
import { useApi } from "../api/animeApi";

export function useAnimeList() {
  const { data, fetchData, isLoading } = useApi();

  const storedData = localStorage.getItem("animeList");
  const cached = storedData ? JSON.parse(storedData) : null;
  const animeList = ref(cached);

  async function fetchList(mood) {

    if (cached) {
      animeList.value = cached;
      return;
    }

    await fetchData(`https://api.jikan.moe/v4/top/anime`);

    if (data.value?.data) {
      animeList.value = data.value.data;
      localStorage.setItem("animeList", JSON.stringify(data.value.data));
    }
  }

  return { animeList, isLoading, fetchList };
}
