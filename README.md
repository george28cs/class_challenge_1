# Ejercicio 1: Programación orientada a objetos  

## Clase Autor  
Se construye en el archivo *Author.js*  
Esta clase cuenta con las propiedades *id, nombre, universidad, email, calificación máxima, cantidad de publicaciones, y promedio de calificación del autor*.
Estas propiedades son privadas por lo que no se se puede acceder externamente a ellas.  
Para verificar la calificación se cuenta con el método (de acceso público) *verificar calificación* **checkRate()** y el método para calcular promedio **calcAverage()**
(Tengo dudas con el método verificar calificación, ya que no sé si se refiere a la calificación máxima o verificar la calificación de una instancia de **Contribución**). 
En caso de ser así, debería agregar un nuevo método a la clase contribución para que me proporcione acceso a la propiedad *calificación*.  
Estoy usando *var* dentro del constructor de la clase para que se hagan privadas (ya que por defecto JS no maneja metodos y propiedades privados).  


## Clase Contribución
Se construye en el archivo *Contribution.js*  
Esta clase cuenta con los atributos privados *id, título, idAutor y calificación*. Además contiene el método actualizar autor **setAuthor()** el cual actualiza el id (y 
por consiguiente todo los elementos de dicho autor seleccionado) de la contribución mediante la asignación de un nuevo *id* **setAuthor(id)**.  
  
*Extra* Se puede consultar el id del autor de la publicación actual mediante el método **getIdAuthor()**

## Clase Ponencia - Clase Padre Contribution
Se construye en el archivo *Presentation.js*  
Clase hijo de la clase Ponencia.  
Hereda las propiedades *id, título, idAutor y calificación* y método *actualizarAutor()* de la clase *Contribución*.  
Crea 2 nuevas propiedades privadas *fechaPublicación y ejeTemático*.
  
 ## Clase Taller - Clase Padre Contribution
Se construye en el archivo *Workshop.js*  
Clase hijo de la clase Ponencia.  
Hereda las propiedades *id, título, idAutor y calificación* y método *actualizarAutor()* de la clase *Contribución*.  
Crea 2 nuevas propiedades privadas *capacidadMaxima y duración*.

## Archivo de entrada
Se encuentra en el archivo *index.js*
Se importan las clases Autor, Contribución, Ponencia y Contribución y se contruyen las instancias de cada clase.
