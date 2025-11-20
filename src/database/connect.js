const mongoose = require("mongoose")

const connectToDataBase = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.418nttx.mongodb.net/?appName=cursoNodeJs`)
        console.log("Conexão com o banco bem sucedida!")
    } catch(error) {
        console.log("Erro de conexão com o Banco de Dados\n")
        console.log(error)
    }
}

module.exports = connectToDataBase