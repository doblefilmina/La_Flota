class Elemento {
    constructor(c, p, cl) {
        this.contenido = c
        this.posicion = p
        this.clases = cl
    }


Maquetar() {
      
    let ficha = document.createElement("div")             //crea una etiqueta div
        this.clases.forEach( clase => {                         // función para agregar clases
          ficha.classList.add(`${clase}`)
        })
    
    ficha.innerHTML = `${this.contenido}`                       // agrego contenido a la etiqueta

    document.querySelector(`#${this.posicion}`).appendChild(ficha)       
  }

 

}