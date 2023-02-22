import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css'],
})
export class CarEditComponent implements OnInit, OnDestroy {
  carForm: any;
  id: any;
  editMode: boolean = false;
  routeSub: any;

  constructor(
    private route: ActivatedRoute,
    private carsService: CarsService,
    private router: Router,
    private dataStorage: DataStorageService
  ) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  onSubmit() {
    this.carsService.addCar(this.carForm.value);
    this.dataStorage.storeCars();
    this.carForm.reset();
    this.onCancel();
  }

  onCancel() {
    this.editMode = false;
    this.carForm.reset();
  }

  ngOnDestroy(): void {
    this.onCancel();
    this.routeSub.unsubscribe();
  }

  private initForm() {
    let carModel = '';
    let carBrand = '';
    let carPrice = '';
    let carYear = '';
    let carMiles = '';
    let carColor = '';
    let carCategory = '';
    let carImagePath = '';

    if (this.editMode) {
      const car = this.carForm.getCar(this.id);
      carModel = car.model;
      carBrand = car.brand;
      carPrice = car.price;
      carYear = car.year;
      carMiles = car.miles;
      carColor = car.color;
      carCategory = car.category;
      carImagePath = car.imagePath;
    }

    this.carForm = new FormGroup({
      model: new FormControl(carModel, Validators.required),
      brand: new FormControl(carBrand, Validators.required),
      price: new FormControl(carPrice, Validators.required),
      year: new FormControl(carYear, Validators.required),
      miles: new FormControl(carMiles, Validators.required),
      color: new FormControl(carColor, Validators.required),
      category: new FormControl(carCategory, Validators.required),
      imagePath: new FormControl(carImagePath, Validators.required),
    });
  }
}
