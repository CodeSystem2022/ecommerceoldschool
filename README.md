# Bienvenidos al proyecto final de OLD SCHOOL STORE UTN-SAN RAFAEL-2023

## Descripción del Proyecto

Old School Store es un ecommerce de dispositivos móviles que ofrece productos de las marcas iPhone, Samsung y Motorola. La aplicación web está construida utilizando tecnologías web estándar como HTML, JavaScript y CSS en el frontend, mientras que el backend se implementa con Node.js y SQLite como base de datos. Además, se utiliza la librería bcrypt para el manejo seguro de contraseñas y express para la creación del servidor.

## Instalación

Para ejecutar el proyecto, primero debes asegurarte de tener Node.js y npm instalados en tu máquina. Luego, sigue estos pasos:

1. **Clona el repositorio de GitHub:**

   ```bash
   git clone https://github.com/tu_usuario/ecommerceoldschool.git
# Instrucciones de Instalación

3. **Ingresa al directorio del proyecto:**
    ```bash
    cd ecommerceoldschool
    ```

3. **Instala las dependencias:**
    ```bash
    npm install
    ```

# Dependencias

## Librerías de Producción
- **bcrypt (^5.1.1):** Librería para el hashing seguro de contraseñas.
- **express (^4.18.2):** Framework web para Node.js que facilita la creación de aplicaciones y API.
- **sqlite3 (^5.1.6):** Driver para SQLite, una base de datos relacional incorporada.

## Librerías de Desarrollo
- **nodemon (^3.0.1):** Herramienta que reinicia automáticamente la aplicación Node.js cuando se detectan cambios en el código.

# Estructura del Proyecto

## Frontend (HTML, CSS, JavaScript)
- **index.html:** Página principal que muestra los productos disponibles.
- **carrito.html:** Página que muestra los productos agregados al carrito de compras.
- **login.html:** Página de inicio de sesión.
- **css/main.css:** Archivo de estilos principal.
- **js/main.js:** Lógica principal para la visualización de productos.
- **js/carrito.js:** Lógica para el manejo del carrito de compras.
- **js/menu.js:** Lógica para el manejo del menú lateral.

## Backend (Node.js)
- **server.js:** Archivo principal del servidor que gestiona las rutas y la conexión con la base de datos.

## Base de Datos
- **tu_basedatos.db:** Archivo de base de datos SQLite que almacena la información de los usuarios registrados.

# Uso

Inicia la aplicación con el siguiente comando:

```bash
npm run dev
o
node server.js

# Uso

Abre tu navegador y accede a [http://localhost:5000](http://localhost:5000) para comenzar a explorar el ecommerce.

## Notas Importantes

- Este proyecto utiliza SQLite para simplificar la configuración, pero en un entorno de producción se recomienda migrar a una base de datos más robusta.
- Se ha implementado el hashing seguro de contraseñas para garantizar la seguridad de los usuarios.





# Gracias por ser parte de Old School!!!


