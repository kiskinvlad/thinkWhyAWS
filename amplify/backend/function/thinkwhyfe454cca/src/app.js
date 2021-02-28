const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const cors = require('cors');

const subscriber = require('./controllers/subscriber');
const errorHandler = require('./utils/errorHandler');

app.use(cors());
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

app.use(errorHandler);
app.use('/subscriber', subscriber);

app.listen(3000, function() {
  console.log("App started")
});

module.exports = app;
