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

Comenzamos creando una BBDD llamada **ecommerce**

   ```js
   > use ecommerce
   ```
Luego procedemos a crear las colecciones de *productos* y *ventas*.

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
Vamos a utilizar [**mongoose**](https://mongoosejs.com/) para conectar node con mongoDB, [**express**](https://expressjs.com/es/) para crear la api y [**nodemon**](https://nodemon.io/) para reiniciar automáticamente el servidor ante cada cambio.

   ```js
   npm i mongoose
   npm i express
   npm i -g nodemon
   ```

Luego de instalar y configurar las mismas, construímos nuestro [index.js](./index.js) con el CRUD basándonos principalmente en [este tutorial de Digital Ocean](https://www.digitalocean.com/community/tutorials/nodejs-crud-operations-mongoose-mongodb-atlas)

Cabe destacar que fuimos consultando otras webs como [este otro tuto en CodeforGeek](https://codeforgeek.com/handle-get-post-request-express-4/) y [este en StackAbuse](https://stackabuse.com/get-http-post-body-in-express-js/)
Mientras construímos el CRUD, también instalamos **body-parser** debido a que no estábamos logrando traer el cuerpo del request en los post y put que estábamos haciendo en **Postman**

   ```js
   npm i --S express body-parser
   ```

Al haberlo solucionado, notamos que nos agregaba un atributo "__v" con valor 0. Para quitarlo consultamos en [StackOverFlow](https://stackoverflow.com/questions/12495891/what-is-the-v-field-in-mongoose) para que los insert queden idénticos a si lo hiciéramos desde mongo.

Una vez que tuvimos listo el CRUD de productos, hicimos el get de ventas y al hacer el post, incorporamos algo más de lógica, buscando el producto por ID para decrementar el stock y calculando automáticamente el precio total. (Consultarlo desde [index.js](./index.js)).

Al finalizar la API, generamos la BBDD en [la nube](https://cloud.mongodb.com/v2#/org/5fbc3cfaab2266278b371d60/projects), reemplazando el link de la conexión de mongoose.
Al cambiar los ID, volvimos a editar los campos en **Postman** por lo que dejamos la [documentación final](https://documenter.getpostman.com/view/9582717/TVewYPpV)
Además, intentamos sin éxito cargarlo en [herokuapp](https://dashboard.heroku.com/apps/seminario-mongo/deploy/github). Debido a esto, dejamos las instrucciones para levantarlo.

------------------------------

### Instrucciones para levantar el ambiente:
1. Bajar el repo
2. En la carpeta raíz abrir consola y ejecutar "npm i" o "npm install" para descargar todas las dependencias
3. Insertar el comando nodemon index.js
4. Una vez levantado, se puede navegar en el puerto 3000