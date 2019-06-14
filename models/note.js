const mongoose = require('mongoose');

const schema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Qual o usuário desta nota?']
  },
  executedIn: {
    type: Date,
    required: [true, 'Qual a data de execução desta nota?']
  },
  inclusionIn: {
    type: Date,
    required: [true, 'Qual a data de inclusão desta nota?']
  },
  operations: [{
    operation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Operation'
    }
  }],
  settlementFee: {
    type: Number,
    required: [true, 'Qual a taxa liquidação?'],
    default: 0.00
  },
  total: {
    type: Number,
    required: [true, 'Qual o total desta nota?']
  },
  status: {
    type: String,
    enum: ['E', 'F'],
    default: 'E'
  },
  isEnabled: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Note', schema);
