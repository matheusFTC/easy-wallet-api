const jwt = require('jwt-simple');
const moment = require('moment');

const User = require('../models/user');

const encryption = require('../utils/encryption');

const secret = process.env.APP_AUTH_SECRET;
const amount = process.env.APP_AUTH_AMOUNT;
const duration = process.env.APP_AUTH_DURATION;

let controller = {
  authenticate: (req, res) => {
    let email = req.body.email;
    let password = encryption.encrypt(req.body.password);

    if (email && password) {
      User.findOne({
        'email': email,
        'password': password
      }).then((user) => {
        if (user) {
          let expires = moment().add(amount, duration).valueOf();

          let token = jwt.encode({
            iss: user._id,
            exp: expires
          }, secret);

          res.status(200).json({
            expires,
            token,
            user
          });
        } else {
          res.status(401).json({
            error: 'Não autorizado.'
          });
        }
      }).catch((err) => {
        res.status(500).json(err);
      });
    } else {
      res.status(400).json({
        error: 'E-mail e/ou senha não informados.'
      });
    }
  },
  validate: (req, res, next) => {
    let token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (token) {
      try {
        let decoded = jwt.decode(token, secret);

        if (decoded.exp <= Date.now()) {
          res.status(401).json({
            error: 'Acesso expirado.'
          });
        } else {
          User.findById({
            '_id': decoded.iss
          }).then((employee) => {
            if (employee) {
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
