const connect = require('connect');
const app = connect();

function function_one(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from NodeJS Application');
};

function function_two(req, res, next) {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1> Hello from NodeJS Application as html</h1>');
};

function function_three(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.end('{ “message”: “Hello from NodeJS Application as json”}');
};


app.use('/html', function_two);
app.use('/json', function_three);
app.use('/', function_one)
app.listen(3030);