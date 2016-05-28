'use strict';

let jwt = require('jwt-simple');

let payload = {
  "d": {
    "uid": "SALES_AGENT",
    "isAdmin": true
  },
  "v": 0,
  // "iat": (new Date()).getTime()/1000
  "iat": 1462700502
};

let secret = 'B7ioKnRoaf6ORCU4p8qUeAETTVcqBVykYIbeSEpF';

var token = jwt.encode(payload, secret);

var decoded = jwt.decode(token, secret);
console.log(decoded, token);