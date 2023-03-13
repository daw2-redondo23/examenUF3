// Import our custom CSS
import './scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import { header } from './componentes/header'
import { home } from './vistas/home'
import { formulario } from './componentes/pedidos'
import { tablaPedidos } from './componentes/tablaPedidos'

document.querySelector('header').innerHTML = header.template //inyecto la plantilla header
document.querySelector('main').innerHTML = home.template //inyecto la plantilla home en el main
document.querySelector('#parte1').innerHTML = formulario.template; //inyecto el formulario dentro de un div
document.querySelector('#parte2').innerHTML = tablaPedidos.template //inyecto la tabla dentro del segundo div

formulario.script() //llamo al funcionalidad de el componente formulario