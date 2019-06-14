const mongoose = require('mongoose');

const schema = mongoose.Schema({
  asset: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Asset',
    required: [true, 'Qual ativo foi negociado?']
  },
  quantity: {
    type: Number,
    required: [true, 'Qual quantidade foi negociada?']
  },
  type: {
    type: String,
    enum: ['B', 'S'],
    default: 'B'
  },
  adjustmentPrice: {
    type: Number,
    required: [true, 'Qual o valor foi pago pelo ativo?']
  },
  effectivePrice: {
    type: Number
  },
  adjustmentTotal: {
    type: Number,
    required: [true, 'Qual o valor total desta operação?']
  },
  effectiveTotal: {
    type: Number
  },
  isEnabled: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Operation', schema);
