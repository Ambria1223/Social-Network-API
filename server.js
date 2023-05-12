const express = require('express');
const mongodb = require('mongodb').MongoClient;

const app = express();
const PORT = 3001;

let db;

const connectionStringURI = 'mongodb://localhost:27017/socialDB';

mongodb.connect(
    connectionStringURI, {
        useNewUrlParser: true, useUnifiedTopology: true},
        (err,client) => {
            db = client.db();
            app.listen(port, () => {
                console.log(`app listening at http://localhost:${port}`);
            });
        }
    
);

app.use(express.json());

app.post('/create', (req, res) => {
  // Use db connection to add a document
  db.collection('').insertOne(
    { name: req.body.name, breed: req.body.breed },
    (err, results) => {
      if (err) throw err;
      res.json(results);
    }
  );
});

app.get('/read', (req, res) => {
  // Use db connection to find all documents in collection
  db.collection('userCollection')
    .find()
    .toArray((err, results) => {
      if (err) throw err;
      res.send(results);
    });
});


db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });
  
