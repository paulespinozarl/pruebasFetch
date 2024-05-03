import React, { useState, useEffect } from "react";

const Temporizador = () => {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundos(segundos + 1);
    }, 1000);
    return () => clearInterval(intervalo);
  }, [segundos]);

  return (
    <div>
      <p>Tiempo transcurrido: {segundos} segundos</p>
    </div>
  );
};

export { Temporizador };
