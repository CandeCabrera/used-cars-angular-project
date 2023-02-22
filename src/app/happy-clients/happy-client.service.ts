import { Injectable } from '@angular/core';
import { HappyClients } from './happy-clients.model';

@Injectable({
  providedIn: 'root',
})
export class HappyClientsService {
  clients: HappyClients[] = [
    new HappyClients(
      'Ben Stone',
      'https://altrinchamautotecnic.co.uk/wp-content/uploads/2022/11/used-cars-for-sale-altrincham.jpg',
      4.5,
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'Best customer service'
    ),
    new HappyClients(
      'Josh Robinson',
      'https://media.ksdk.com/assets/KSDK/images/2329d4e0-f03e-4965-b7d8-a7065bd15a0d/2329d4e0-f03e-4965-b7d8-a7065bd15a0d_750x422.jpeg',
      4.7,
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. ',
      'Awesome Experience'
    ),
    new HappyClients(
      'Alice Rose',
      'https://www.wallaceautogroup.com/blogs/3002/wp-content/uploads/2021/06/used-car-test-drive.jpg',
      4,
      'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
      'I love my car'
    ),
    new HappyClients(
      'Juana Gomez',
      'https://s28126.pcdn.co/blogs/ask-experian/wp-content/uploads/How-to-Buy-a-New-Car-Online-1400x933-1-900x600.jpg',
      4.8,
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.',
      'Amazing prices'
    ),
    new HappyClients(
      'Anne Smith',
      'https://www.mechanicalbooster.com/wp-content/uploads/2022/08/New-vs-Used-Car.jpg',
      5,
      ' Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
      'Great Experience'
    ),
  ];

  getClients() {
    return this.clients.slice();
  }
}
