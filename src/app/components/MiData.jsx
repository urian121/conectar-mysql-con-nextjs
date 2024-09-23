"use client";
import { useEffect, useState } from "react";
export default function MiData() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // Función para obtener los datos, esta se ejecuta cuando se renderiza el componente o cuando cambia el estado
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("../api/empleados");
      const result = await res.json();

      // Si hay un error, se lanza una excepción
      if (!res.ok) {
        console.log("Errror desconocido al obtener datos");
        setError(result.error);
        throw new Error(result.error || "Error desconocido al obtener datos");
      }

      // Si no hay error, se obtienen los datos
      console.log(result);
      setData(result.empleados);
    }

    // Llamamos a la función para obtener los datos
    fetchData();
  }, []);

  if (error) {
    return <div>Error al obtener los datos: {error}</div>;
  }

  return (
    <>
      {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
      {data && (
        <>
          <h4>Datos desde MySQL</h4>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
      )}
    </>
  );
}
