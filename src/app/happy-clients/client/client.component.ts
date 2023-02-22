import { Component, Input } from '@angular/core';
import { HappyClientsService } from '../happy-client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent {
  isShorten: boolean = true;
  @Input() client: any;
  @Input() index: any;

  constructor(private happyClientsService: HappyClientsService) {}

  seeMore(index: number) {
    this.isShorten = false;
    return this.client.comment;
  }
  hide() {
    this.isShorten = true;
  }
}
