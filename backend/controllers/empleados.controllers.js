import { empleados } from "../model/empleados.models.js";
const test = (()  =>{
    console.log('el controladoor de los empleados funciona')
})
empleados.create({
    name:'Gustavo',
    apema:'Gutierrez',
    apep:'Barcenas',
    age:'19'
})
export default test