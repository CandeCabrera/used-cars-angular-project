import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarsService } from '../cars/cars.service';
import { Car } from '../cars/car.model';
import { take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private carsService: CarsService, private http: HttpClient) {}

  storeCars() {
    const cars = this.carsService.getCars();
    this.http
      .put<Car[]>(
        'https://your-car-128d4-default-rtdb.firebaseio.com/cars.json',
        cars
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  postCars() {}

  fetchCars() {
    return this.http
      .get<Car[]>(
        'https://your-car-128d4-default-rtdb.firebaseio.com/cars.json'
      )
      .pipe(
        tap((cars: Car[]) => {
          this.carsService.setCars(cars);
        })
      );
  }

  deleteCars(index: number) {
    this.http
      .delete(
        `https://your-car-128d4-default-rtdb.firebaseio.com/cars/${index}/.json`
      )
      .pipe(take(1));
    this.carsService.deleteCar(index);
    this.storeCars();
  }
}
