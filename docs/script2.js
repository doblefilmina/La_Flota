let ubicacion = '#estadisticas-canciones'
debugger
      const ficha = document.querySelector(ubicacion)
      console.log(ficha)

      const Esconder = function( ubicacion ) {
        const ficha = document.querySelector(ubicacion)
        ficha.classList.remove('d-block')
        ficha.classList.add('d-none')
      }

      const Mostrar = function ( ubicacion ) {
      
      let ficha = document.querySelector(ubicacion)             
        ficha.classList.remove('d-none')
        ficha.classList.add('d-block')
      } 

      let j = 0
      let seccion = '#estadisticas-canciones'  
      let contenido = '<p class="estadisticas-grande text-center m-0 p-0"> ${j} +</p> <p class="estadisticas-chico text-center p-0"> Canciones subidas </p>'
      let intervalo = 10
      let tiempo = 10
      let maximo = 6500
      

const Animacion_contador = function(j, tiempo, intervalo, maximo, seccion){ 
        const iteracion = setInterval(function() {
                                    
                                    Esconder( seccion )

                                    document.querySelector(seccion).innerHTML = `<p class="estadisticas-grande text-center m-0 p-0"> ${j} +</p> <p class="estadisticas-chico text-center p-0"> Canciones subidas </p>`
                                    Mostrar( seccion )
                    
                                    j = j + intervalo
                                    
                                    

                                    if (j > maximo) {
                                        console.log(j)
                                        clearInterval(iteracion) 
                                    }
                                    
                }, tiempo);
    }

    j = 0
    seccion = '#estadisticas-albumes' 
    contenido = '<p class="estadisticas-grande text-center m-0 p-0"> ${j} +</p> <p class="estadisticas-chico text-center p-0"> Canciones subidas </p>'
    intervalo = 10
    tiempo = 20
    maximo = 1400
    Animacion_contador(j, tiempo, intervalo, maximo, seccion)

    j = 0
    seccion = '#estadisticas-canciones'  
    contenido = '<p class="estadisticas-grande text-center m-0 p-0"> ${j} +</p> <p class="estadisticas-chico text-center p-0"> Canciones subidas </p>'
    intervalo = 10
    tiempo = 10
    maximo = 6500
    Animacion_contador(j, tiempo, intervalo, maximo, seccion)

    j = 0
    seccion = '#estadisticas-artistas'  
    contenido = '<p class="estadisticas-grande text-center m-0 p-0"> ${j} +</p> <p class="estadisticas-chico text-center p-0"> Canciones subidas </p>'
    intervalo = 10
    tiempo = 100
    maximo = 500
    Animacion_contador(j, tiempo, intervalo, maximo, seccion)

    j = 0
    seccion = '#estadisticas-plataformas'  
    contenido = '<p class="estadisticas-grande text-center m-0 p-0"> ${j} +</p> <p class="estadisticas-chico text-center p-0"> Canciones subidas </p>'
    intervalo = 1
    tiempo = 50
    maximo = 50
    Animacion_contador(j, tiempo, intervalo, maximo, seccion)
