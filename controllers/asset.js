const yahooFinance = require('yahoo-finance');

const Asset = require('../models/asset');

const removeEmpty = require('../utils/remove-empyt');
const asyncForEach = require('../utils/async-foreach');

let controller = {
  findAll: (req, res) => {
    let query = {};

    if (req.query.symbol) {
      query.symbol = { $regex: new RegExp('^' + req.query.symbol.toLowerCase(), 'i') };
    }

    if (req.query.type) {
      query.type = { $regex: new RegExp('^' + req.query.type.toLowerCase(), 'i') };
    }

    if (req.query.isEnabled) {
      query.isEnabled = req.query.isEnabled;
    }

    const page = req.query.page ? Number(req.query.page) : 0;
    const perPage = req.query.perPage ? Number(req.query.perPage) : 10;

    Asset.find(query)
      .limit(perPage)
      .skip(perPage * page)
      .sort({ symbol: 'asc' })
      .then(async (assets) => {
        if (assets.length === 0 && req.query.symbol) {
          yahooFinance.quote({
            symbol: `${req.query.symbol.toUpperCase()}.SA`,
            modules: ['price']
          }, (err, snapshot) => {
            if (err) {
              res.status(500).json({
                message: 'Não foi possível encontrar o ativo na API externa.'
              });
            } else {
              const price = snapshot.price;
              const symbol = price.symbol.substring(0, price.symbol.length - 3);
              const shortName = price.shortName.replace(/\s+/g, ' ').trim();
              const longName = price.longName;
              const currentPrice = price.regularMarketPrice;

              let type;

              if (price.shortName.toLowerCase().indexOf('fii') > -1) {
                type = 'F';
              } else {
                type = 'A';
              }

              let data = {
                symbol,
                shortName,
                longName,
                type
              };

              let asset = new Asset(data);

              asset
                .save()
                .then(() => {
                  asset.currentPrice = currentPrice;

                  res.status(201).json(new Array(asset));
                })
                .catch(err => {
                  res.status(500).json(err);
                });
            }
          });
        } else {
          await asyncForEach(assets, async (asset) => {
            let snapshot = await yahooFinance.quote({
              symbol: `${asset.symbol.toUpperCase()}.SA`,
              modules: ['price']
            });

            asset.currentPrice = snapshot.price.regularMarketPrice;
          });

          res.status(200).json(assets);
        }
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
      symbol: req.body.symbol,
      type: req.body.type,
      isEnabled: req.body.isEnabled
    };

    if (_id) {
      Asset.findById(_id)
        .then(asset => {
          if (asset) {
            Asset.findByIdAndUpdate(
              _id, {
                $set: removeEmpty(data),
                $inc: {
                  __v: 1
                }
              }, {
                new: true,
                runValidators: true
              }
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
        res.status(500).json({
          error
        });
      }
    } else {
      res.status(404).json({
        error: 'Ativo não encontrado.'
      });
    }
  }
};

module.exports = controller;
