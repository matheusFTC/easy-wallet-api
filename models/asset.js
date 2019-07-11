const mongoose = require('mongoose');

const schema = mongoose.Schema({
  symbol: {
    type: String,
    unique: true,
    trim: true,
    required: [true, 'Qual o código do ativo?']
  },
  shortName: {
    type: String
  },
  longName: {
    type: String
  },
  type: {
    type: String,
    enum: ['F', 'A', 'C', 'M', 'O'],
    required: [true, 'Qual o tipo do ativo?']
  },
  isEnabled: {
    type: Boolean,
    default: true
  },
  currentPrice: {
    type: Number
  }
});

module.exports = mongoose.model('Asset', schema);
