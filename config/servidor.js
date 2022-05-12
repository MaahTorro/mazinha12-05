// importar o pacote express 
const express = require('express')
// executar o exepress 
const app = express()
// definir a porta para o servidor 
const porta = process.env.PORT || 3030

// exportar app e porta 
module.exports = {app,porta}