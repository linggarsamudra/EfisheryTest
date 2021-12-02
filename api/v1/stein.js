const https = require('https');
const express = require('express');
const app = express();

app.get('/stein', function(request, response) {

  const options = {
    hostname: 'stein.efishery.com',
    path: '/v1/storages/5e1edf521073e315924ceab4/list',
    method: 'GET'
  };

  const req = https.request(options, (res) => {
    let data = '';
    res.on('data', (chunk)=> { // data is event name here
      data = data + chunk.toString();
    })
    res.on('end', () => {
      let body = JSON.parse(data);
      body = body.filter(item => item.uuid);
      const skip = request.query.skip ?? 0;
      const limit = request.query.limit ?? 10;
      const result = body.slice(skip, limit);
      response.status(200).send(result);
    })
  });

  req.on('error', () => {
    // console.error(e);
  });

  req.end();

});

module.exports = {
  path: '/api/v1',
  handler: app
}