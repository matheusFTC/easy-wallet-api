const User = require('../models/user');

const encryption = require('../utils/encryption');
const removeEmpty = require('../utils/remove-empyt');

let controller = {
  findAll: (req, res) => {
    User.find(req.query)
      .select('-password')
      .sort('name')
      .then(users => {
        res.status(200).json(users);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  },
  findById: (req, res) => {
    User.findById(req.params._id)
      .select('-password')
      .then(user => {
        if (user) {
          res.status(200).json(user);
        } else {
          res.status(404).json({
            message: 'Usuário não encontrado.'
          });
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  },
  save: (req, res) => {
    let _id = req.params._id;

    let data = {
      email: req.body.email,
      name: req.body.name,
      isEnabled: req.body.isEnabled
    };

    if (_id) {
      User.findById(_id)
        .then(user => {
          if (user) {
            let password = encryption.encrypt(req.body.password);
            let newPassword = encryption.encrypt(req.body.newPassword);
            let newPasswordConfirm = encryption.encrypt(req.body.newPasswordConfirm);

            if (newPassword || newPasswordConfirm) {
              if (user.password !== password) {
                res.status(401).json({
                  error: 'Alteração de senha não autorizada.'
                });
              } else {
                if (newPassword === newPasswordConfirm) {
                  data.password = newPassword;

                  User.findByIdAndUpdate(
                    _id,
                    { $set: removeEmpty(data), $inc: { __v: 1 } },
                    { new: true, runValidators: true }
                  )
                    .then(employee => {
                      res.status(200).json(employee);
                    })
                    .catch(err => {
                      res.status(500).json(err);
                    });
                } else {
                  res.status(403).json({
                    error: 'A nova senha fornecida não foi confirmada corretamente.'
                  });
                }
              }
            } else {
              data.password = user.password;

              User.findByIdAndUpdate(
                _id,
                { $set: removeEmpty(data), $inc: { __v: 1 } },
                { new: true, runValidators: true }
              )
                .then(user => {
                  res.status(200).json(user);
                })
                .catch(err => {
                  res.status(500).json(err);
                });
            }
          } else {
            res.status(404).json({
              error: 'Usuário não encontrado.'
            });
          }
        })
        .catch(err => {
          res.status(500).json(err);
        });
    } else {
      data.password = encryption.encrypt(req.body.password);

      let user = new User(data);

      user
        .save()
        .then(() => {
          res.status(201).json(user);
        })
        .catch(err => {
          res.status(500).json(err);
        });
    }
  },
  remove: async (req, res) => {
    const user = await User.findById(req.params._id);

    if (user) {
      try {
        await user.remove();

        res.status(203).json({
          message: 'Usuário removido com sucesso.'
        });
      } catch (error) {
        res.status(500).json({ error });
      }
    } else {
      res.status(404).json({
        error: 'Usuário não encontrado.'
      });
    }
  }
};

module.exports = controller;
