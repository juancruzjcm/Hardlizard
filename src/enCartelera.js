// requiero modulo nativo fs
const fs = require('fs');
const  title = require('process');

//creo una const con objetos y la funcion leerJSON
const enCartelera = {
    bd: './data/movies.json',
    titulo: 'EN CARTELERA',
    leerJSON: function(){
        //creo fs.readFilSync
        let moviesJson = fs.readFileSync(this.bd, 'utf-8');
        //parseo json con la variable JSON.parse()
        let movies = JSON.parse(moviesJson);
        //retorno Pelicula
        return movies;
    },


    //creo una funcion de cantidad 
    cantidad:function(){
        return this.leerJSON().total_movies
    },
    
    listarPelis:function(){
        let peliculas = this.leerJSON();
        let pelis = []
        peliculas.movies.forEach(function(movie) {
            pelis.push(movie)
                        
        })
        return pelis;
}}
module.exports = enCartelera;