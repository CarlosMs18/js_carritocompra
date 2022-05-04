import {carritoBody} from '../helpers/selectors.js'

class UI{
    constructor(){}

    pintarHTML(cursos){
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
    }
}



const ui = new UI()


export default ui