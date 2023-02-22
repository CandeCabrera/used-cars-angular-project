import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { Car } from './car.model';
import { CarsService } from './cars.service';

Injectable({ providedIn: 'root' });
export class CarResolverService implements Resolve<Car[]> {
  constructor(
    private dataStorage: DataStorageService,
    private carsService: CarsService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const cars = this.carsService.getCars();
    if (cars.length === 0) {
      return this.dataStorage.fetchCars();
    } else {
      return cars;
    }
  }
}
