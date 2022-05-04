import {listaCursos , listaCarrito, btnVaciar} from '../helpers/selectors.js'
import shop from '../classes/carrito.js'
import ui from '../classes/UI.js'

export function eventListener(){
    document.addEventListener('DOMContentLoaded', recargarCursos)
    listaCursos.addEventListener('click',agregarCarrito)
    listaCarrito.addEventListener('click',eliminarProducto)
    btnVaciar.addEventListener('click',vaciarCarrito)
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


function eliminarProducto(e){
    if(e.target.classList.contains('borrar-curso')){
        const idCurso  = e.target.getAttribute('data-id')
        shop.eliminarCurso(idCurso)
        const {lista} = shop
        ui.pintarHTML(lista)
    }
}


function vaciarCarrito(){
    shop.vaciarProductos()
    const {lista} = shop
    ui.pintarHTML(lista)
}

function recargarCursos(){
    const {lista} = shop
    ui.pintarHTML(lista)
}


