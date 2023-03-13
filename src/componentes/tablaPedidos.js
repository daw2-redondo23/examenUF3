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
    //selecciono valores y los guardo en variables
    var select = document.getElementById('selectBirra');
    var value = select.options[select.selectedIndex].value -1

    let nombre = document.querySelector('#nombre').value
    let numMesa = document.querySelector('#numeroMesa').value
    let cantidad = document.querySelector('#cantidad').value


    let item = document.getElementById("pedido");
    let condicion = item.classList.contains( 'btn-warning'); //compruebo si el boton de añadir pedido contiene la clase btn-warning 
    if(condicion == false){ // si no la tiene significa que estamos añadiendo un pedido 
        
        
        let tr = document.createElement('tr') //creamos el elemento tr 
        let numRandom = Math.random();
        tr.setAttribute("id", numRandom) //le añadimos un atributo id a el tr
        //genero los td que iran dentro del tr que heos creado, los botones tienen diferentes atributos data que usare despues
        tr.innerHTML = `
                        <td id="`+ numRandom +`-nomb">`+ cervezas[value].nombre +`</td>
                        <td id="`+ numRandom +`-cant">`+ cantidad +`</td>
                        <td><button class="btn btn-danger" id="eliminar"  data-id="`+ numRandom + `">Eliminar</button></td>
                        <td><button class="btn btn-warning" id="editar" data-id="`+ numRandom + `" data-value="`+ value +`" data-cantidad="`+ cantidad +`" data-nombre="`+ nombre +`" data-mesa="`+ numMesa +`">Editar Pedido</button></td>  
                    `
        document.querySelector('tbody').appendChild(tr) //inyecto en el tbody de la tabla el tr
    }
    
        let btnEditar = document.querySelectorAll('#editar') 

        let btnEliminar  = document.querySelectorAll('#eliminar');
        
        for (let i = 0; i < btnEliminar.length; i++) { //dectecto el evento en el boton eliminar y añado a la fila la clase fila-oculta que añade un display none para ocultar la fila
            btnEliminar[i].addEventListener("click", (event)=>{
                let id = event.target.getAttribute("data-id")
                document.getElementById(id).className = 'fila-oculta'
            })
        
        }


        for (let i = 0; i < btnEditar.length; i++) { //detecto el evento en el boton editar
            btnEditar[i].addEventListener("click", (event)=>{
               //recojo los valores de los data
                let id = event.target.getAttribute("data-id")
                let cant = event.target.getAttribute("data-cantidad")
                let nombreData = event.target.getAttribute("data-nombre")
                let numData = event.target.getAttribute("data-mesa")
                let valorSelect = event.target.getAttribute("data-value")

                //inyecto los valores recogidos en los diferentes inputs
                document.querySelector('#nombre').value = nombreData
                document.querySelector('#numeroMesa').value = numData
                document.querySelector('#selectBirra').selectedIndex = valorSelect
                document.querySelector('#cantidad').value = cant
                document.querySelector('#input-oculto').value = id
                document.querySelector('#pedido').innerHTML = "Editar pedido"
                document.querySelector('#pedido').classList = "btn btn-warning ps-5 pe-5"
                
            })
    }
}

}