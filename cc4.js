// Basic Car class:
class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} going at ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} going at ${this.speed} km/h`);
    }
}

// Implement EV Class:
class EV extends Car {
    constructor(make, speed, charge) {
        super(make, speed);
        this.charge = charge;
    }

    chargeBattery(chargeTo) {
        this.charge = chargeTo;
        console.log(`${this.make} battery charged to ${this.charge}%`);
    }

    accelerate() {
        this.speed += 20;
        this.charge -= 1;
        console.log(`${this.make} going at ${this.speed} km/h with a charge of ${this.charge}%`);
    }
}

// Test data: A 'Tesla' with starting speed 120 km/h and a battery charge of 23%
const tesla = new EV('Tesla', 120, 23);

// Tests:
tesla.accelerate(); // Tesla going at 140 km/h with a charge of 22%
tesla.brake(); // Tesla going at 135 km/h
tesla.chargeBattery(50); // Tesla battery charged to 50%
tesla.accelerate(); // Tesla going at 155 km/h with a charge of 49%
