//importação das libs / framework;

const express = require('express');
const fs = require('fs');
const path = require ("path");

// criação do server:
const app = express();

//criação dos end-points
app.get('/'),(req , res) => {
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) =>{
        if(err){
            res.status(500).send("500 - Erro Interno do Servidor");
        }else{
            res.status(200).type('text/html').send(data);
        }
    })
}
app.get('/appPizzaria.js', (req, res) => {
    fs.readFile(path.join(__dirname, 'appPizzaria.js'), (err, data) =>{
        if(err){
            res.status(500).send("500 - Erro Interno do Servidor");
        }else{
            res.status(200).type('image/javascript').send(data);
        }
    })
})

// end- point logo
app.get('/pizzaria.jpeg', (req, res) => {
    fs.readFile(path.join(__dirname, 'pizzaria.jpeg'), (err, data) =>{
        if(err){
            res.status(500).send("500 - Erro Interno do Servidor");
        }else{
            res.status(200).type('image/jpeg').send(data);
        }
    })
})

// end-point cardapio
app.get('/cardapio', (req, res) => {
    fs.readFile(path.join(__dirname, 'cardapio.html'), (err, data) =>{
        if(err){
            res.status(500).send("500 - Erro Interno do Servidor");
        }else{
            res.status(200).type('text/html').send(data);
        }
    })
})
app.get('/cardapio.js', (req, res) => {
    fs.readFile(path.join(__dirname, 'cardapio.js'), (err, data) =>{
        if(err){
            res.status(500).send("500 - Erro Interno do Servidor");
        }else{
            res.status(200).type('text/javascript').send(data);
        }
    })
})


// configuração do server:
const PORT = 4500;
app.listen(PORT, () =>{
    console.log(`Servidor iniciado na porta:" $(PORT)`)
});

