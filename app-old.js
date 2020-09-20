const http = require('http')

http.createServer((request, response) => {

        response.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'harold',
            edad: 31,
            url: request.url
        }

        response.write(JSON.stringify(salida));
        response.end();
    })
    .listen(8080);

console.log('Escuchando el puesto 8080');