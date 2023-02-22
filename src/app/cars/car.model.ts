export class Car {
  public model: string;
  public brand: string;
  public price: number;
  public year: number;
  public miles: number;
  public color: string;
  public category: string;
  public imagePath: string;

  constructor(
    model: string,
    brand: string,
    price: number,
    year: number,
    miles: number,
    color: string,
    category: string,
    imagePath: string
  ) {
    this.model = model;
    this.brand = brand;
    this.price = price;
    this.year = year;
    this.miles = miles;
    this.color = color;
    this.category = category;
    this.imagePath = imagePath;
  }
}
