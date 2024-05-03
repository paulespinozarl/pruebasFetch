import axios from "axios";
import { useState } from "react";

const GifAxios = () => {
  const [gif, setGif] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [limit, setLimit] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setLoading(true);
      if (!searchTerm || !limit || isNaN(limit)) {
        alert(
          "Por favor, ingresa un término de búsqueda y un número válido de resultados."
        );
        return;
      }
      const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: "oFZO6wGXuM7ACDEXbwrkstl0nYAFKFbm",
          q: searchTerm,
          limit: limit,
        },
      });
      setGif(response.data.data);
      setSearchTerm("");
      setLimit("");
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Buscar"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <input
        type="number"
        placeholder="# de resultados"
        onChange={(e) => setLimit(e.target.value)}
        value={limit}
      />
      <button onClick={handleSearch}>Buscar</button>
      {loading && <h1>Cargando...</h1>}
      {gif.map((item) => (
        <div key={item.id}>
          <h1 className="w-44">{item.title}</h1>
          <img
            className="w-20"
            src={item.images.downsized_medium.url}
            alt={item.title}
          />
        </div>
      ))}
    </>
  );
};

export { GifAxios };
