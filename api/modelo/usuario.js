'use strict'

//var { default: mongoose } = require('mongoose');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioEsquema = Schema({
    nome: String,
    sobrenome: String,
    apelido: String,
    email: String,
    senha: String,
    funcao: String,
    imagem: String
});

module.exports = mongoose.model('Usuario', UsuarioEsquema);