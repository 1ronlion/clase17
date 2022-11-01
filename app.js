const express = require('express');
const app = express();
const path = require('path')




app.use(express.static('public'));

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

let PORT = process.env.PORT || 3000  

app.listen(PORT, ()=>{
    console.log('Server corriendo en el puerto' + PORT);
});







app.get('/', (req,res)=>{

    // console.log(productos)
    res.render('home', {productos: productos})
    

});

app.get('/detalle/:id', (req,res)=>{


    let detalleProducto = productos.find(producto => producto.id == req.params.id);
    

    res.render('detail', {producto: detalleProducto})
    

});



