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
                <td>`+ cervezas[0].nombre +`</td>
                <td>`+ 5 +`</td>
                <td><button class="btn btn-danger">Eliminar</button></td>
                <td><button class="btn btn-warning">Editar Perfil</button></td>  
            </tr>
            </tbody>
          </table>
    </div>
</div>
    `
}