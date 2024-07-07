//? Constructor functions
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.fly = function () {
  console.log('flying');
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.constructor = EV;

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge += chargeTo;
  console.log(this.charge);
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;

  console.log(
    `${this.make} going at ${this.speed}km/h with a charge of ${this.charge}%`
  );
};

EV.prototype.fly = function () {
  console.log('flying higher');
};

const tesla = new EV('Tesla', 200, 30);

console.log(tesla);

tesla.chargeBattery(30);

tesla.accelerate();

tesla.fly();
