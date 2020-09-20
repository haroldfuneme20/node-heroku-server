const express = require('express')
var hbs = require('hbs');
const app = express()


app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials', function(err) {});
app.set('view engine', 'hbs');

// helpers  (getAnio se puede enviar a todas las vistas)
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
})

app.get('/', (req, res) => {
    // res.send('Hello World');
    // let salida = {
    //     nombre: 'harold',
    //     edad: 31,
    //     url: req.url
    // };
    res.render('home', {
        nombre: 'Harold',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    // res.send('Hello World');
    // let salida = {
    //     nombre: 'harold',
    //     edad: 31,
    //     url: req.url
    // };
    res.render('about', {
        nombre: 'Harold',
        anio: new Date().getFullYear()
    });
});

app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
})