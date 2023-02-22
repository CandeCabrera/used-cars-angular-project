import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { Car } from './car.model';
import { CarsService } from './cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit, OnDestroy {
  inputValue: any;
  cars: Car[] = this.carService.getCars();
  subscription: any;
  isAddingNewCar = false;

  constructor(
    private dataStorage: DataStorageService,
    private carService: CarsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.subscription = this.carService.carsChanged.subscribe((cars: Car[]) => {
      this.cars = cars;
    });
    this.cars = this.carService.getCars();

    this.getCarsFromStorage();
  }

  getCarsFromStorage() {
    this.dataStorage.fetchCars().subscribe();
  }

  filterCars(e: any) {
    const newCarsArray = this.cars.filter((car) => {
      return car.category === e.target.value;
    });

    if (e.target.value) {
      this.cars = newCarsArray;
    } else {
      this.cars = this.carService.getCars();
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.filter) {
      const value = form.value.filter;
      this.filterCars(value);
    } else {
      this.cars = this.carService.getCars();
    }

    form.reset();
  }

  putCars() {
    this.dataStorage.storeCars();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  navigateNewCar() {
    this.isAddingNewCar = true;
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onCancel() {
    this.isAddingNewCar = false;
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
