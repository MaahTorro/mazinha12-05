const mongoose = require('mongoose')

const conn = async()=>{
    // mongoAtlas
    const atlas = await mongoose.connect('mongodb+srv://maah123:230205@fiaptec.n8xny.mongodb.net/todo_list')
}

module.exports = conn