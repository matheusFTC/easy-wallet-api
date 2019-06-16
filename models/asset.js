const mongoose = require('mongoose');

const schema = mongoose.Schema({
  symbol: {
    type: String,
    unique: true,
    trim: true,
    required: [true, 'Qual o código do ativo?']
  },
  type: {
    type: String,
    enum: ['F', 'A', 'C', 'M', 'O'],
    required: [true, 'Qual o tipo do ativo?']
  },
  isEnabled: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Asset', schema);
