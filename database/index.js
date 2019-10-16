const mongoose =require('mongoose');
const mongo_uri='mongodb+srv://miguel:hola1234@devf-qkryh.mongodb.net/Rumi?retryWrites=true&w=majority';
mongoose.connect(
    mongo_uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=> console.log('Connected to Mongo Atlas'))
    .catch(()=> console.log('Error connecting to Mongo'));
