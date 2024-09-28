"use client";
// Importando useEffect y useState de los Hooks de React
import { useEffect, useState } from "react";
export default function MiData() {
  const [data, setData] = useState(null); // Estado para almacenar los datos
  const [error, setError] = useState(null); // Estado para manejar los errores

  // Función para obtener los datos, esta se ejecuta cuando se renderiza el componente
  useEffect(() => {
    // Función para realizar la llamada a la API
    async function fetchData() {
      const res = await fetch("../api/empleados"); // Realiza la llamada a la API
      const result = await res.json(); // Obtiene los datos en formato JSON

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
          {/* Imprimimos los datos obtenidos */}
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
      )}
    </>
  );
}
