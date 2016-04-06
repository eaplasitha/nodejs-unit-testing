var studentService = require('../services/studentService');

exports.getStudentById =function (req, res,callback) {
	//console.log('getStudent function in studentController');
	//console.log("req.query - "+JSON.stringify(req.query));
	studentService.getStudentById(req.query.id,function(student){
		if(student==null){
			res.send('This is invalid Student id : ' + JSON.stringify(req.query));
		}else{
			res.send('Student Details : ' + JSON.stringify(student));
		}
	});
}

exports.getStudentNameById =function (req, res,callback) {
	//console.log('getStudentName function in studentController');
	//console.log("req.query - "+JSON.stringify(req.query));
	studentService.getStudentById(req.query.id,function(student){
		if(student==null){
			res.send('This is invalid Student id : ' + JSON.stringify(req.query));
		}else{
			res.send('Student Name : ' + student.name);
		}
	});
}

exports.getStudentAgeById =function (req, res,callback) {
	//console.log('getStudentAge function in studentController');
	//console.log("req.query - "+JSON.stringify(req.query));
	studentService.getStudentById(req.query.id,function(student){
		if(student==null){
			res.send('This is invalid Student id : ' + JSON.stringify(req.query));
		}else{
			res.send('Student Age : ' + student.age);
		}
	});
}

exports.getStudentAddressById =function (req, res,callback) {
	//console.log('getStudentAddress function in studentController');
	//console.log("req.query - "+JSON.stringify(req.query));
	studentService.getStudentById(req.query.id,function(student){
		if(student==null){
			res.send('This is invalid Student id : ' + JSON.stringify(req.query));
		}else{
			res.send('Student Address : ' + student.address);
		}
	});
}