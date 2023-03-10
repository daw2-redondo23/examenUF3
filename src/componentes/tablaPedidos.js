import { cervezas } from "../bd"

export const tablaPedidos = {
    template: `<div class="row shadow border pt-5 ps-3 pb-5 pe-3">
                    <div class="col-12">
                        <h3>Esto es lo que te has tomado ya ...</h3>
                        <table class="table">
                            <thead>
                            <tr>
                                <th scope="col">Cerveza</th>
                                <th scope="col">Cantidad</th>
                                <th></th>     
                                <th></th>     
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            `,
script: ()=>{
    var select = document.getElementById('selectBirra');
    var value = select.options[select.selectedIndex].value -1
    
    let cantidad = document.querySelector('#cantidad').value
    let tr = document.createElement('tr')
    tr.innerHTML = `
                    <td>`+ cervezas[value].nombre +`</td>
                    <td>`+ cantidad +`</td>
                    <td><button class="btn btn-danger">Eliminar</button></td>
                    <td><button class="btn btn-warning">Editar Perfil</button></td>  
                `
    document.querySelector('tbody').appendChild(tr)

}
}