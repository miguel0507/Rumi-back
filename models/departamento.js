const mongoose =require('mongoose');
const Schema= mongoose.Schema;
const direccionSchema=require('./direccion');
const personaSchema=require('./persona');

const departamentoSchema= new Schema({
    direccion:{
        type:[direccionSchema],
        required:true

    },
    persona:{
        type:[personaSchema],
        required:true
    },
    ocupado:{
        required:true,
        type:Boolean
    },
    
    descripcion:{
        required:true,
        type:String
    },
    precio:{
        required:true,
        type:Number
    } ,
    ciudad:{
        required:true,
        type:String
    },
    universidad:{
        type:String
    },
    empresa:{
        type:String
    },
    petfriendly:{
        required:true,
        type:Boolean
    }
});



const Departamento= mongoose.model('Departamento',departamentoSchema);
module.exports=Departamento;