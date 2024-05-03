import axios from "axios";
import { useState } from "react";

const Prueba2 = () => {
  const [gif, setGif] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState("");

  const handleSearch = async () => {
    try {
      if (search.length < 3) return alert("Minimo 3 carácteres");
      if (limit < 0) return alert("Minimo 1 resultado");
      setLoading(true);
      const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
        params: {
          q: search,
          api_key: "oFZO6wGXuM7ACDEXbwrkstl0nYAFKFbm",
          limit: limit,
        },
      });
      setGif(response.data.data);
    } catch (error) {
      alert("No se pudo buscar", console.log(error));
    } finally {
      setLoading(false);
      setSearch("");
      setLimit("");
    }
  };

  return (
    <div className="flex flex-col items-center ">
      <input
        className="w-44 h-10 bg-gray-700 rounded-lg m-2 pl-3"
        type="text"
        placeholder="Buscar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <input
        className="w-44 h-10 bg-gray-700 rounded-lg m-2 pl-3"
        type="number"
        placeholder="Cantidad"
        value={limit}
        onChange={(e) => {
          const newValue = parseInt(e.target.value);
          if (!isNaN(newValue) && newValue >= 1) {
            setLimit(newValue);
          }
        }}
      />
      <button
        className="w-44 h-10 bg-gray-700 rounded-lg m-2"
        onClick={handleSearch}
      >
        Buscar
      </button>
      {loading && (
        <h1 className=" w-44 bg-slate-50 rounded-md m-2 p-2 text-center">
          Cargando...
        </h1>
      )}
      {gif.map((item) => (
        <div className="m-2" key={item.id}>
          <h1 className="w-44 bg-slate-200 rounded-t-md p-2 text-center">
            {item.title}
          </h1>
          <img
            className="w-44"
            src={item.images.downsized_medium.url}
            alt={item.title}
          />
        </div>
      ))}
    </div>
  );
};

export { Prueba2 };
