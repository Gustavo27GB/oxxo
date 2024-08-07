import { clientes } from "../model/clientes.models.js";
const test = (()=>{
    console.log('El controlador de los clientes funciona')
})
clientes.create({
    name:'bicho',
    numbole:'12',
    date:'12/2/2024'
})
export default test