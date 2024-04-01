const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve HTML file for frontend
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// API endpoint to handle form submission
app.post('/hello', (req, res) => {
  const name = req.body.name;
  res.send(`Hello, ${name}!`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
