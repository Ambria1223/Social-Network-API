const express = require('express');
const mongodb = require('mongodb').MongoClient;

const app = express();
const PORT = 3001;

const connectionStringURI = 'mongodb://localhost:27017/socialDB';

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
