import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const resp = await fetch(
          "https://jsonplaceholder.typicode.com/users?_limit=4"
        );
        const data = await resp.json();
        const datos = data.map((item) => ({
          id: item.id,
          nombre: item.name,
          usuario: item.username,
          email: item.email,
          address: {
            street: item.address.street,
            suite: item.address.suite,
          },
        }));
        setUsers(datos);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  return (
    <>
      {users.map((item) => (
        <div key={item.id} className="flex m-5">
          <div className="flex gap-5 flex-col">
            <h1>Nombre: {item.name}</h1>
            <h2>Usuario: {item.username}</h2>
            <h3>Email: {item.email}</h3>
          </div>
          <div className="flex flex-col gap-5">
            <h2>Direccion:</h2>
            <span>{item.address.street}</span>
            <span>{item.address.suite}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export { Users };
