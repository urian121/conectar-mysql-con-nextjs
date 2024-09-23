// Importando el paquete mysql2 para la configuración de la base de datos
import mysql from "mysql2/promise";

/**
 * Función para ejecutar consultas en la base de datos MySQL
 */
export async function query({ query, values = [] }) {
  // Establecer la conexión con la base de datos MySQL
  const dbconnection = await mysql.createConnection({
    host: "localhost", // Dirección del servidor de la base de datos
    database: "bd_nextjs_mysql", // Nombre de la base de datos a la que se conecta
    user: "root", // Nombre de usuario para la conexión
    password: "", // Contraseña del usuario
    port: "3306", // Puerto donde se escucha la base de datos (por defecto MySQL)
  });

  try {
    // Ejecutar la consulta y capturar los resultados
    const [results] = await dbconnection.execute(query, values);
    console.log("Conexión exitosa a la base de datos...");

    dbconnection.end(); // Cerrar la conexión a la base de datos
    return results; // Retornar los resultados de la consulta
  } catch (error) {
    // Manejar errores durante la conexión o ejecución de la consulta
    console.error("Error al conectar a la base de datos:", error.message);
    //throw Error(error.message); // Descomentar para lanzar error en caso de fallo
    return { error }; // Retornar el error para su manejo en el llamador
  }
}
