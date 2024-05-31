"use client";
import { useEffect, useState } from "react";
export default function MiData() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("../api/empleados");
      const result = await res.json();

      if (res.ok) {
        setData(result);
      } else {
        setError(result.error);
      }
    }

    fetchData();
  }, []);

  if (error) {
    return <div>Error al obtener los datos: {error}</div>;
  }

  return (
    <>
      <h4>Datos desde MySQL</h4>
    </>
  );
}
