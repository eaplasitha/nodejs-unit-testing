var request = require('supertest');
var express = require('express');
var path = require('path');

var routes = require('../routes/index');

var app = express();

app.use('/', routes);

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'jade');




describe('Testing http://localhost:3000/ request when application running.', function () {

  it('should return 200 on /', function (done) {

    request('http://localhost:3000')
      .get('/')
      .expect(200)
      .end(function(err, res){
        if (err) return done(err)
        res.status.should.equal(200);
        done()
      })

  })

})




describe('Testing http://localhost:3000/ request when application not running.', function () {

  it('should return 200 on /', function (done) {

    request(app)
      .get('/')
      .expect(200)
      .end(function(err, res){
        if (err) return done(err)
        done()
      })

  })

})