// comando necessários para criar os schemas

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Instanciando o schema 
const contentSchema = new Schema({
    // não precisa criar ID pois o banco de dados já cria 
    contentName: {type: String, maxLength:64, required: true, trim: true},
    img: {type: String},
    contentBody: {type: String, required: true},
});

// estou exportando o modelo que tem esse nome(entidade criada)
// e está receita(o schema que você criou anteriormente). A exportação é desta maneira
module.exports = mongoose.model("Content", contentSchema);

