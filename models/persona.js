const mongoose =require('mongoose');
const Schema= mongoose.Schema;

const personaShema= new Schema({
    nombre:{
        required:true,
        type:String
    },
    edad:{
        required:true,
        type:Number
    },
})

module.exports=personaShema;