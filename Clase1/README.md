# Actividad Clase 1

[:arrow_backward: volver al index](../README.md)

1. Instalar MongoDB en ambiente local.
2. Conectarse a MongoDB vía CLI.

    ```js
    $ mongod
    $ mongo
    ```

3. Crear una nueva base de datos llamada futbolfifa.

    ```js
    > use futbolfifa
    ```

4. Crear una nueva collection llamada players.

    ```js
    > db.createCollection("players")
    ```

5. Insertar 5 documentos en la collection players con datos básicos.
    (nombre, apellido, posición, fecha de nacimiento, etc).

    ```js
    > db.players.insert([
    { name: "Cristiano Ronaldo", surname: "dos Santos Aveiro", position: "FW", birthdate: "05/02/1985", foot: "R", country: "Portugal" },
    { name: "Lionel", surname: "Messi", position: "FW", birthdate: "24-06-1987", foot: "L", country: "Argentina" },
    { name: "Virgil", surname: "van Dijk", position: "DF", birthdate: "08-07-1991", foot: "R", country: "Netherlands" },
    { name: "Manuel", surname: "Neuer", position: "GK", birthdate: "27-03-1986", foot: "L", country: "Germany" },
    { name: "Kevin", surname: "De Bruyne", position: "MF", birthdate: "28-06-1991", foot: "R", country: "Belgium" 
    }])
    ```

6. Listar todos los documentos de la collection players.

    ```js
    > db.players.find()
    ```

7. Crear otras collections con documentos (ej. teams, games, etc).

    ```js
    > db.leagues.insert([
    { name: "Premier League", country: "England" },
    { name: "La Liga", country: "Spain" },
    { name: "Lega Calcio", country: "Italy" },
    { name: "BundesLiga", country: "Germany" },
    { name: "Ligue1", country: "France"},
    { name: "Liga Sagres", country: "Portugal"}
    ])

    > db.clubs.insert([
    { name: "Real Madrid", country: "Spain" },
    { name: "Manchester United", country: "England" },
    { name: "Juventus", country: "Italy" },
    { name: "Bayern Munchen", country: "Germany" },
    { name: "Ajax", country: "Netherlands"},
    { name: "PSG", country: "France" }
    ])
    ```

Comentarios:
    Por ahora hice de prueba las fechas de nacimiento con String.
    Me costó bastante podes hacerlo andar, primero no me tomaba Mongo, tuve q agregar el path en Windows, luego no podía copiar los JSON para no tipear todo (lo resolví con Cmder ya que  cmd y gitbash me trajeron diferentes problemas). Una vez que pude cargar mi primer json, ahí no tuve más problemas hasta ahora.

[:arrow_double_up: top](#README.md)