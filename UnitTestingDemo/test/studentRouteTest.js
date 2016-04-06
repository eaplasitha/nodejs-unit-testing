var request = require('supertest');
var express = require('express');
var should = require('should');
var path = require('path');

var routes = require('../routes/student');

var app = express();

app.use('/student', routes);

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'jade');



describe('Testing http://localhost/student/age?id=1001 request when application running.', function () {
  var s;
  it('Should return 200 on /student/age?id=1001 and correct message(Student Age : 30).', function (done) {

   s = app.listen(function() {
      var url = 'http://localhost:' + s.address().port;

      request(url)
        .get('/student/age?id=1001')
        .expect(200)
        .expect('Student Age : 30')
        .end(function(err, res){
          if (err) return done(err)
          res.status.should.equal(200);
          res.text.should.equal('Student Age : 30');
          done()
        })
    });
  });

  it('Should return 200 on http://localhost/student/age?id=1005 and correct message(This is invalid Student id : {"id":"1005"}).', function (done) {

   s = app.listen(function() {
      var url = 'http://localhost:' + s.address().port;

      request(url)
      .get('/student/age?id=1005')
      .expect(200)
      .expect('This is invalid Student id : {"id":"1005"}')
      .end(function(err, res){
        if (err) return done(err)
        res.status.should.equal(200);
        res.text.should.equal('This is invalid Student id : {"id":"1005"}');
        done()
      })
    });
  });

})




describe('Testing http://localhost:3000/student/age?id=1001 request when application not running.', function () {

  it('Should return 200 on /student/age?id=1001 and correct message(Student Age : 30).', function (done) {

    request(app)
      .get('/student/age?id=1001')
      .expect(200)
      .end(function(err, res){
        if (err) return done(err)
        res.status.should.equal(200);
        res.text.should.equal('Student Age : 30');
        done()
      })

  });

  it('Should return 200 on http://localhost/student/age?id=1005 and correct message(This is invalid Student id : {"id":"1005"}).', function (done) {

    request(app)
      .get('/student/age?id=1005')
      .expect(200)
      .expect('This is invalid Student id : {"id":"1005"}')
      .end(function(err, res){
        if (err) return done(err)
        res.status.should.equal(200);
        res.text.should.equal('This is invalid Student id : {"id":"1005"}');
        done()
      })

    });

})
