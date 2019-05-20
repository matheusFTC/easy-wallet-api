const crypto = require('crypto');

const algorithm = process.env.APP_SECRET_ALGORITHM;
const secret = process.env.APP_SECRET;
const inputEncoding = process.env.APP_INPUT_ENCODING;
const outputEncoding = process.env.APP_OUTPUT_ENCODING;

const encryption = {
  encrypt: value => {
    if (value) {
      let cipher = crypto.createCipher(algorithm, secret);
      let crypted = cipher.update(value, inputEncoding, outputEncoding);

      crypted += cipher.final(outputEncoding);

      return crypted;
    } else {
      return null;
    }
  },
  decrypt: value => {
    if (value) {
      let decipher = crypto.createDecipher(algorithm, secret);
      let decrypted = decipher.update(value, outputEncoding, inputEncoding);

      decrypted += decipher.final(inputEncoding);

      return decrypted;
    } else {
      return null;
    }
  }
};

module.exports = encryption;
