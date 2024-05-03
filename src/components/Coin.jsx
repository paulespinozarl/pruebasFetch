import React, { useEffect, useState } from "react";
import axios from "axios";

const MyComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/coinmarketcap"
        );
        console.log(response.data.data);
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* {data.map((item) => (
        <div className="flex gap-5 p-5" key={item.id}>
          <h1>{item.name}</h1>
          <h2>{item.symbol}</h2>
          <h3>{item.quote.USD.price}</h3>
        </div>
      ))} */}
    </div>
  );
};

export default MyComponent;
