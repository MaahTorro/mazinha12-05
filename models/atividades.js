const mongoose = require('mongoose')

const modelo = mongoose.Schema({
    data:Date,
    tipo: String,
    entrega: String,
    diciplina: String,
    instrucoes: String,
    usuario: String
})

const atividades = mongoose.model('atividades',modelo)

module.exports = atividades
