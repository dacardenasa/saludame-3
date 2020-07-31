const express = require('express');
const app = express();
const port = 3000;

app.set('view engine','pug');
app.set('views', './public/views');
app.use(express.static('public'));
app.use(express.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  res.render('formTemplate');
});

app.post('/', (req, res) => {
  res.send(`<h1>Hola ${req.body.username}!</h1>`);
});

app.listen(port, () => console.log('Listening on port 3000!'));