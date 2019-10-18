const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000; 
const cors=require('cors');
require('./database');

const Departamento=require('./models/departamento');
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//Permitir cors 
app.use(cors());

//Raiz
app.get('/',(req,res)=>{
    alert("Ha ingresado correctamente");
})

//Crear departamento
app.post('/rumi/departamento',(req,res)=>{
    const newDepartamento= new Departamento(req.body);
    newDepartamento.save()
                   .then(movie=>res.status(201).send(movie))
                   .catch(err=>res.status(400).send(err));
})

//Leer unn departamento
app.get('/rumi/departamento/id/:id',(req,res)=>{
    const id=req.params.id;
    Departamento.findById(id)
                .then(departamento=>res.send(departamento))
                .catch(err=>res.send(err));
});

//Obtener por ciudad
app.get('/rumi/departamento/ciudad/:ciudad',(req,res)=>{
    const ciudad=req.params.ciudad;
    Departamento.find({ciudad})
                .then(departamento=>res.send(departamento))
                .catch(err=>res.send(err));
});

//Obtener por empresa
app.get('/rumi/departamento/empresa/:empresa',(req,res)=>{
    const empresa=req.params.empresa;
    Departamento.find({empresa})
                .then(departamento=>res.send(departamento))
                .catch(err=>res.send(err));
});

//Obtener por universidad
app.get('/rumi/departamento/universidad/:universidad',(req,res)=>{
    const universidad=req.params.universidad;
    Departamento.find({universidad})
                .then(departamento=>res.send(departamento))
                .catch(err=>res.send(err));
});

//Obtener por campo petfriendly
app.get('/rumi/departamento/petfriendly/:petfriendly',(req,res)=>{
    const petfriendly=req.params.petfriendly;
    Departamento.find({petfriendly})
                .then(departamento=>res.send(departamento))
                .catch(err=>res.send(err));
});

//Obtener por rango de ciudades
app.get('/rumi/departamento/precio/:precio')

//Leer todas las colleciones
app.get('/rumi/departamento',(req,res)=>{
    //?precio=5000-20000
    if(req.query.precio){
        
        const query = req.query.precio;
        const [precio1, precio2] = query.split('-');
        
        /*
        https://docs.mongodb.com/manual/reference/method/db.collection.find/
        { birth: { $gt: new Date('1940-01-01'), $lt: new Date('1960-01-01') } }
        */
       Departamento.find({ precio: { $gt: precio1, $lt: precio2 } })
       .then(departamento => res.send(departamento))
       .catch(err=> res.send(err));      
    } else {
        Departamento.find()
        .then(departamento => res.send(departamento))
        .catch(err=> res.send(err));
    }
})

//Actualizar
app.patch('/rumi/departamento/:id',(req,res)=>{
    const id=req.params.id;
    Departamento.findByIdAndUpdate(id,req.body,{new:true})
                .then(updatedmovie=>res.send(updatedmovie))
                .catch(err=>res.send(err));
});

//Borrar
app.delete('/rumi/departamento/:id',(req,res)=>{
    const id=req.params.id;
    Departamento.findByIdAndDelete(id)
                .then(()=>res.status(204).send())
                .catch(err=>res.status(404)('El departamento seleccionado no se ha podido borrar'));
});



app.listen(PORT, () => console.log(`Listening on port ${PORT}`));