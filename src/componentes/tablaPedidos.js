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
    let nombre = document.querySelector('#nombre').value
    let numMesa = document.querySelector('#numeroMesa').value
    let cantidad = document.querySelector('#cantidad').value


    let item = document.getElementById("pedido");
    let condicion = item.classList.contains( 'btn-warning');
    if(condicion == false){
        
        
        let tr = document.createElement('tr')
        tr.setAttribute("id", nombre)
        tr.innerHTML = `
                        <td id="`+ nombre +`-nomb">`+ cervezas[value].nombre +`</td>
                        <td id="`+ nombre +`-cant">`+ cantidad +`</td>
                        <td><button class="btn btn-danger" id="eliminar"  data-id="`+ nombre + `">Eliminar</button></td>
                        <td><button class="btn btn-warning" id="editar" data-id="`+ value + `" data-cantidad="`+ cantidad +`" data-nombre="`+ nombre +`" data-mesa="`+ numMesa +`">Editar Pedido</button></td>  
                    `
        document.querySelector('tbody').appendChild(tr)
    }
    
        let btnEditar = document.querySelectorAll('#editar')

        let btnEliminar  = document.querySelectorAll('#eliminar');
        
        for (let i = 0; i < btnEliminar.length; i++) {
            btnEliminar[i].addEventListener("click", (event)=>{
                let id = event.target.getAttribute("data-id")
                document.getElementById(id).className = 'fila-oculta'
            })
        
        }


        for (let i = 0; i < btnEditar.length; i++) {
            btnEditar[i].addEventListener("click", (event)=>{
               
                let id = event.target.getAttribute("data-id")
                let cant = event.target.getAttribute("data-cantidad")
                let nombreData = event.target.getAttribute("data-nombre")
                let numData = event.target.getAttribute("data-mesa")

                document.querySelector('#nombre').value = nombreData
                document.querySelector('#numeroMesa').value = numData
                document.querySelector('#selectBirra').selectedIndex = id
                document.querySelector('#cantidad').value = cant
                document.querySelector('#pedido').innerHTML = "Editar pedido"
                document.querySelector('#pedido').classList = "btn btn-warning ps-5 pe-5"
                
            })
    }
}

}