import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';


import {AppRoutingModule} from './app-routing.module';
import {AlertModule} from 'ngx-alerts';
import {AppComponent} from './app.component';
import {HomeComponent} from './component/home/home.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import {RoomReserveComponent} from './component/room-reserve/room-reserve.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSliderModule} from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {NavbarComponent} from './component/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoomReserveComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxSpinnerModule,
    MatDatepickerModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, position: 'right'}),
    MatSliderModule,
    MatSliderModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatNativeDateModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    MatButtonModule,
    MDBBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
