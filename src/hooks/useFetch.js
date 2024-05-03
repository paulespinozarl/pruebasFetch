import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url, limit) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url, {
          params: {
            _limit: limit,
          },
        });
        setTodos(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, limit]);
  return {
    todos,
    loading,
  };
};
