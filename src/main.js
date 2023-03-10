// Import our custom CSS
import './scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import { header } from './componentes/header'
import { home } from './vistas/home'
import { formulario } from './componentes/pedidos'
import { tablaPedidos } from './componentes/tablaPedidos'

document.querySelector('header').innerHTML = header.template
document.querySelector('main').innerHTML = home.template
document.querySelector('#parte1').innerHTML = formulario.template;
document.querySelector('#parte2').innerHTML = tablaPedidos.template