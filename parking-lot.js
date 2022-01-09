// Design a parking lot using object-oriented principles
//
// Goals:
// - Your solution should be in Java - if you would like to use another language, please let the interviewer know.
// - Boilerplate is provided. Feel free to change the code as you see fit
//
// Assumptions:
// - The parking lot can hold motorcycles, cars and vans
// - The parking lot has motorcycle spots, car spots and large spots
// - A motorcycle can park in any spot
// - A car can park in a single compact spot, or a regular spot
// - A van can park, but it will take up 3 regular spots
// - These are just a few assumptions. Feel free to ask your interviewer about more assumptions as needed
//
// Here are a few methods that you should be able to run:
// - Tell us how many spots are remaining
// - Tell us how many total spots are in the parking lot
// - Tell us when the parking lot is full
// - Tell us when the parking lot is empty
// - Tell us when certain spots are full e.g. when all motorcycle spots are taken
// - Tell us how many spots vans are taking up
//
// Hey candidate! Welcome to your interview. I'll start off by giving you a Solution class. To run the code at any time, please hit the run button located in the top left corner.
// Parking lot has 3 parking spot types
// Car can be
// Van takes 3 regular spots.

const vehicles = {
  numMotorcycles: 10,
  numCars: 20,
  numVans: 2,
};

const exampleParkingLot = {
  regularSpots: 50,
};

class ParkingLot {
  constructor(spots) {
    // the values that each type of vehicle take up as parking spots in the parking lot
    this.motorcycle = 1;
    this.car = 1;
    this.van = 3;
    // the spots object with reg and compact
    this.spots = spots;
    this.remainingSpots = 0;
    // sum number of van, motors, cars
    this.numVans = 0;
    this.numMotorcycles = 0;
    this.numCars = 0;
  }

  getTotalSpots() {
    return this.spots.regularSpots;
  }

  setInitialSpots() {
    this.remainingSpots = this.getTotalSpots();
  }

  setLot(vehiclesObj) {
    this.numMotorcycles = vehiclesObj.numMotorcycles;
    this.numCars = vehiclesObj.numCars;
    this.numVans = vehiclesObj.numVans;
    this.setInitialSpots();
  }

  setRemainingSpots() {
    this.remainingSpots -= this.numMotorcycles * this.motorcycle;
    this.remainingSpots -= this.numCars * this.car;
    this.remainingSpots -= this.numVans * this.van;
  }

  checkIfEmpty() {
    return this.remainingSpots <= 0;
  }

  checkIfLotIsEmpty() {
    return (this.remainingSpots = this.getTotalSpots());
  }

  getTheVans() {
    return this.numVans * this.van;
  }
}

const firstParkingLot = new ParkingLot(exampleParkingLot);
firstParkingLot.setLot(vehicles);
firstParkingLot.setRemainingSpots();
console.log(firstParkingLot);
