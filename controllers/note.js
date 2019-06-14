const Note = require('../models/note');

const removeEmpty = require('../utils/remove-empyt');

let controller = {
  findAll: (req, res) => {
    Note.find(req.query)
      .then(notes => {
        res.status(200).json(notes);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  },
  findById: (req, res) => {
    Note.findById(req.params._id)
      .then(note => {
        if (note) {
          res.status(200).json(note);
        } else {
          res.status(404).json({
            message: 'Nota não encontrada.'
          });
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  },
  save: async (req, res) => {
    let _id = req.params._id;

    let data = {
      user: req.body.user,
      executedIn: req.body.executedIn,
      operations: req.body.operations,
      settlementFee: req.body.settlementFee,
      isEnabled: req.body.isEnabled
    };

    if (_id) {
      Note.findById(_id)
        .then(note => {
          if (note) {
            Note.findByIdAndUpdate(
              _id,
              { $set: removeEmpty(data), $inc: { __v: 1 } },
              { new: true, runValidators: true }
            ).then(note => {
              res.status(200).json(note);
            }).catch(err => {
              res.status(500).json(err);
            });
          } else {
            res.status(404).json({
              error: 'Nota não encontrada.'
            });
          }
        })
        .catch(err => {
          res.status(500).json(err);
        });
    } else {
      data.inclusionAt = new Date();

      let nota = new Note(data);

      nota
        .save()
        .then(() => {
          res.status(201).json(nota);
        })
        .catch(err => {
          res.status(500).json(err);
        });
    }
  },
  remove: async (req, res) => {
    const nota = await Note.findById(req.params._id);

    if (nota) {
      try {
        await nota.remove();

        res.status(203).json({
          message: 'Nota removida com sucesso.'
        });
      } catch (error) {
        res.status(500).json({ error });
      }
    } else {
      res.status(404).json({
        error: 'Nota não encontrada.'
      });
    }
  }
};

module.exports = controller;
