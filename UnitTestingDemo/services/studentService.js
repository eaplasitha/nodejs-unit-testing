var student={
  "student": [
    {
      "id": "1001",
      "name": "lasitha",
      "age": "30",
      "address": "boralesgamuwa"
    },
    {
      "id": "1002",
      "name": "lasitha",
      "age": "30",
      "address": "boralesgamuwa"
    },
    {
      "id": "1003",
      "name": "lasitha",
      "age": "30",
      "address": "boralesgamuwa"
    }
  ]
};

exports.getStudentById =function (id, callback) {
	var selectedStudent;
	//console.log('getStudent function in studentService');
	//console.log(student);
	//console.log(student.student[1]);
	for(var i in student.student) {
		//console.log(student.student[i]);
		if(student.student[i].id==id){
			//console.log('std.id  '+student.student[i].id);
			selectedStudent=student.student[i];
		}
  }
  callback(selectedStudent);
}
