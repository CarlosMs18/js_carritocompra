import {carritoBody} from '../helpers/selectors.js'
import shop from './carrito.js'
class UI{
    constructor(){}

    pintarHTML(cursos){
        this.limpiarHTML()
        cursos.forEach(curso => {
         
            const {id, imagen, name, cantidad,precio} = curso
            carritoBody.innerHTML += `
            <tr>
            <td>
            <img src = ${imagen} width="100" >
        </td>
        <td>${name} </td>
        <td>${precio} </td>
        <td> ${cantidad} </td>  

        <td>
        <a href="#" class="borrar-curso" data-id="${id}"> X  </a>
        </td>
            </tr>
            `
        })

        shop.guardarLocalStorage()
    }


    limpiarHTML(){
        while(carritoBody.firstChild){
         
            carritoBody.removeChild(carritoBody.firstChild)
        }
    }
}



const ui = new UI()


export default ui