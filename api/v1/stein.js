const https = require('https');
const express = require('express');
const app = express();

const getAllList = (cb) => {
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
      cb(body);
    })
  });
  req.on('error', (err) => {
    cb(err);
  });
  req.end();
}

const getAllArea = (cb) => {
  const options = {
    hostname: 'stein.efishery.com',
    path: '/v1/storages/5e1edf521073e315924ceab4/option_area',
    method: 'GET'
  };
  const req = https.request(options, (res) => {
    let data = '';
    res.on('data', (chunk)=> { // data is event name here
      data = data + chunk.toString();
    })
    res.on('end', () => {
      let body = JSON.parse(data);
      cb(body);
    })
  });
  req.on('error', (err) => {
    cb(err);
  });
  req.end();
}

const isValidDate = (d) => {
  return d instanceof Date && !isNaN(d);
}

app.get('/stein/', async function(request, response) {

  response.status(200).send('Hello Nuxt Backend!');

});

app.get('/stein/data', async function(request, response) {

  await getAllList((res) => {
    
    if(request.query.search) {
      const regex = new RegExp(request.query.search.toLowerCase(), 'g');
      res = res.filter((item) => { 
        if(regex.test(String(item.komoditas).toLowerCase())) {
          return item;
        }
      });
    }

    if(request.query.city) {
      const regex = new RegExp(request.query.city.toLowerCase(), 'g');
      res = res.filter((item) => { 
        if(regex.test(String(item.area_kota).toLowerCase())) {
          return item;
        }
      });
    }

    if(request.query.province) {
      const regex = new RegExp(request.query.province.toLowerCase(), 'g');
      res = res.filter((item) => { 
        if(regex.test(String(item.area_provinsi).toLowerCase())) {
          return item;
        }
      });
    }

    if(request.query.size) {
      res = res.filter((item) => {
        switch (request.query.size_cond) {
          case 'gt':
            return Number(item.size) > Number(request.query.size);
          case 'gte':
            return Number(item.size) >= Number(request.query.size);
          case 'lt':
            return Number(item.size) < Number(request.query.size);
          case 'lte':
            return Number(item.size) <= Number(request.query.size);
          default:
            return Number(item.size) === Number(request.query.size);
        }
      });
    }

    if(request.query.price) {
      res = res.filter((item) => {
        switch (request.query.price_cond) {
          case 'gt':
            return Number(item.price) > Number(request.query.price);
          case 'gte':
            return Number(item.price) >= Number(request.query.price);
          case 'lt':
            return Number(item.price) < Number(request.query.price);
          case 'lte':
            return Number(item.price) <= Number(request.query.price);
          default:
            return Number(item.price) === Number(request.query.price);
        }
      });
    }

    if(request.query.order) {
      const sort = request.query.order.split(" ");
      const hasValue = res.filter((item) => item[sort[0]] !== null);
      const hasNoValue = res.filter((item) => item[sort[0]] == null);
      hasValue.sort((a, b) => {
        let type = 'string';
        if( !isNaN(a[sort[0]]) ){
          type = 'number';
        } else if (isValidDate(a[sort[0]])) {
          type = 'date';
        }
        let fa = type === 'date' ? new Date(a[sort[0]]) : type === 'string' ? String(a[sort[0]]).toLowerCase() : Number(a[sort[0]]), fb = type === 'date' ? new Date(b[sort[0]]) : type === 'string' ? String(b[sort[0]]).toLowerCase() : Number(b[sort[0]]);
            if (fa < fb) {
                return 1;
            }
            if (fa > fb) {
                return -1;
            }
            return 0;
      });
      res = [...hasValue, ...hasNoValue];
      if(!sort[1] || (String(sort[1]).toLowerCase() === 'asc')){
        res.reverse();
      }
    }

    const skip = request.query.skip ?? 0;
    const limit = request.query.limit ?? 10;
    const result = res.slice(skip, limit);

    response.status(200).send(result);

  });

});

app.get('/stein/area', async function(request, response) {

  await getAllArea((res) => {

    const skip = request.query.skip ?? 0;
    const limit = request.query.limit ?? 10;
    const result = res.slice(skip, limit);

    response.status(200).send(result);

  });

});


module.exports = {
  path: '/api/v1',
  handler: app
}