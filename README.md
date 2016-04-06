# nodejs-training

Note:Unit Testing
=================

-Unit testing in nodejs.

	mocha 

-Assertion in nodejs.

	should

-Route testing in nodejs.

	SuperTest

-Mocking in nodejs.

	nock

-Testing coverage in nodejs.

	istanbul


Mocha (Unittest)
=============

Mocha is a feature-rich JavaScript test framework running on Node.js and , making asynchronous testing simple and fun. 

-Install mocha as an npm module and save it to your package.json file as a development dependency.

		npm install mocha --save-dev

-Create folder called test.

		mkdir test

-writing test methods in test folder.

		var should = require('should');

		describe('Array', function() {

		  describe('#indexOf()', function () {

		    it('should return -1 when the value is not present', function () {

		      assert.equal(-1, [1,2,3].indexOf(5));

		      assert.equal(-1, [1,2,3].indexOf(0));

		    });

		  });

		});

-Command for run mocha test.

		mocha

-Documentation 	http://mochajs.org/

	
Should (Assertions)
=============

should is an expressive, readable, test framework agnostic, assertion library. Main goals of this library to be expressive andto be helpful. It keeps your test code clean, and your error messages helpful.

-Install should as an npm module and save it to your package.json file as a development dependency.

		npm install should --save-dev

-Require it and use

		var should = require('should');

		var user = {

		    name: 'tj'

		  , pets: ['tobi', 'loki', 'jane', 'bandit']

		};

		user.should.have.property('name', 'tj');

		user.should.have.property('pets').with.lengthOf(4);

-Documentation

	https://github.com/tj/should.js


SuperTest (Route testing)
=============


-this module is to provide a high-level abstraction for testing HTTP.

-Install SuperTest as an npm module and save it to your package.json file as a development dependency.

		npm install supertest --save-dev

-Once installed it can now be referenced by simply calling.

		require("supertest");

-SuperTest works with any test framework. we use mocha.

-pass an http.Server, or a Function to request()	request(app)

-test get request.                                    		.get('/user')

-test post request.						.post('/')

-set header values						.set('Accept', 'application/json')

-set payload values.						.field('name', 'my awesome avatar')

-set atachments.						.attach('avatar', 'test/fixtures/homeboy.jpg')

-if expect 200 and positive test.				.expect(200, done)

-If expect 200 and negative test.				.expect(200)

-return the assertion as an error to the .end() callback

		.end(function(err, res){

			if (err) return done(err);

			done();

	    	})

-Documentation

	https://github.com/visionmedia/supertest

	https://github.com/visionmedia/supertest/blob/master/test/supertest.js


Nock (Mockng)
=============


Nock is an HTTP mocking and expectations library for Node.js

Nock can be used to test modules that perform HTTP requests in isolation.


-Install nock as an npm module and save it to your package.json file as a development dependency.

	npm install nock --save-dev

-Require it and use

		var nock = require('nock');

		var couchdb = nock('http://myapp.iriscouch.com')

                .get('/users/1')

                .reply(200, {

                  _id: '123ABC',

                  _rev: '946B7D1C',

                  username: 'pgte',

                  email: 'pedro.teixeira@gmail.com'

                 });

-Documentation

	https://github.com/node-nock/nock




istanbul (Coverage)
===================


A JS code coverage tool written in JS.


-Install mocha as an npm module and save it to your package.json file as a development dependency.

	npm install istanbul --save-dev


-Amend your npm test script

		"scripts": {

			"test":"./node_modules/.bin/istanbul test ./node_modules/.bin/_mocha -- -R spec"

		}

-You can now run your tests with

		npm test

-And generate a coverage report

		npm test --coverage

-And an html coverage report at     

		./coverage

-Documentation	https://github.com/gotwarlost/istanbul



