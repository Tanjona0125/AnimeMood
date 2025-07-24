import { ref } from "vue";
import axios from "axios";

export function useApi(url) {
  const data = ref(null);
  const error = ref(null);
  const isLoading = ref(false);

  const fetchData = async (params = {}) => {
    isLoading.value = true;
    error.value = null;
    try {
      const response = await axios.get(url, { params });
      data.value = response.data;
    } catch (err) {
      error.value = err;
    } finally {
      isLoading.value = false;
    }
  };

  fetchData();

  return {
    data,
    error,
    isLoading,
    fetchData,
  };
}
