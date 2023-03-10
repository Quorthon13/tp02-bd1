const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const connectionMiddleware = require('./middleware/connection-middleware');

var pessoa = require('./routes/pessoa');
// var routes = require('./routes');
var app = express();

app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(connectionMiddleware());

// app.get('/', routes.index);
app.get('/pessoa', pessoa.list);
// app.get('/pessoa/add', pessoa.add);
// app.post('/pessoa/add', pessoa.save);
// app.get('/pessoa/delete/:id', pessoa.delete);
// app.get('/pessoa/edit/:id', pessoa.edit);
// app.post('/pessoa/edit/:id', pessoa.update);

app.listen(4000, function () {
  console.log('Server is running.. on Port 4000');
});
