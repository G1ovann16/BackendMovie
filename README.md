
## Comenzando 🚀

_En el presente proyecto se creará una base de datos con tres módulos , los cuales serian MOVIE, AUTHOR y CINE. Esttos módulos estarán relacionados y cada uno brindará la información necesaria requerida por el usuario._

Mira **Deployment** para conocer como desplegar el proyecto.


### Pre-requisitos 📋

_-Se necesitaría un dispositivo conectado a internet y que contenga una preferiblemente mayor o igual a 4GB_

### Código a destacar
``` 
  Author.bulkCreate(times(20, () =>({
        name: `${faker.name.firstName()}`,
        lastName: `${faker.name.lastName()}`,
        movie: `${faker.name.title()}`,
        IdMovie: random(1, 100)
    })))      
``` 
_En este pequeño código se crearará una base dedatos con elementos ficticios con el obejtivo de desarrollarla y que el usuario comprenda que está correctamente confeccionada la misma. Posterior a este codigo se elimina para que la base de datos mantenga los valores inicialmente generados._


### Instalación 🔧

_No requiere de instalacion ya que posteriormente se vinculara con una parte de frontend por el cual el usuario sera capaz de visualizar su búsqueda. Aunque si es bueno destacar que con la dosiponibilidad de algún programa como POSTMAN sería posible consultar los datos de una manera muy sencilla._

### Y las pruebas de estilo de codificación ⌨️

_Simplemnete se procedio a usar los diversos filtros y que sea capaz de relacionar los modulos que sean relacionables. buscando una posibilidad de error se extendió a comprobar los resultados de los módulos que no estuviesen relacionados, produciendo una respuesta nefasta_


## Construido con 🛠️


* [JS] - Diversos ficheros, donde se consulta, creación de tablas y/o sincronización   
* [POSTMAN] - Chequear la correcta funcionalidad de los filtros
* [DB BROWSER SQLITE] - Gestionar la bae de datos e introducir datos manualmente 
## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://gist.github.com/G1ovann16/BackendMovies) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.


## Autores ✒️

* **Giovanni Landaburo Del Arco** - *Trabajo Inicial* - [glandaburo](https://github.com/G1ovann16)
