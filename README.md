# Conectar MySQL con Next.js

Este proyecto se centra en conectar una base de datos MySQL con una aplicación Next.js. La configuración incluye la instalación y configuración de un cliente MySQL en el backend de Next.js, la creación de endpoints API para manejar operaciones CRUD (crear, leer, actualizar, eliminar) y la integración de estos endpoints con las interfaces de usuario. El objetivo es permitir que la aplicación Next.js interactúe dinámicamente con los datos almacenados en MySQL, facilitando la gestión de datos y mejorando la funcionalidad de la aplicación.

## Instalación

### 1. Instalar el paquete mysql2

Ejecuta el siguiente comando para instalar el driver MySQL:

    npm install --save mysql2

    https://www.npmjs.com/package/mysql2

### 2. Crear una base de datos en MySQL

    bd_nextjs_mysql

### 3. Instalar dependencias del proyecto

    npm install

### 4. Correr el proyecto

    npm run dev
    Luego, revisa tu navegador en http://localhost:3000.

## Mis Notas

#### Next.js y el App Router

**App Router:**
En su última versión, Next.js introdujo un nuevo sistema de enrutamiento llamado App Router, que proporciona una forma más flexible e intuitiva de definir rutas y manejar la navegación en tu aplicación.

El **App Router** permite definir las rutas y la estructura de la aplicación de manera más intuitiva y flexible, mejorando la organización del código y facilitando la implementación de características como la carga de datos, layouts y gestión de estado.
API Routes en Next.js

**En Next.js,** los archivos en la carpeta /pages/api son rutas API. Cada archivo dentro de /pages/api se convierte automáticamente en una ruta API basada en su nombre y ubicación dentro de la carpeta.

Ejemplo de Rutas de la API

    /pages/api/empleados.js se convierte en /api/empleados.
    /pages/api/empleados/router.js no es una ruta válida como tal. Para crear rutas adicionales, debes crear otros archivos en la carpeta empleados.

Si deseas crear múltiples rutas relacionadas con "empleados", puedes estructurarlo así:

    /pages/api/empleados/index.js  -> /api/empleados (ruta principal)
    .pages/api/empleados/[id].js   -> /api/empleados/[id] (para manejar solicitudes dinámicas)

#### Opciones para definir API Routes

Las **API Routes** tradicionales (dentro de /pages/api) siguen funcionando igual que en versiones anteriores. Estas rutas son ideales para manejar lógica del backend, como la conexión a bases de datos y autenticación.

Ejemplo simple de API Route

    // /pages/api/empleados.js
    export default async function handler(req, res) {
        if (req.method === 'GET') {
            // Lógica para GET
            res.status(200).json({ message: "GET request success!" });
        } else {
            res.status(405).json({ message: "Method not allowed" });
        }
    }

#### ¿Cuándo usar cada enfoque?

    /pages/api: Si prefieres la forma tradicional de definir rutas o si tu proyecto ya está basado en la estructura de pages.
    /app/api: Si estás adoptando la nueva arquitectura de Next.js 13, esta es la opción recomendada para nuevas aplicaciones debido a la flexibilidad y mejoras en el rendimiento

Con esta guía, deberías poder conectar tu aplicación Next.js con una base de datos MySQL y manejar la lógica del backend mediante rutas API de manera efectiva.

### Notas sobre las Mejoras:

1. **Estructura**: La información está organizada en secciones claras para facilitar la lectura.
2. **Uso de Formato Markdown**: Se han utilizado encabezados, listas y bloques de código para mejorar la legibilidad.
3. **Claridad**: Se han añadido explicaciones donde es necesario para ayudar a los usuarios a entender mejor cada sección.
4. **Consistencia**: Se ha mantenido un tono profesional y claro a lo largo del documento.

## Que significa `export async function query({ query, values = [] }) {}`

La función `query` recibe un objeto con dos propiedades:

- query (String): La consulta SQL a ejecutar, como `"SELECT * FROM tbl_empleados"`
- values (Array, opcional): Un array de valores para reemplazar marcadores de posición en la consulta.
- Se inicializa como un array vacío ([]) por defecto, lo que evita errores si no se proporcionan valores. Esto ayuda a prevenir inyecciones SQL.

#### Sin condiciones (todos los registros):

    const result = await query({
        query: "SELECT * FROM tbl_empleados",
        values: [], // No hay condiciones, devuelve todos los empleados
    });

#### Con condiciones (filtro específico):

    // Devuelve solo aquellos registros donde el nombre es "Pedro"
    const result = await query({
        query: "SELECT * FROM tbl_empleados WHERE nombre = ?",
        values: ["Pedro"],
    });

#### Con múltiples condiciones:

    // Devuelve todos los registros donde el nombre es "Pedro" y el salario es mayor a 1000
    const result = await query({
      query: "SELECT * FROM tbl_empleados WHERE nombre = ? AND salario > ?",
      values: ["Pedro", 1000],
    });

En resumen, `values` permite parametrizar las condiciones en la consulta, mientras que values = [] significa que no hay filtros aplicados.
