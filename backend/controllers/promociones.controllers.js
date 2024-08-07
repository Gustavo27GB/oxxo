import { promociones } from "../model/promociones.models.js";
const test = (()=>{
    console.log('El controlador de las promociones funciona')
})
promociones.create({
    produ:'12 pack cerveza',
    sernum:'2345',
    dscrip:'12 cerveza deliciosas en un excelente pecio',
    price:'100'
})
export default test