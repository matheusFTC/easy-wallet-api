const bluebird = require('bluebird');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const fs = require('fs');
const logger = require('morgan');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const envLocal = dotenv.parse(fs.readFileSync('.env.local'));

for (let key in envLocal) {
  process.env[key] = envLocal[key];
}

let app = express();
let router = express.Router();

const asset = require('./routes/asset');
const authentication = require('./routes/authentication');
const note = require('./routes/note');
const user = require('./routes/user');

router.use('/assets', asset);
router.use('/authentication', authentication);
router.use('/notes', note);
router.use('/users', user);

app.use(express.static('public'));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(methodOverride());
app.use('/api/v1', router);

app.use((req, res, next) => {
  res.status(404).json({ error: 'Recurso não encontrado.' });
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: err });
});

mongoose.Promise = bluebird;

mongoose.connect(process.env.DB_URL || process.env.LOCAL_DB_URL, {
  useCreateIndex: true,
  useNewUrlParser: true
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    process.exit(0);
  });
});

app.listen(process.env.PORT || process.env.LOCAL_PORT);
