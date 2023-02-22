import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Car } from './car.model';

@Injectable()
export class CarsService {
  carsChanged = new Subject<Car[]>();
  isEditMode = new Subject<boolean>();
  editMode = false;

  private cars: Car[] = [];

  getCars() {
    return this.cars?.slice();
  }

  getCar(index: number) {
    return this.cars[index];
  }

  setCars(cars: Car[]) {
    this.cars = cars;
    this.carsChanged?.next(this.cars);
  }

  addCar(car: Car) {
    this.cars.push(car);
    this.carsChanged.next(this.cars.slice());
  }

  updateCar(index: number, newCar: Car) {
    this.cars[index] = newCar;
    this.carsChanged.next(this.cars.slice());
  }

  deleteCar(index: number) {
    this.cars.splice(index, 1);
    this.carsChanged.next(this.cars.slice());
  }
}
