
import cors from 'cors';
import mongoose from 'mongoose';
import express from 'express';
import dotenv from  'dotenv';
import test_empleados from "./backend/controllers/empleados.controllers.js"
import test_gerentes from "./backend/controllers/gerentes.controllers.js"
import test_productos from "./backend/controllers/productos.controllers.js"
import test_promociones from "./backend/controllers/promociones.controllers.js"
import test_productosf from "./backend/controllers/productosf.controllers.js"
import test_clientes from "./backend/controllers/clientes.controllers.js"


dotenv.config()


//Conexion con db
mongoose.connect(process.env.url_bd)

//Comprobacion
.then(() => {
    console.log("todo muy bien")
})
.catch((err)=>{
    console.log("No tiene funcion")
}) 

const app= express();
app.use(cors())
app.listen(4000,()=> {
    console.log("Esta jalando el servidor local")
})

test_empleados()
test_gerentes()
test_productos()
test_promociones()
test_clientes()
test_productosf()