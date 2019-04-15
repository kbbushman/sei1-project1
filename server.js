const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 3000;

// Database
const db = require('./models');

// BodyParser Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Serve Static Assets
app.use(express.static(__dirname + '/public'));

// ROOT Route
app.get('/', (req, res) => {
  res.sendFile('views/index.html', {root: __dirname});
});


// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
