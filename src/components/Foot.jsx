import axios from "axios";
import React, { useState } from "react";

export const Foot = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [gif, setGif] = useState([]);

  const handleClear = () => {
    setSearchTerm("");
    setGif([]);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/PruebaPHP/lista_usuarios.php"
      );
      const data = response.data;
      console.log({ data });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="h-1/2">
      <div className="flex max-w-4xl mx-auto justify-center m-4">
        <input
          className=" bg-gray-700 rounded-md p-2 w-96"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Ingrese el término de búsqueda"
        />
        <button
          className="bg-gray-400 rounded-md p-2 ml-2"
          onClick={handleSearch}
        >
          Buscar
        </button>

        <button
          className="bg-gray-400 rounded-md p-2 ml-2"
          onClick={handleClear}
        >
          Borrar
        </button>
      </div>
      <div className="flex max-w-4xl mx-auto justify-center m-4">
        <div className="flex flex-col">
          <h1 className="text-center">{searchTerm}</h1>
          <div className="flex gap-5 flex-wrap">
            {gif.map((gif) => (
              <div key={gif.id}>
                <h2 className="pb-10">{gif.title}</h2>
                <img className=" w-72" src={gif.url} alt={gif.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
