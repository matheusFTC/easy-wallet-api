const jwt = require('jwt-simple');

const User = require('../models/user');

const secret = process.env.AUTH_SECRET || process.env.LOCAL_AUTH_SECRET;

let controller = {
  isAdministrator: (req, res, next) => {
    let token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (token) {
      try {
        let decoded = jwt.decode(token, secret);

        if (decoded.exp <= Date.now()) {
          res.status(401).json({
            error: 'Acesso expirado.'
          });
        } else {
          User.findOne({
            'email': decoded.iss
          }).then((user) => {
            if (user && user.type === 'ADMIN') {
              next();
            } else {
              res.status(401).json({
                error: 'Não autorizado.'
              });
            }
          }).catch((err) => {
            res.status(500).json(err);
          });
        }
      } catch (err) {
        res.status(400).json({
          error: 'Token inválido.'
        });
      }
    } else {
      res.status(404).json({
        error: 'Token não fornecido.'
      });
    }
  }
};

module.exports = controller;
