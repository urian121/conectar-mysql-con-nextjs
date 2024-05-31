import mysql from "mysql2/promise";

export async function query({ query, values = [] }) {
  const dbconnection = await mysql.createConnection({
    host: "localhost",
    post: "3306",
    database: "bd_nextjs_mysql",
    user: "root",
    password: "",
  });

  try {
    const [results] = await dbconnection.execute(query, values);
    console.log("Conexión exitosa a la base de datos...");
    /*
    const [rows] = await dbconnection.execute("SELECT 1 + 1 AS result");
    console.log("Consulta ejecutada exitosamente, resultado:", rows[0].result);
    */

    dbconnection.end();
    return results;
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error.message);
    //throw Error(error.message);
    return { error };
  }
}
