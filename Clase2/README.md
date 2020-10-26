# Actividad Clase 2

[:arrow_backward: volver al index](../README.md)

1. Crear una nueva base de datos de un sistema de streaming de video (ej. Netflix, Flow, Amazon Prime) que permita almacenar movies.

    ```js
    > use movix
    > db.createCollection("movies")
    ```

2. Para cada movie, se debería guardar información como título (String), year (Number), rating (Number, entre 1.0 y 5.0), genre (String), description (String), actors (Array\<String\>), country (String), income (Number), duration (Number).
3. Agregar películas usando insert(), insertOne() & insertMany().

    ```js
    > db.movies.insert([
    { title: "Dexter", year: 2006, rating: 4.8, genre: "Crime drama", description: "TBC", actors: [ "Michael C. Hall", "Julie Benz", "Jennifer Carpenter" ], country: "US", income: 10000000 , duration: 96 },
    { title: "Breaking Bad", year: 2008, rating: 5.0, genre: "Crime drama", description: "TBC", actors: [ "Bryan Cranston", "Anna Gunn", "Aaron Paul" ], country: "US", income: 99999999 , duration: 62 },
    { title: "Money Heist", year: 2017, rating: 4.2, genre: "Crime drama", description: "TBC", actors: [ "Úrsula Corberó", "Álvaro Morte", "Itziar Ituño" ], country: "Spain", income: 50000000 , duration: 31 },
    { title: "The Pretenders", year: 2002, rating: 3.8, genre: "Comedy drama", description: "TBC", actors: [ "Federico D'Elía", "Alejandro Fiore", "Diego Peretti", "Martin Seefeld" ], country: "Argentina", income: 3000000 , duration: 24 }
    ])

    > db.movies.insertOne(
    { title: "The Simpsons", year: 1989, rating: 4.4, genre: "Animated sitcom", description: "TBC", actors: [ "Dan Castellaneta", "Julie Kavner", "Nancy Cartwright" ], country: "US", income: 1000000000 , duration: 687 })

    > db.movies.insertMany([
    { title: "Stranger Things", year: 2016, rating: 4.1, genre: "Science fiction", description: "TBC", actors: [ "Winona Ryder", "David Harbour", "Finn Wolfhard" ], country: "US", income: 5000000 , duration: 25 },
    { title: "Merlí", year: 2015, rating: 3.7, genre: "Comedy drama", description: "TBC", actors: [ "Francesc Orella", "Pere Ponce", "Pau Durà" ], country: "Spain", income: 999999 , duration: 40 }
    ])
    ```

4. Actualizar películas agregando el field highlighted = true a aquellas con rating > 4.5.

    ```js
    > db.movies.updateMany (
        { rating: {$gt: 4.5} },
        { $set : {highlighted: true} }
    )
    ```

5. Actualizar películas cambiando el genre “drama” por “bored”.

    ```js
    > db.movies.updateMany (
        { genre: "Drama" },
        { $set: { genre: "Bored"} }
    )
    ```

6. Borrar todas las películas que tengan más de 30 años.

    ```js
    > db.movies.deleteMany(
        { year: {$lt: new Date().getFullYear() - 30} } //también funcionaba 2020-30
        )
    ```

7. Buscar todas las películas argentinas.

    ```js
    > db.movies.find({country: "Argentina"})
    ```

8. Buscar todas las películas de acción con un buen rating (ej. > 4.0)
que hayan salido los últimos 2 años.

    ```js
    > db.movies.find ({
        genre: "Action",
        rating: {$gt: 4.0},
        year: {$gt: new Date().getFullYear() - 2}
    })
    ```