const find = async (req, res) => {
  const resultado = await findById(req, req.params.id);
  if (resultado == null) {
    res.status(400).send({ dados: null, msgErro: 'Registro não encontrado.' });
  } else {
    res.send({ dados: resultado, msgErro: null });
  }
};

const findById = async (req, id) => {
  const { codigo } = {
    codigo: id,
  };

  try {
    const resultado = await req.dbconnection.query(
      'SELECT * FROM pessoa WHERE codigo = $1',
      [codigo]
    );
    return resultado.rows.length == 0 ? null : resultado.rows[0];
  } catch (e) {
    return null;
  }
};

const list = (req, res) => {
  req.dbconnection.query('SELECT * FROM pessoa', function (err, result) {
    if (err) {
      res.status(400).send({ dados: null, msgErro: 'Erro não identificado.' });
    } else {
      res.send({ dados: result.rows, msgErro: null });
    }
  });
};

const add = (req, res) => {
  const {
    nome,
    cpf,
    rg,
    telefone,
    rua,
    bairro,
    numero,
    cep,
    estado,
    cidade,
    pais,
  } = {
    ...req.body,
  };
  req.dbconnection.query(
    'INSERT INTO pessoa (nome, cpf, rg, telefone, rua, bairro, numero, cep, estado, cidade, pais) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)',
    [nome, cpf, rg, telefone, rua, bairro, numero, cep, estado, cidade, pais],
    function (err, result) {
      if (err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        res.send(result.rows);
      }
    }
  );
};

const remove = async (req, res) => {
  const { codigo } = {
    codigo: req.params.id,
  };
  const find = await findById(req, res);
  if (find == null) {
    res.status(400).send({ dados: null, msgErro: 'Registro não encontrado.' });
  } else {
    req.dbconnection.query(
      'DELETE FROM pessoa WHERE codigo = $1',
      [codigo],
      function (err) {
        if (err) {
          console.log(err);
          res.status(400).send(err);
        } else {
          res.send({ dados: true, msgErro: null });
        }
      }
    );
  }
};

const update = async (req, res) => {
  const {
    codigo,
    nome,
    cpf,
    rg,
    telefone,
    rua,
    bairro,
    numero,
    cep,
    estado,
    cidade,
    pais,
  } = {
    ...req.body,
  };

  const find = await findById(req, codigo);
  if (find == null) {
    res.status(400).send({ dados: null, msgErro: 'Registro não encontrado.' });
  }

  req.dbconnection.query(
    `UPDATE public.pessoa
    SET nome=$2, cpf=$3, rg=$4, telefone=$5, rua=$6, bairro=$7, numero=$8, cep=$9, estado=$10, cidade=$11, pais=$12
    WHERE codigo=$1
    `,
    [
      codigo,
      nome,
      cpf,
      rg,
      telefone,
      rua,
      bairro,
      numero,
      cep,
      estado,
      cidade,
      pais,
    ],
    function (err, result) {
      if (err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        res.send(result.rows);
      }
    }
  );
};

module.exports = {
  list,
  add,
  remove,
  find,
  update,
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
