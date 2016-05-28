'use strict';

let app = require('koa')();
let fs = require('fs');
let router = require('koa-router')();
let serve = require('koa-static-folder');

var render = function(src) {
  return new Promise(function (resolve, reject) {
    fs.readFile(src, {'encoding': 'utf8'}, function (err, data) {
      if(err) return reject(err);
      resolve(data);
    });
  });
}

router.get('/*', function * () {
	this.body = yield render(__dirname + "/dist/templates/index.html");
});

app.use(serve('./dist'));
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(9991);