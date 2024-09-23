import { query } from "../../../lib/config";

/**
 * Metodo GET que maneja una solicitud GET que devuelve una lista de empleados predefinida en formato JSON.
 * Utiliza el objeto Response para estructurar la respuesta,
 * estableciendo el código de estado en 200 y el encabezado Content-Type para indicar que la respuesta es un JSON.
 */

/*
export async function GET() {
 // Crea un array de objetos que representan empleados con sus datos
  let arrayobjetos = [
    { id: 1, nombre: "Pedro", salario: 1000 },
    { id: 2, nombre: "Juan", salario: 2000 },
    { id: 3, nombre: "Maria", salario: 3000 },
  ];

   // Retorna una respuesta en formato JSON con un código de estado 200
  return new Response(JSON.stringify({ empleados: arrayobjetos }), {
    status: 200,
    headers: {
      "Content-Type": "application/json", // Especifica que el contenido es JSON
    },
  });
}
*/

/**
 * Este código utiliza NextResponse para manejar las respuestas en API routes de Next.js,
 * asegurando que las respuestas sean correctamente formateadas como JSON y que se incluyan los códigos de estado HTTP
 * correspondientes adecuados para facilitar el manejo de errores.
 */
import { NextResponse } from "next/server";
export async function GET() {
  try {
    // Ejecuta una consulta para obtener todos los empleados de la base de datos
    const empleados = await query({
      query: "SELECT * FROM tbl_empleados",
      values: [],
    });

    // Retorna la respuesta en formato JSON con un código de estado 200 (OK) y los datos de los empleados
    return NextResponse.json({ empleados }, { status: 200 });
  } catch (error) {
    console.error("Error al ejecutar la consulta:", error);
    // Si hay un error, retorna una respuesta JSON con el mensaje de error y un código de estado 500 (Internal Server Error)
    return NextResponse.json({ error: error.message || "Error al ejecutar la consulta" }, { status: 500 });
  }
}

/**
 * Este código maneja una solicitud GET, ejecutando una consulta a la base de datos para obtener datos de empleados.
 * Utiliza Response para devolver los resultados en formato JSON, asegurando que se incluya el encabezado Content-Type
 * para indicar que la respuesta es de tipo JSON, y maneja adecuadamente los errores, proporcionando mensajes claros.
 */

/*
export async function GET() {
  try {
    // Ejecuta una consulta para obtener todos los empleados de la base de datos
    const empleados = await query({
      query: "SELECT * FROM tbl_empleados",
      values: [],
    });

    // Retorna una respuesta en formato JSON con un código de estado 200
    return new Response(JSON.stringify({ empleados }), {
      status: 200,
      headers: {
        "Content-Type": "application/json", // Especifica que el contenido es JSON
      },
    });
  } catch (error) {
    console.error("Error al ejecutar la consulta:", error);
    // Si hay un error, retorna una respuesta JSON con el mensaje de error y un código de estado 500
    return new Response(JSON.stringify({ error: error.message || "Error al ejecutar la consulta" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json", // Especifica que el contenido es JSON
      },
    });
  }
}
*/
