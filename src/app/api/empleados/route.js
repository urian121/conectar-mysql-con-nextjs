import { query } from "../../../lib/config";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const products = await query({
      query: "SELECT * FROM tbl_empleados",
      values: [],
    });
    //res.status(200).json({ products: products });

    let arrayobjetos = [
      { id: 1, nombre: "Pedro", salario: 1000 },
      { id: 2, nombre: "Juan", salario: 2000 },
      { id: 3, nombre: "Maria", salario: 3000 },
    ];
    res.status(200).json({ products: arrayobjetos });

    /*
    const result = await query({ query: "SELECT * FROM tbl_empleados" });
    if (result.error) {
      console.error("Error al ejecutar la consulta:", result.error);
      return res.status(500).json({ error: result.error });
    }
      res.status(200).json(result);
  */
  }
}
