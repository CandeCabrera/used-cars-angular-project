import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarsComponent } from './cars/cars.component';
import { AboutComponent } from './about/about.component';
import { AuthComponent } from './auth/auth.component';
import { HappyClientsComponent } from './happy-clients/happy-clients.component';
import { CarEditComponent } from './cars/car-edit/car-edit.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CarsService } from './cars/cars.service';
import { CarItemComponent } from './cars/car-item/car-item.component';
import { ShortenPipe } from './shorten.pipe';
import { ClientComponent } from './happy-clients/client/client.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AlertComponent } from './shared/alert/alert.component';
import { PlaceholderDirective } from './shared/placeholder/placeholder.directive';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarsComponent,
    AboutComponent,
    AuthComponent,
    HappyClientsComponent,
    CarEditComponent,
    CarItemComponent,
    ShortenPipe,
    ClientComponent,
    AlertComponent,
    PlaceholderDirective,
    AuthComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    NgbCarouselModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
  ],
  providers: [
    CarsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
