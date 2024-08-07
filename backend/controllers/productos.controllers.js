import { productos } from "../model/productos.models.js";
const test = (() =>{
    console.log('el controlador de los productos funciona')
})
productos.create({
    produ:'modelo',
    sernum:'123',
    dscrip:'Rica y sabrosa',
    price:'32'
})
export default test