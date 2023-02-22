export class HappyClients {
  public name: string;
  public imagePath: string;
  public rate: number;
  public comment: string;
  public title: string;

  constructor(
    name: string,
    imagePath: string,
    rate: number,
    comment: string,
    title: string
  ) {
    this.name = name;
    this.imagePath = imagePath;
    this.rate = rate;
    this.comment = comment;
    this.title = title;
  }
}
