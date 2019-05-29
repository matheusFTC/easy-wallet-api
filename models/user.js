const mongoose = require('mongoose');

const schema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    trim: true,
    required: [true, 'Qual o e-mail do usuário?']
  },
  password: {
    type: String,
    trim: true,
    required: [true, 'Qual a senha do usuário?']
  },
  name: {
    type: String,
    trim: true,
    required: [true, 'Qual o nome do usuário?']
  },
  isEnabled: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('User', schema);
