const express = require('express');
const dotenv = require('dotenv');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const app = express();

dotenv.config();

const port = process.env.HOST_PORT;

app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.set('views', path.join(__dirname, 'views'));
app.set('layout', path.join('', 'layouts/layout'));
app.set('components', path.join('', '/components'));

app.get('/', (req, res) => {
    return res.render('index', {title: 'Hello World'});
})

app.listen(port, () => {
    console.log('Server listening on port: ' + port);
})