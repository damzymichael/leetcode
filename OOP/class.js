class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2024 - this.birthYear);
  }

  greet() {
    console.log('Hey ' + this.fullName);
  }

  get age() {
    return 2024 - this.age;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else throw new Error(name + ' is not a full name');
  }

  get fullName() {
    return this._fullName;
  }

  //Static method on the class
  static hey() {
    console.log('Hey there 👋');
  }
}

class Student extends Person {
  //Unnecessary if we're using the exact same features as Person class
  constructor(fullName, birthYear, course) {
    //Must happen first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    const {fullName, birthYear, course} = this;
    console.log(`
      My name is ${fullName}
      I was born in ${birthYear}
      And I study ${course}
    `);
  }
  //Overrides calc age in person
  calcAge() {
    console.log('Do nothing');
  }
}

class Account {
  #movements
  #pin
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    this.#movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account ${owner}`);
  }

  deposit(value) {
    this.#movements.push(value);
  }

  //Convention for private function
  _withdraw(value) {
    this.deposit(-value);
  }

  #approveLoan(val) {
    return true;
  }
  requestLoan(value) {
    if (this.#approveLoan(value)) {
      this.deposit(value);
      console.log('Loan');
    }
  }
}

const acc1 = new Account('Michael', 'NGN', 2000);
acc1.deposit(100);
acc1._withdraw(50);

console.log(acc1);
