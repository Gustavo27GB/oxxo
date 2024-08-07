import { gerentes } from "../model/gerentes.models.js";
const test = (()  =>{
    console.log('el controladoor de los gerentes funciona')
})
gerentes.create({
    name:'Nata',
    apema:'nael',
    apep:'cano',
    age:'25'
})
export default test