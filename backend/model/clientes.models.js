import {Schema, model } from "mongoose";

export const cliente = new Schema({
    name:{
        type:String
    },
    numbole:{
        type:String
    },
    date:{
        type:Date
    }
})

export const clientes = new model('clientes', cliente)