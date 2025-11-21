import { computed, ref } from "vue";
import { useApi } from "../api/animeApi";

export function useAnimeFilter() {
  const { data, fetchData, isLoading } = useApi();

  const storedData = localStorage.getItem("animeFilter");
  const cached = storedData ? JSON.parse(storedData) : null;
  const animeFilter = ref(cached);

  async function fetchFilter(form) {
    
    const link = computed(() => {
      const baseUrl = 'https://api.jikan.moe/v4/anime'
      const params = new URLSearchParams()
      for (const [key, value] of Object.entries(form.value)) {
        if (value !== undefined && value !== null && value !== '') {
          if (Array.isArray(value)) {
            value.forEach(v => params.append(key, v))
          } else {
            params.append(key, value)
          }
        }
      }

      return `${baseUrl}?${params.toString()}`
    })


    await fetchData(link.value);

    if (data.value?.data) {
      animeFilter.value = data.value.data;
      localStorage.setItem("animeFilter", JSON.stringify(data.value.data));
    }
  }

  return { animeFilter, isLoading, fetchFilter };
}
