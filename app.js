const express = require('express');
const app = express();
// const port = 3000;

app.set('view engine','pug');
app.set('views', './public/views');
app.use(express.static('public'));
app.use(express.urlencoded({
  extended: true
}));

app.get('/hello', (req, res) => {
  res.render('formTemplate');
});

app.post('/hello', (req, res) => {
  res.send(`Hola ${req.body.username}!`);
  res.end();
});

app.listen(3000, () => console.log('Listening on port 3000!'));