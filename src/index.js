const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://fellipelascala:403396554@cluster0-fmnpf.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

useCreateIndex: true;

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);





/* Métodos HTTP: get, post, put, delete (principais métodos 
que serão utlizados) */

//Tipos de parâmetros:
// Query Params: request.query (Filtros, ordenação, paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dadods para a criação ou alteração de um registro)

// MongoDB (Não-relacional, os dados não se relacionam muito bem, por exempl opara uma aplicação de e-comerce não funcionaria legal)






