import { Schema, model } from "mongoose";

export const productof = new Schema({
    produf:{
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

export const productosf = new model('productosf', productof)