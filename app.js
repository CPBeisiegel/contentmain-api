require("dotenv").config();
/* configurando as variaveis de ambiente dentro do arquivo env */

require("./config/db.config")();

const express = require('express');

const app = express();

app.use(express.json());

const contentRouter = require("./routes/content.routes");
app.use("/content", contentRouter);



/* Colocando a porta dentro do app.listen que vamos usar */
app.listen(Number(process.env.PORT), () => {
    console.log(`Server up and running at port ${process.env.PORT}.`);
})
