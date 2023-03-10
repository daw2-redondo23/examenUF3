import { cervezas } from "../bd"
import { tablaPedidos } from "./tablaPedidos";
export const  formulario = {
    template: `<div class="row border pt-5 shadow ps-5">
                  <h2 class="pt-5">Selecciona tu cerveza y haz tu pedido</h2>
                <div class="col-6">
                  <form class="row g-3">
                      <div class="col-12">
                        <label for="nombre" class="form-label">Nombre del grupo</label>
                        <input type="text" class="form-control" id="nombre">
                      </div>
                      <div class="col-12">
                        <label for="numeroMesa" class="form-label">Mesa</label>
                        <input type="number" class="form-control" id="numeroMesa">
                      </div>
                      <div class="col-12">
                          <label for="selectBirra" class="form-label">Elije tu birra</label>
                          <select id="selectBirra" class="form-select">
                              
                          </select>
                      </div>
                      <div class="col-12">
                        <label for="cantidad" class="form-label">¿Cuantas te traigo?</label>
                        <input type="number" class="form-control" id="cantidad">
                      </div> 
                      <div class="col-12">
                        <div class="d-grid gap-2">
                          <button id="pedido" type="submit" class="btn btn-success ps-5 pe-5">Añadir pedido</button>
                        </div>  
                      </div>
                    </form>
                </div>
                <div id="muestraCerveza" class="col-6">
                    
                </div>
              </div>
              `,
  script: ()=>{
    let html;
    let numero
    cervezas.forEach(element => {
      html += `<option value="`+ element.id +`">`+ element.nombre +`</option>`
    })

    document.querySelector('#selectBirra').innerHTML = html

    const selectElement = document.querySelector('#selectBirra');
    let descripcion  = ` <div class="pb-5">
                            <h3 id="nombre" class="pb-3">`+ cervezas[0].nombre +`</h3>
                            <p id="descripcion">`+ cervezas[0].descripcion +`</p>
                          </div>
                          <img src="`+ cervezas[0].imagen +`" class="card-img-bottom w-25 img-fluid" alt="">
                        `

  document.querySelector('#muestraCerveza').innerHTML = descripcion
    selectElement.addEventListener('change', (event) => {
        numero = event.target.value -1
        descripcion = ` <div class="pb-5">
                              <h3 id="nombre" class="pb-3">`+ cervezas[numero].nombre +`</h3>
                              <p id="descripcion">`+ cervezas[numero].descripcion +`</p>
                            </div>
                            <img src="`+ cervezas[numero].imagen +`" class="card-img-bottom w-25 img-fluid" alt="">
                            `
                            document.querySelector('#muestraCerveza').innerHTML = descripcion
    })

    document.querySelector('#pedido').addEventListener("click", ()=>{
      event.preventDefault()
      tablaPedidos.script()
    })
  }
}