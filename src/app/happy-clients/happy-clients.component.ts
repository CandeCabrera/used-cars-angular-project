import { Component } from '@angular/core';
import { HappyClientsService } from './happy-client.service';
import { HappyClients } from './happy-clients.model';

@Component({
  selector: 'app-happy-clients',
  templateUrl: './happy-clients.component.html',
  styleUrls: ['./happy-clients.component.css'],
})
export class HappyClientsComponent {
  clients: HappyClients[] = this.happyClientsService.getClients();
  isShorten: boolean = true;

  constructor(private happyClientsService: HappyClientsService) {}

  seeMore(index: number) {
    this.isShorten = !this.isShorten;
    return this.clients[index].comment;
  }
  hide() {
    this.isShorten = true;
  }
}
