const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const ejs = require('ejs');
const path = require('path');
const sephira = require('./data/objects');
const tolRoutes = require('./routes/tolRoutes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use('/tol', tolRoutes)

app.get(('/'), (req, res) => {
    res.render('home');
})

app.listen(PORT, () => {
    console.log('Listening on 3000...')
})