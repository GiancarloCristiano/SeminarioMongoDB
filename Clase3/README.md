# Actividad Clase 3

[:arrow_backward: volver al index](../README.md)

1. Utilizar la misma base de datos de películas e insertar varias
películas con distinto contenido.

   ```js
    > db.movies.insert([
    { title: "Joker", year: 2019, rating: 5.0, genre: "Drama", description: "TBC", actors: [ "Joaquim Phoenix", "Robert De Niro", "Zazie Beetz" ], country: "US", income:  1074000000, duration: 1 },
    { title: "Midsommar", year: 2019, rating: 4.7, genre: "Terror", description: "TBC", actors: [ "Florence Pugh", "Jack Reynor", "Will Poulter" ], country: "US", income:  42000000, duration: 1 },
    { title: "Parasite", year: 2019, rating: 4.9, genre: "Drama", description: "TBC", actors: [ "Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong" ], country: "South Korea", income: 254000000, duration: 1 },
    { title: "Slumdog Millionaire", year: 2008, rating: 4.4, genre: "Drama", description: "TBC", actors: [ "Dev Patel", "Freida Pinto", "Anil Kapoor" ], country: "England", income:  377000000, duration: 1 },
    { title: "Life is beautiful", year: 1997, rating: 5.0, genre: "Drama", description: "TBC", actors: [ "Roberto Benigni", "Nicoletta Braschi", "Giorgio Cantarini" ], country: "Italy", income: 229000000 , duration: 1 },
    { title: "Waiting for the carriage", year: 1985, rating: 3.6, genre: "Comedy", description: "TBC", actors: [ "Luis Brandoni", "China Zorrilla", "Antonio Gasalla" ], country: "Argentina", income:  900000, duration: 1 },
    { title: "That damn rib", year: 1999, rating: 3.8, genre: "Comedy", description: "TBC", actors: [ "Susana Gimenez", "Luis Brandoni", "Rossy de Palma" ], country: "Argentina", income: 5000000 , duration: 1 },
    { title: "Coco", year: 2017, rating: 4.7, genre: "Animation", description: "TBC", actors: [ "Anthony Gonzalez", "Gael García Bernal", "Benjamin Bratt" ], country: "US", income:  807000000, duration: 1 },
    { title: "Mortal Kombat", year: 1995, rating: 4.2, genre: "Action", description: "TBC", actors: [ "Robin Shou", "Cary-Hiroyuki Tagawa", "Christopher Lambert" ], country: "US", income:  122000000, duration: 1 },
    { title: "Amélie", year: 2001, rating: 4.0, genre: "Comedy", description: "TBC", actors: [ "Audrey Tautou", "Mathieu Kassovitz", "Rufus" ], country: "France", income: 173000000 , duration: 1 },
    { title: "Avengers: Endgame", year: 2019, rating: 5.0, genre: "Action", description: "TBC", actors: [ "Robert Downey Jr.", "Chris Evans", "Mark Ruffalo" ], country: "US", income: 2800000000 , duration: 1 },
    { title: "White chicks", year: 2004, rating: 3.9, genre: "Comedy", description: "TBC", actors: [ "Shawn Wayans", "Marlon Wayans", "Terry Crews" ], country: "US", income:  113000000, duration: 1 }
    ])
   ```

2. Listar todas las películas del año 2018.

    ```js
    > db.movies.find ({ year: 2018 }) //no tengo ninguna de este año. Si probé con 2019 y lista muchas.
    ```

3. Listar las 10 primeras películas de Hollywood.

    ```js
    > db.movies.find ({ country: "US" }).limit(10).sort({ rating: -1 }) //considero que todas las de US son de Hollywood y las ordeno por rating desc.

    ```

4. Listar las 5 películas más taquilleras.

    ```js
    > db.movies.find().limit(5).sort({ income: -1 })
    ```

5. Listar el 2do conjunto de 5 películas más taquilleras.

    ```js
    > db.movies.find().skip(5).limit(5).sort({ income: -1 })
    ```

6. Repetir query 3 y 4 pero retornando sólo el título y genre.

    ```js
    > db.movies.find (
        { country: "US"},
        {title: 1, genre: 1, _id: 0}
        ).limit(10).sort({ rating: -1 })  

    > db.movies.find (
        {}, {title: 1, genre: 1, _id: 0}
        ).limit(5).sort({ income: -1 })
    ```

7. Mostrar los distintos países que existen en la base de datos.

    ```js
    > db.movies.distinct("country")
    ```