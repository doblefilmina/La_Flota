
      
/*      const Animacion_contador = function (tiempo, intervalo, maximo, contenido, seccion) { 
                              
      setInterval(function() {
                              
                              Esconder( seccion )

                              document.querySelector(seccion).innerHTML = contenido
                              Mostrar( seccion )
                              console.log(i)
                              i = i + intervalo
                              console.log(i)
                              if (i > maximo) {
                                clearInterval() 
                              }
                              
        }, tiempo);
      }
  */    
      

      //FUNCIÓN PARA CREAR HTML

  //    const Maquetar = function(elemento, posicion, clases) {
      
  //    let ficha = document.createElement('div')             //crea una etiqueta div
  //        clases.forEach( clase =>{                         // función para agregar clases
  //          ficha.classList.add(`${clase}`)
  //        })
      
  //    ficha.innerHTML = `${elemento}`                       // agrego contenido a la etiqueta
  
  //    document.querySelector(`#${posicion}`).appendChild(ficha)       
 //   }
  
    //OBTENGO EL CONTENIDO HTML EN JSON
 /* 
    fetch("contenido.json")
    .then(contenido => {
      console.log(contenido)
      contenido.json() }) //toma el string en contenido.json y devuelvo un listado de objetos json
    .then(elementos => elementos.map( ({contenido, posicion, clases}) => new Elemento (contenido, posicion, clases) ) ) //colección de objetos de tipo Elementos.Elemento
    .then( elementos => { 
      elementos.forEach( elemento => {
        elemento.Maquetar()
      }) 
    })  
*/


    fetch("contenido.json").then(function(rta){
       return rta.json()

    }).then ( objetos => {
      objetos.forEach( ( {contenido, posicion, clases} ) => {
        let objeto = new Elemento (contenido, posicion, clases)
        objeto.Maquetar()
      })

    })
/*

    fetch("contenido.json").then(function(rta){
       return rta.json()
       console.log(rta.json)
    }).then (function(objetos){
      objetos.forEach(function( {contenido, posicion, clases} ){
        let objeto = new Elemento (contenido, posicion, clases)
        objeto.Maquetar()
      })
 
    })
*/

/*      Maquetar(elemento1, posicion1, clases1)

      let elemento2 = `
            <i class='fab fa-spotify col-1'></i>
            <i class='fab fa-instagram col-1'></i>
            <i class='fab fa-google-play col-1'></i>
            <i class='fab fa-amazon col-1'></i>
            <i class='fab fa-apple col-1'></i>
            <i class='fab fa-itunes-note col-1'></i>
            <i class='fab fa-youtube col-1'></i>
            <i class='fab fa-facebook-f col-1'></i>`
      let posicion2 = 'seccion-media'
      let clases2 = ['row', 'justify-content-md-center', 'align-items-center']
      Maquetar(elemento2, posicion2, clases2)

*/
 
     