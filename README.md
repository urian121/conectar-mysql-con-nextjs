# Conectar MySQL con Next.js

Para este proyecto se centra en conectar una base de datos MySQL con una aplicación Next.js. La configuración incluye la instalación y configuración de un cliente MySQL en el backend de Next.js, la creación de endpoints API para manejar operaciones CRUD (crear, leer, actualizar, eliminar) y la integración de estos endpoints con las interfaces de usuario. El objetivo es permitir que la aplicación Next.js interactúe dinámicamente con los datos almacenados en MySQL, facilitando la gestión de datos y mejorando la funcionalidad de la aplicación.

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
    Luego, revisa tu navegador en:
    http://localhost:3000

    http://localhost:3000/api/empleados

## Notas

#### Next.js y el App Router

**App Router:**
En su última versión, Next.js introdujo un nuevo sistema de enrutamiento llamado App Router, que proporciona una forma más flexible e intuitiva de definir rutas y manejar la navegación en tu aplicación.

El **App Router** permite definir las rutas y la estructura de la aplicación de manera más intuitiva y flexible, mejorando la organización del código y facilitando la implementación de características como la carga de datos, layouts y gestión de estado.

En **Next.js 13**, inicialmente las rutas **API** seguían estando dentro de pages/api, pero con la introducción de la nueva estructura del **App Router** en Next.js 13.4 y posteriores, las API ahora se definen dentro de **app/api**.

## Que significa 
`export async function query({ query, values = [] }) {}`

La función **`query`** recibe un objeto con dos propiedades:

- **query** (String): La consulta SQL a ejecutar, como **`"SELECT * FROM tbl_empleados"`**.

- **values** (Array, opcional): Un array de valores para reemplazar marcadores de posición en la consulta.

- Se inicializa como un **array vacío ([])** por defecto, lo que evita errores si no se proporcionan valores. Esto ayuda a **prevenir inyecciones SQL.**

### Sin condiciones (todos los registros):

    const result = await query({
        query: "SELECT * FROM tbl_empleados",
        values: [], // No hay condiciones, devuelve todos los empleados
    });

### Con condiciones (filtro específico):

    // Devuelve solo aquellos registros donde el nombre es "Pedro"
    const result = await query({
        query: "SELECT * FROM tbl_empleados WHERE nombre = ?",
        values: ["Pedro"],
    });

### Con múltiples condiciones:

    // Devuelve todos los registros donde el nombre es "Pedro" y el salario es mayor a 1000
    const result = await query({
      query: "SELECT * FROM tbl_empleados WHERE nombre = ? AND salario > ?",
      values: ["Pedro", 1000],
    });

En resumen, **`values`** permite parametrizar las condiciones en la consulta, cuando **values = []** significa que no hay filtros aplicados en la consulta **sql**.

### JSON.stringify

    <pre>{JSON.stringify(data, null, 2)}</pre>

**JSON.stringify** es una función de JavaScript que convierte un objeto en una cadena de texto en formato JSON.

- **Primer parámetro (data):** Es el objeto o valor que quieres convertir en una cadena JSON.

- **Segundo parámetro (null):** Es el replacer, que permite filtrar o transformar los valores del objeto antes de convertirlo a JSON. Si se establece en null, no se aplica ningún filtro, lo que significa que todos los valores del objeto serán incluidos tal como están.

- **Tercer parámetro (2):** Controla el espaciado o indentación en la salida del JSON. Un valor de 2 indica que cada nivel de anidación se indentará con 2 espacios, lo que hace que el JSON sea más legible.

### Expresiones de Gratitud 🎁

    Apoya el proyecto dejando una estrella 🙏
    Comenta a otros sobre este proyecto 📢
    Invita una cerveza 🍺 o un café ☕
    Paypal iamdeveloper86@gmail.com
    Da las gracias públicamente 🤓.

## No olvides SUSCRIBIRTE 👍
