const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3001;



const db = new sqlite3.Database('Customer.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the in-memory SQLite database.');
});

// Set up a route
app.get('/users', (req, res) => {
    db.all('SELECT * FROM users', [], (err, rows) => {
      if (err) {
        throw err;
      }
      res.json(rows);
    });
  });







// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});