const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle form submission
app.use(express.urlencoded({ extended: true }));
app.post('/add', function(req, res) {
  const food = req.body.food;
  const carbs = req.body.carbs;
  console.log(food, carbs);
  res.redirect('/');
});

// Serve the index.html file for all other requests
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(3000, function() {
  console.log('Server is listening on port 3000!');
});