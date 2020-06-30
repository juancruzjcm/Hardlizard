const fs = require('fs');

let masVotadas = {
    bh: './data/movies.json',
    titulo:'MAS VOTADAS',
    leerJSON: function(){
        let moviesJson = fs.readFileSync(this.bh, 'utf-8');
        let movies = JSON.parse(moviesJson);
        return movies;
    },

    //CANTIDAD DE PELICULAS

    cantidad: function(){
        peliculas = this.leerJSON();
        masVotadas = peliculas.movies.filter(function(movie){
            return movie.vote_average>=7;
        })
        return masVotadas.length;
    },

    //LISTA DE PELICULAS

    listarPelis:function(){
        peliculas = this.leerJSON();
        masVotadas = peliculas.movies.filter(function(movie){
            return movie.vote_average >= 7;
        })
        return masVotadas;
    }
}

module.exports = masVotadas;