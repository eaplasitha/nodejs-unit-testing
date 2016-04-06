var should = require('should');

describe('Mocha Test Demo', function() {

	

	//Synchronous Code
	describe('Array', function() {
	  describe('#indexOf()', function() {
	    it('should return -1 when the value is not present', function() {
	      [1,2,3].indexOf(5).should.equal(-1);
	      [1,2,3].indexOf(0).should.equal(-1);
	    });
	  });
	});


	//Asynchronous Code
	describe('User', function() {
	  describe('#save()', function() {
	    it('should save without error', function(done) {
	      //var user = new User('Luna');
	      //user.save(function(err) {
	      //  if (err) throw err;
	        done();
	      //});
	    });
	  });
	});

	//Hooks
	//Mocha provides the hooks before(), after(), beforeEach(), and afterEach(), which can be used to set up preconditions and clean up after your tests.

	//All "hooks" (before(), after(), beforeEach(), afterEach()) may be sync or async as well,
	// behaving much like a regular test-case. For example, 
	//you may wish to populate database with dummy content before each test:

	describe('hooks', function() {

	  before(function() {
	    // runs before all tests in this block
	    console.log('                *****before');
	  });

	  after(function() {
	    // runs after all tests in this block
	    console.log('                *****after');
	  });

	  beforeEach(function() {
	    // runs before each test in this block
	    console.log('                *****beforeEach');
	  });

	  afterEach(function() {
	    // runs after each test in this block
	    console.log('                *****afterEach');
	  });

	  //test cases 1
		describe('Test Suite 1', function() {
		  describe('Test Suite 1.1', function() {
		    it('Test cases.1.1', function() {
		      [1,2,3].indexOf(5).should.equal(-1);
		    });
		  });
		  describe('Test Suite 1.2', function() {
		    it('Test cases.1.2', function() {
		      [1,2,3].indexOf(5).should.equal(-1);
		    });
		  });
		});

		//test cases 2
		describe('Test Suite 2', function() {
		  describe('Test Suite 2.1', function() {
		    it('Test verification.2.1', function() {
		      [1,2,3].indexOf(5).should.equal(-1);
		    });
		  });
		  describe('Test Suite 2.2', function() {
		    it('Test cases.2.2', function() {
		      [1,2,3].indexOf(5).should.equal(-1);
		    });
		  });
		});

	});

	console.log('process need 5 sec...');

	//Delayed Root Suite
	//If you need to perform asynchronous operations before any of your 
	//suites are run, you may delay the root suite. Simply run Mocha with 
	//the --delay flag. This will provide a special function, run(), in the global context.
	setTimeout(function() {
	  // do some setup

	  describe('Delayed Root Suite', function() {
	  describe('#save()', function() {
	    it('should save without error', function(done) {
	      //var user = new User('Luna');
	      //user.save(function(err) {
	      //  if (err) throw err;
	        done();
	      //});
	    });
	  });
	});

	  run();
	}, 5000);


	//Pending Tests
	//"Pending"--as in "someone should write these test cases eventually"--test-cases are simply those without a callback:
	describe('Pending test Suite 2', function() {
	  describe('Pending test Suite 2', function() {
	    // pending test below
	    it('should return -1 when the value is not present');
	  });
	});


});




