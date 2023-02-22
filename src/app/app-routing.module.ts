import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { CarEditComponent } from './cars/car-edit/car-edit.component';
import { CarsComponent } from './cars/cars.component';
import { HappyClientsComponent } from './happy-clients/happy-clients.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
  {
    path: 'cars',
    component: CarsComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'new', component: CarEditComponent },
      { path: ':id/edit', component: CarEditComponent },
    ],
  },
  { path: 'about', component: AboutComponent },
  { path: 'happy-clients', component: HappyClientsComponent },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
