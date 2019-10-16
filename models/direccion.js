const mongoose =require('mongoose');
const Schema= mongoose.Schema;

const direccionSchema= new Schema({
    colonia:{
        required:true,
        type:String
    },
    calle:{
        required:true,
        type:String
    },
    num:{
        required:true,
        type:Number
    }
});

module.exports=direccionSchema;