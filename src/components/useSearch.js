import axios from "axios";
import { useState } from "react";

const useSearch = () => {
  const [gif, setGif] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: "oFZO6wGXuM7ACDEXbwrkstl0nYAFKFbm",
          q: searchValue,
          limit: 2,
        },
      });
      setGif(response.data.data);
    } catch (error) {
      alert("No se pudo buscar", console.log(error));
    } finally {
      setSearchValue("");
      setLoading(false);
    }
  };

  return {
    gif,
    searchValue,
    loading,
    setSearchValue,
    handleSearch,
  };
};

export { useSearch };
