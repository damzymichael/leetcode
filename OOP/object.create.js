const Person = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
};

const jay = Object.create(Person);

jay.init('Jay', 1947);

const Student = Object.create(Person);

Student.init = function (firstName, birthYear, course) {
  Person.init.call(this, firstName, birthYear);
  this.course = course;
};

const bola = Object.create(Student);

bola.init('Bola', 1920)

bola.calcAge()

console.log(bola)
