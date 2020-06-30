const homePage = require('./homePage');
let contacto = require('./contacto');
let sucursales = require('./sucursales');
let masVotadas = require('./masVotadas');
let preguntasFrecuentes = require ('./preguntasFrecunetes');
let enCartelera = require ('./enCartelera');



let index = {

    homePage:function(res){

        res.write(homePage.titulo);
        res.write(`\n\n`)
        res.write('Total: ' + homePage.cantidad());
        res.write('\n\n');
        let titulos = homePage.listarPelis();
        for(titulo of titulos){
            res.write(`      ${titulo}` );
            res.write(`\n`);
        }
        res.end();
        
    },

    contacto:function(res){
        res.write(contacto.titulo +'\n\n');
        res.write(contacto.contenido);
        res.end();

    },

    enCartelera:function(res){
        //titulo
        res.write(enCartelera.titulo + '\n\n');
        //cantidad de pelicualas
        
        res.write('total ' + enCartelera.cantidad());
        res.write('listado de peliculas ')
        let listar = enCartelera.listarPelis()
        listar.forEach(function(lista){
            res.write(` titulo: ${lista.title} \n Reseña: ${lista.overview} \n` )
            
        })
        
        res.end();

    },
    //MAS VOTADAS
    masVotadas:function(res){

        res.write('\n\n');
        res.write(masVotadas.titulo + '\n');
        res.write('\n\n');
        res.write(`TOTAL DE PELICULAS: ${masVotadas.cantidad()} `);
        
        res.write('\n\n');

        res.write('RATING: \n\n');

        let ListaVotadas= masVotadas.listarPelis();
        ListaVotadas.forEach(function(pelicula){
           res.write(` --${pelicula.vote_average}--`)
           })

           let pelis = masVotadas.listarPelis();
           res.write('\n');
           res.write('\n');
           res.write('Mas votadas: ');
           for(peli of pelis){
               res.write(`
               Titulo: ${peli.title}
               Rating: ${peli.vota_average}
               Reseña: ${peli.overview}
               `)
           }
         
        
        res.end()

    },

    preguntasFrecuntes: function(res){

        res.write(`  
        ${preguntasFrecuentes.titulo}
       
        TOTAL DE PREGUNTAS : ${preguntasFrecuentes.cantidad()}     
         
        ` )
        let cuestionario = preguntasFrecuentes.listarPreguntas();
       cuestionario.forEach(function(quest){
  
       res.write(`   ${quest.faq_title}
                    ${quest.faq_answer}    
       ` )
  
  
  
     })
        res.end();

    },

    sucursales: function(res){
        res.write('\n\n');
        res.write(sucursales.titulo);
        res.write('\n\n');
        res.write('Total de salas: ' + sucursales.cantidad());

        res.write(' Lista de salas: ' );
        let listarTeatros = sucursales.listarTeatros();
        listarTeatros.forEach((teatro)=>{
            res.write(`
            Nombre: ${teatro.name}
            Direccion: ${teatro.address}
            Descripcion: ${teatro.description}
            `)
        })
        res.end();

    }
}
module.exports = index;