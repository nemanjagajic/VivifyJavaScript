// ES5 class aka function constructor
function Person(firstName, lastName, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.sayMyName = function() {
        console.log(`${firstName} ${lastName}`);
    }
}

// Student extends Person
function Student(firstName, lastName, gender, faculty) {
    Person.call(this, firstName, lastName, gender);
    this.faculty = faculty;
    // Overriding method
    this.sayMyName = function() {
        console.log(`I'm student ${firstName} ${lastName}`);
    }
}

Student.prototype = Object.create(Person.prototype);

// Plain objects
nemanja = new Person('Nemanja', 'Gajic', 'male');
nemanjaStudent = new Student('Nemanja', 'Gajic', 'male', 'PMF');

// Making json objects
nemanjaJson = JSON.stringify(nemanja);
nemanjaStudentJson = JSON.stringify(nemanjaStudent);

// Making array of JSON objects
persons = [nemanjaJson, nemanjaStudentJson];
