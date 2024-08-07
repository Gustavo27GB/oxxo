import { Schema, model } from "mongoose";

export const producto = new Schema({
    produ:{
        type:String
    },
    sernum:{
        type:Number
    },
    dscrip:{
        type:String
    },
    price:{
        type:Number
    }
})

export const productos = new model('productos', producto)