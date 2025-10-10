import { ref } from "vue";
import { useApi } from "../api/animeApi";

export function useAnimeCharacterList() {
  const { data, fetchData, isLoading } = useApi();

  const storedData = localStorage.getItem("lastCharacterList");
  const cached = storedData ? JSON.parse(storedData) : null;
  const animeCharacterList = ref(cached);

  async function fetchCharacterList(id) {

    await fetchData(`https://api.jikan.moe/v4/anime/${id}/characters`);

    if (data.value?.data) {
      animeCharacterList.value = data.value.data;
      localStorage.setItem("lastCharacterList", JSON.stringify(data.value.data));
    }
    
  }
  return { animeCharacterList, isLoading, fetchCharacterList };
}
