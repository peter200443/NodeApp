let express = require('express');
let engine = require('ejs-locals');
let http = require("http");
let app = express()

app.engine('ejs', engine);
app.use(express.static(__dirname+'/public'));
app.set('views', './views');
app.set('view engine', 'ejs');


app.get('/', function (req, res) {
    res.render('Announcement')
})
app.get('/Announcement', function (req, res) {
    res.render('Announcement')
})
app.get('/Activity', function (req, res) {
    res.render('Activity')
})
app.get('/Connection', function (req, res) {
    res.render('Connection')
})
app.get('/Personal', function (req, res) {
    res.render('Personal')
})
app.get('/Message', function (req, res) {
    res.render('Message')
})

app.listen(3000)