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
    enum: ['F', 'A']
  }
});

module.exports = mongoose.model('Asset', schema);
