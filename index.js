const express = require('express');
const app = express();
app.set('port', process.env.PORT || 3000);

const pug = require('pug')
app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res){
    res.type('text/plain');
    res.send('Chat');
});
   app.get('/about', function(req, res){
    res.type('text/plain');
    res.send('About Chat');
});

// пользовательская страница 404
app.use(function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404 — Не найдено');
});
// пользовательская страница 500
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 — Ошибка сервера');
});
app.listen(app.get('port'), function(){
    console.log( 'Express запущен на http://localhost:' +
    app.get('port') + '; нажмите Ctrl+C для завершения.' );
});