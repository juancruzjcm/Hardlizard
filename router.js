const index = require("./src/index");

let router = function(url,res){

    switch(url){
        case '/':
            index.homePage(res);
            break;
        
        case '/contacto':
        index.contacto(res);           
            break;

        case '/cartelera':
            index.enCartelera(res);
            break;
        
        case '/home-page':
            index.homePage(res);
            break;

        case '/mas-votadas':
            index.masVotadas(res);
            break;

        case '/preguntas-frecuentes':
            index.preguntasFrecuntes(res);
            break;

        case '/sucursales':
            index.sucursales(res);
            break;

        default:
            res.end('ERROR 404')
            
    }

}
module.exports =  router;