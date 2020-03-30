const express =  require ('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);










/*
***************************************
*Get:Buscar/Listar
*Post:Criar
*Put:Alterar
*Delete:Excluir

***************************************
*Tipos de parametros:
*Query Params: Parametros nomeados enviados na rota apos "?" (Filtros, Paginação)
*Route Params: Parametros para identificar recursos
*Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*

*/ 

