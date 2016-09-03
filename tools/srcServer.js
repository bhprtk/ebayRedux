import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import colors from 'colors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import morgan from 'morgan';

/* eslint-disable no-console */

const MONGO_URI = 'mongodb://localhost/EBAY_REDUX';
const PORT = 3000;
const app = express();
const compiler = webpack(config);

mongoose.connect(MONGO_URI, err => {
  if(err) throw err;
  console.log (`MongoDB connected to ${MONGO_URI}:`.cyan);
});

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', require('./routes/api'));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});




app.listen(PORT, function(err) {
  if (err) {
    console.log(err);
  } else {
    // open(`http://localhost:${PORT}`);
		console.log(`Server listening on port ${PORT}`.magenta);
  }
});
