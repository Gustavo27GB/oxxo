import { productosf } from "../model/productosf.models.js";
const test = (() =>{
    console.log('el controlador de los productos faltantes funciona')
})
productosf.create({
    produf:'Sabritas',
    sernum:'456',
    dscrip:'Ricas sabritas',
    price:'25'
})
export default test