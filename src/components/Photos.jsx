import { useEffect, useState } from "react";

export const Photos = () => {
  const [limit, setLimit] = useState(0);
  const [photos, setPhotos] = useState([]);
  const url = `https://jsonplaceholder.typicode.com/photos?_limit=2`;
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const resp = await fetch(url);
        const data = await resp.json();
        const datos = data.map((item) => ({
          title: item.title,
          url: item.url,
        }));
        setPhotos(datos);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPhotos();
  }, [limit]);

  return (
    <div>
      <input
        type="text"
        value={limit}
        onChange={(e) => setLimit(e.target.value)}
        placeholder="Enter limit"
      />
      <div className="flex">
        {photos.map((item) => (
          <div className="text-center" key={item.title}>
            <h2 className="pb-10">{item.title}</h2>
            <img className=" w-72" src={item.url} alt={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
};
