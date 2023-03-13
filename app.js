const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const connectionMiddleware = require('./middleware/connection-middleware');

var pessoa = require('./routes/pessoa');
var setor = require('./routes/setor');
var funcionario = require('./routes/funcionario');

var app = express();

app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(connectionMiddleware());

app.get('/pessoa', pessoa.list);
app.post('/pessoa/add', pessoa.add);
app.post('/pessoa/update', pessoa.update);
app.get('/pessoa/:id', pessoa.find);
app.get('/pessoa/remove/:id', pessoa.remove);

app.get('/setor', setor.list);
app.get('/setor/:id', setor.find);

app.get('/funcionario', funcionario.list);
app.get('/funcionario/:id', funcionario.find);

app.listen(4000, function () {
  console.log('Server is running.. on Port 4000');
});
