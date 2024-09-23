const http = require("http");
const url = require("url");
const fs = require("fs");
const filepath = require("path")

const server = http.createServer((req, res) => {

    const reqUrl = url.parse(req.url, true);
    const path = reqUrl.pathname;

    if (path == "/") {
        fs.readFile("./template/index.html", 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain; charse=utf-8' });
                res.end("Erro 500 - Erro interno no servidor...");
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html; charse=utf-8' });
                res.end(data);
            }
        })
    } else if (path == "/cardapio") {
        fs.readFile('./template/cardapio.html', 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain; charse=utf-8' });
                res.end("Erro 500 - Erro interno no servidor...");
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html; charse=utf-8' })
                res.end(data);
            }
        });
    }else if (req.url.match(/\.(js)$/)) {
        const jsFile = "appPizzaria.js";
        fs.readFile(jsFile, 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain; charse=utf-8' });
                res.end("Erro 500 - Erro interno no servidor...");
            } else {
                res.writeHead(200, { 'Content-Type': 'text/javascript; charse=utf-8' })
                res.end(data);
            }
        });
    }else if(path == "/pedido"){
        fs.readFile('./template/pedido.html', 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain; charse=utf-8' });
                res.end("Erro 500 - Erro interno no servidor...");
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html; charse=utf-8' })
                res.end(data);
            }
        });

    } else {
        fs.readFile('./template/error404.html', 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain; charse=utf-8' });
                res.end("Erro 500 - Erro interno no servidor...");
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html; charse=utf-8' });
                res.end(data);
            }
        })
    }

    

});


const PORT = 4500;
server.listen(PORT, () => {
    console.log(`[OK] - Servidor Iniciado ${PORT}`);
    console.log("Server started at http://localhost:4500...");
});