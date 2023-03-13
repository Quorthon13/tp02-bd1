const list = (req, res) => {
  req.dbconnection.query('SELECT nome FROM pessoa', function (err, result) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.send(result.rows);
    }
  });
};

const add = (req, res) => {
  const {nome, cpf, rg, telefone, rua, bairro, numero, cep, estado, cidade, pais} = {
    nome: 'teste',
    cpf: 'teste',
    rg: 'teste',
    telefone: 'teste',
    rua: 'teste',
    bairro: 'teste',
    numero: 'tes',
    cep: 'teste',
    estado: 'te',
    cidade: 'teste',
    pais: 'teste',
  }

  req.dbconnection.query('INSERT INTO pessoa (nome, cpf, rg, telefone, rua, bairro, numero, cep, estado, cidade, pais) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)', [nome, cpf, rg, telefone, rua, bairro, numero, cep, estado, cidade, pais], function (err, result) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.send(result.rows);
    }
  });
};

const remove = (req, res) => {
  const {codigo} = {
    codigo: req.params.id
  }

  req.dbconnection.query('DELETE FROM pessoa WHERE codigo = $1', [codigo], function (err, result) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.send(result.rows);
    }
  });
};

module.exports = {
  list, add, remove
};

// exports.add = function (req, res) {
//   res.render('employee/add', { title: 'Add Employee' });
// };

// exports.edit = function (req, res) {
//   var id = req.params.id;

//   client.query(
//     'SELECT * FROM employee WHERE id=$1',
//     [id],
//     function (err, result) {
//       if (err) {
//         console.log(err);
//         res.status(400).send(err);
//       }
//       res.render('employee/edit', {
//         title: 'Edit Employee',
//         data: result.rows,
//       });
//     }
//   );
// };

// exports.save = function (req, res) {
//   var cols = [
//     req.body.name,
//     req.body.job,
//     req.body.department,
//     req.body.salary,
//     req.body.hire_date,
//   ];

//   client.query(
//     'INSERT INTO employee(name, job, department, salary, hire_date) VALUES($1, $2, $3, $4, $5) RETURNING *',
//     cols,
//     function (err, result) {
//       if (err) {
//         console.log('Error Saving : %s ', err);
//       }
//       res.redirect('/employees');
//     }
//   );
// };

// exports.update = function (req, res) {
//   var cols = [
//     req.body.name,
//     req.body.job,
//     req.body.department,
//     req.body.salary,
//     req.body.hire_date,
//     req.params.id,
//   ];

//   client.query(
//     'UPDATE employee SET name=$1, job=$2, department=$3, salary=$4, hire_date=$5 WHERE id=$6',
//     cols,
//     function (err, result) {
//       if (err) {
//         console.log('Error Updating : %s ', err);
//       }
//       res.redirect('/employees');
//     }
//   );
// };

// exports.delete = function (req, res) {
//   var id = req.params.id;

//   client.query('DELETE FROM employee WHERE id=$1', [id], function (err, rows) {
//     if (err) {
//       console.log('Error deleting : %s ', err);
//     }
//     res.redirect('/employees');
//   });
// };
