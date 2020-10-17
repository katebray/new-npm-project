const express = require('express');
const res = require('express/lib/response');
//require is from node
//equivalent to express/index.js
const app = express();
//equivalent to app = require('express')()
const port = 3000;

function logger(req, res, next) {
  console.log('---NEW REQUEST---');
  console.log(req.url);
  console.log(req.meth0d);
  next();
}

app.use(logger);

//these are like an event listener
//app.post()
//app.delete()
//app.put()
//app.method()
//Get request - requests it
//get listener - waits for it
//
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/x', (req, res) => {
  res.send('X');
});
app.get('/y', (req, res) => {
  res.send('Y');
});
app.get('/z', (req, res) => {
  res.send('Z');
});

app.get('/me', (req, res) => {
  res.send(JSON.stringify('Kate!'));
});

app.post('/wow', function(req, res) {
  res.type('application/json');
  res.send(JSON.stringify('Post request'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
