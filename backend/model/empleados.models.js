import {Schema, model } from "mongoose";

export const empleado = new Schema({
    name:{
        type:String
    },
    apema:{
        type:String
    },
    apep:{
        type:String
    },
    age:{
        Type:String
    }
})

export const empleados = new model('empleados', empleado)