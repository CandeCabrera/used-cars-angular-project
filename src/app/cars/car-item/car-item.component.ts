import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css'],
})
export class CarItemComponent implements OnInit {
  @Input() car: any;
  @Input() index: any;
  modalToggle = false;
  carFormEdit: any;
  id: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private carsService: CarsService,
    private dataStorage: DataStorageService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.modalToggle = params['id'] != null;
      this.initForm();
    });
  }

  onEdit() {
    this.modalToggle = true;
    this.router.navigate([this.index, 'edit'], { relativeTo: this.route });
  }

  onEditCar() {
    this.router.navigate([this.index, 'edit'], { relativeTo: this.route });
  }

  onDelete() {
    this.dataStorage.deleteCars(this.index);
  }

  onSubmit() {
    this.carsService.updateCar(this.index, this.carFormEdit.value);
    this.dataStorage.storeCars();
    this.onCancel();
    this.modalToggle = false;
  }

  onCancel() {
    this.modalToggle = false;
    this.router.navigate(['/cars']);
  }

  private initForm() {
    const car = this.carsService.getCar(this.index);
    let carModel = car.model;
    let carBrand = car.brand;
    let carPrice = car.price;
    let carYear = car.year;
    let carMiles = car.miles;
    let carColor = car.color;
    let carCategory = car.category;
    let carImagePath = car.imagePath;

    this.carFormEdit = new FormGroup({
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
