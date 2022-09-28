'use strict'

var express = require('express');
var UsuarioControle = require('../controle/usuario');

var api = express.Router();

api.get('./inicio', UsuarioControle.inicio);
api.get('./teste', UsuarioControle.teste);

module.exports = api;