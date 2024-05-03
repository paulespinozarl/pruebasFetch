import { useFetch } from "../hooks/useFetch";

const Todos = () => {
  const url = "https://jsonplaceholder.typicode.com/todos?";
  const { todos, loading } = useFetch(url, 2);

  return (
    <>
      {loading && <h1>Cargando...</h1>}
      {todos.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <span>{item.completed ? "Listo" : "Pendiente"}</span>
        </div>
      ))}
    </>
  );
};

export { Todos };
