import { useEffect, useState } from "react";

import api from "./Types";
function Contador() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    api.search(query).then(setProducts);
  }, [query]);

  const handleOrder = () => {
    const productosClon = [...products];
    productosClon.sort((a, b) => (a.price < b.price ? 1 : -1));
    setProducts(productosClon);
  };

  return (
    <main>
      <h1>Tienda digitaloncy</h1>
      <input
        name="text"
        placeholder="tv"
        type="text"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleOrder}>Ordenar</button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <span>$ {product.price}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}

export { Contador };
