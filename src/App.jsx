import { Albums } from "./components/Albums";
import MyComponent from "./components/Coin";
import { Contador } from "./components/Contador";
import { Foot } from "./components/Foot";
import { GifAxios } from "./components/GifAxios";
import { Gifs } from "./components/Gifts";
import { Photos } from "./components/Photos";
import { Prueba } from "./components/Prueba";
import { Prueba2 } from "./components/Prueba2";
import { Prueba3 } from "./components/Prueba3";
import { Todos } from "./components/Todos";
import { Users } from "./components/Users";

const App = () => {
  return (
    <div>
      <Gifs />
      {/* <Photos /> */}
      {/* <Users /> */}
      {/* <Albums /> */}
      {/* <Todos /> */}
      {/* <GifAxios /> */}
      {/* <ListaItems />
      <hr />
      <Formulario />/ */}
      <hr />
      {/* <Contador /> */}
      <Foot />
    </div>
  );
};

export { App };
