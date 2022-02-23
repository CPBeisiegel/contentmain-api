// Instanciando o mongoose
// Rodamos esse comando para criar o nosso banco de dados e o conecta-lo com o compass
const mongoose = require('mongoose')

// Criando uma função assincrona para realizar a integração entre os sistemas

async function connect() {
    try{
        // Realizando a conecxão com o banvo de dados 
        const connection = await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to DB", connection.connection.name);

    } catch(err){
        console.error("database connection error", err)
    }
}

// exportando a função
module.exports = connect;