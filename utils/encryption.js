const crypto = require('crypto');

const algorithm = process.env.SECRET_ALGORITHM || process.env.LOCAL_SECRET_ALGORITHM;
const secret = process.env.SECRET || process.env.LOCAL_SECRET;
const inputEncoding = process.env.INPUT_ENCODING || process.env.LOCAL_INPUT_ENCODING;
const outputEncoding = process.env.OUTPUT_ENCODING || process.env.LOCAL_OUTPUT_ENCODING;

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
