# TP Final
### por Giancarlo Cristiano y Juan Pablo Pereira

[:arrow_backward: volver al index](../README.md)

1. Construir una aplicación (sin interfaz) utilizando la tecnología que deseen (ej. Node.js, PHP, Java, Python, etc) integrada con MongoDB.
2. La aplicación debería similar un pequeño eCommerce: manejo de productos y ventas. Puntualmente sería:
    - CRUD de Productos, donde cada uno tiene información como nombre, descripción, stock, precio.
    - Creación y listado de Ventas, donde cada una relaciona un conjunto de Productos, precio total y dirección de entrega.
3. La interface con el backend puede ser de una de las dos maneras:
    - RESTful APIs: Construir HTTP endpoints.
    - Vía terminal: Poder invocar a la aplicación desde línea de comandos.
4. Entrega: Repositorio de git. Incluir un readme.md con:
    - Instrucciones para levantar el ambiente,
    - Links con referencias a documentación/tutorial que siguieron,
    - Cualquier información consideren relevante.

---------------------------------------------------------------------------------------------------

Comenzamos creando una BBDD llamada "ecommerce"

   ```js
   > use ecommerce
   ```
Luego procedemos a crear las colecciones de productos y ventas.

   ```js
   > db.createCollection("products")
   > db.createCollection("sales")
   ```
Para comenzar con el posterior testing, insertamos desde mongo algunos productos.

   ```js
   > db.products.insert([
   { name: "Logitech Keyboard", description: "TBC", stock: 40, price: 2000 },
   { name: "Cannon Camera", description: "TBC", stock: 8, price: 20000 },
   { name: "Xbox One Gamepad", description: "TBC", stock: 150, price: 10500 },
   { name: "Shure Microphone", description: "TBC", stock: 32, price: 6000 },
   { name: "MSI Mouse", description: "TBC", stock: 62, price: 3000 }
   ])
   ```

Una vez que tuvimos la base con info cargada, procedemos a abrir la consola en la carpeta raíz del trabajo e instalamos las dependencias para trabajar con **node.js**
Vamos a utilizar **mongoose** para conectar node con mongoDB, **express** para crear la api y **nodemon** para reiniciar automáticamente el servidor ante cada cambio.

   ```js
   npm i mongoose
   npm i express
   npm i -g nodemon
   ```
