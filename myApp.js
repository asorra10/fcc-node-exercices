let express = require('express');
let app = express();
let path = require('path');

// Sert le dossier public pour le CSS
app.use('/public', express.static(path.join(__dirname, 'public')));

// Route principale
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

module.exports = app;




































 module.exports = app;
