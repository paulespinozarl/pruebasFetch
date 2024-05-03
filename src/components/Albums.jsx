import { useEffect, useState } from "react";

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const getAlbums = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums?_limit=2"
      );
      const data = await response.json();
      const albumsData = data.map((item) => ({
        title: item.title,
        id: item.id,
      }));
      console.log(albumsData);
      setAlbums(albumsData);
    };

    const getPhotos = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_limit=2"
      );
      const data = await response.json();
      const dataPhotos = data.map((item) => ({
        id: item.id,
        url: item.url,
      }));
      setPhotos(dataPhotos);
    };
    getPhotos();
    getAlbums();
  }, []);

  return (
    <>
      {albums.map((item) => (
        <h1 key={item.id}>{item.title}</h1>
      ))}
      {photos.map((item) => (
        <img className="w-32" id={item.id} src={item.url} alt="#" />
      ))}
    </>
  );
};

export { Albums };
