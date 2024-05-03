import axios from "axios";
import { useState } from "react";

const Prueba3 = () => {
  const [gif, setGif] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const searchGif = async () => {
    try {
      const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
        params: {
          q: searchValue,
          api_key: "oFZO6wGXuM7ACDEXbwrkstl0nYAFKFbm",
          limit: 2,
        },
      });
      console.log(response.data.data);
      setGif(response.data.data);
    } catch (error) {
      alert("No se pudo bsucar", console.log(error));
    }
  };

  return (
    <div>
      <div onClick={searchGif}>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button>Buscar</button>
      </div>
      <div>
        {gif.map((item) => (
          <div key={item.id} className="w-44">
            <h1>{item.title}</h1>
            <img src={item.images.downsized_still.url} alt={item.title} />
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export { Prueba3 };
