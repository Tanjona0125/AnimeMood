import { ref } from "vue";
import axios from "axios";

export function useApi(initialUrl = null) {
  const data = ref(null);
  const error = ref(null);
  const isLoading = ref(false);
  const url = ref(initialUrl);

  const fetchData = async (newUrl = null, params = {}) => {
    if (newUrl) url.value = newUrl;
    if (!url.value) {
      error.value = new Error("URL manquante pour fetchData()");
      return;
    }

    isLoading.value = true;
    error.value = null;

    try {
      const response = await axios.get(url.value, { params });
      data.value = response.data;
    } catch (err) {
      error.value = err;
      console.error(error.value);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    data,
    error,
    isLoading,
    fetchData,
  };
}
