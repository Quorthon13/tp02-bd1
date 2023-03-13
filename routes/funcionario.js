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
      `SELECT * FROM funcionario f
      INNER JOIN pessoa p ON f.codigo_pessoa = p.codigo
      WHERE codigo_pessoa = $1`,
      [codigo]
    );
    return resultado.rows.length == 0 ? null : resultado.rows[0];
  } catch (e) {
    return null;
  }
};

const list = (req, res) => {
  req.dbconnection.query(
    'SELECT * FROM setor', //
    (err, result) => {
      if (err) {
        res
          .status(400)
          .send({ dados: null, msgErro: 'Erro não identificado.' });
      } else {
        res.send({ dados: result.rows, msgErro: null });
      }
    }
  );
};

module.exports = {
  list,
  find,
};
