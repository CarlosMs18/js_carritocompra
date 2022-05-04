import {listaCursos} from '../helpers/selectors.js'
import shop from '../classes/carrito.js'
import ui from '../classes/UI.js'

export function eventListener(){
    listaCursos.addEventListener('click',agregarCarrito)
}


function agregarCarrito(e){
    e.preventDefault()  
    if(e.target.classList.contains('agregar-carrito')){
        const element = e.target.parentElement.parentElement
        leerCurso(element)
    }
}

function leerCurso(element){
   
        const id = element.querySelector('a').getAttribute('data-id')
        const imagen = element.querySelector('img').src
        const name = element.querySelector('h4').textContent
        const precio = element.querySelector('p span').textContent
        const cantidad = 1
      
      
    
        const objCurso = {
            id,
            imagen,
            name,
            precio,
            cantidad
         
        }

        nuevoCurso(objCurso)
}

function nuevoCurso(curso){

    shop.agregarShop(curso)

    const {lista} = shop

    ui.pintarHTML(lista)

}


