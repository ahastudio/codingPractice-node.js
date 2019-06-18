// jshint esversion:8

const express = require('express');
// const request = require("request");
// const ngrok = require("ngrok");

const HOST = '0.0.0.0';
const PORT = process.env.POST || '3000';

const { log } = console;

const app = express();

app.get('/', (_req, res) => {
  log('GET /');
  res.send('Hello World\n');
});

app.post('/webhook', (_req, res) => {
  log('POST /webhook');
  res.send('Hi!\n');

  // let options = {
  //   url: "https://api.line.me/v2/bot/message/push",
  // method: "POST",
  // header: {
  // "bearer" :
  // };
  // };

  // request(options, function(error, response, body){
  //   console.log(error);
  // });
});


app.listen(PORT, HOST, () => {
  log('Server is running on port 3000.');
});
