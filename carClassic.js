/*
MIT License

Copyright (c) 2020 Jean-Jacques François Reibel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
var Car = function(wheels, doors, cylinders) {
  this.wheels = wheels;
  this.doors = doors;
  this.cylinders = cylinders;
}

Car.prototype.addWheels = function(wheelsIn) {
  this.wheels = this.wheels + wheelsIn;
};
Car.prototype.addDoors = function(doorsIn) {
  this.doors = this.doors + doorsIn;
};
Car.prototype.addCylinders = function(cylindersIn) {
  this.cylinders = this.cylinders + cylindersIn;
};
Car.prototype.deleteWheels = function(wheelsIn) {
  this.wheels = this.wheels - wheelsIn;
};
Car.prototype.deleteDoors = function(doorsIn) {
  this.doors = this.doors - doorsIn;
};
Car.prototype.deleteCylinders = function(cylindersIn) {
  this.cylinders = this.cylinders - cylindersIn;
};

Car.prototype.printInfo = function() {
  console.log("Wheel check: " + this.wheels);
  console.log("Door check: " + this.doors);
  console.log("Cylinder check: " + this.cylinders + "\n");
};

console.log("Creating car.");
let subaru = new Car(4, 4, 4);
subaru.printInfo();
console.log("Adding wheel directly to car object.");
subaru.wheels += 1;
subaru.printInfo();
console.log("Removing wheel using object method.");
subaru.deleteWheels(1);
subaru.printInfo();


