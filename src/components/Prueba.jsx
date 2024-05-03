import { useSearch } from "./useSearch";

const Prueba = () => {
  const { gif, searchValue, loading, setSearchValue, handleSearch } =
    useSearch();

  return (
    <div className="flex flex-col">
      <input
        className="w-44 h-10 bg-gray-700 rounded-lg m-2 pl-3"
        type="text"
        placeholder="Buscar"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button
        className="w-44 h-10 bg-gray-700 rounded-lg m-2"
        onClick={handleSearch}
      >
        Buscar
      </button>
      {loading && (
        <h1 className=" w-44 bg-slate-50 rounded-md m-2">Cargando...</h1>
      )}
      {gif.map((item) => (
        <div className="m-2" key={item.id}>
          <h1 className="w-44 bg-slate-200 rounded-t-md">{item.title}</h1>
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

export { Prueba };
