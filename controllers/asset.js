const Asset = require('../models/asset');

const removeEmpty = require('../utils/remove-empyt');

let controller = {
  findAll: (req, res) => {
    Asset.find(req.query)
      .then(assets => {
        res.status(200).json(assets);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  },
  findById: (req, res) => {
    Asset.findById(req.params._id)
      .then(asset => {
        if (asset) {
          res.status(200).json(asset);
        } else {
          res.status(404).json({
            message: 'Ativo não encontrado.'
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
      symbol: req.body.symbol
    };

    if (_id) {
      Asset.findById(_id)
        .then(asset => {
          if (asset) {
            Asset.findByIdAndUpdate(
              _id,
              { $set: removeEmpty(data), $inc: { __v: 1 } },
              { new: true, runValidators: true }
            ).then(asset => {
              res.status(200).json(asset);
            }).catch(err => {
              res.status(500).json(err);
            });
          } else {
            res.status(404).json({
              error: 'Ativo não encontrado.'
            });
          }
        })
        .catch(err => {
          res.status(500).json(err);
        });
    } else {
      let asset = new Asset(data);

      asset
        .save()
        .then(() => {
          res.status(201).json(asset);
        })
        .catch(err => {
          res.status(500).json(err);
        });
    }
  },
  remove: async (req, res) => {
    const asset = await Asset.findById(req.params._id);

    if (asset) {
      try {
        await asset.remove();

        res.status(203).json({
          message: 'Ativo removido com sucesso.'
        });
      } catch (error) {
        res.status(500).json({ error });
      }
    } else {
      res.status(404).json({
        error: 'Ativo não encontrado.'
      });
    }
  }
};

module.exports = controller;
