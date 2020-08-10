import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {AlertModule} from 'ngx-alerts';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import { RoomReserveComponent } from './component/room-reserve/room-reserve.component';
// import {MatDatepickerModule} from '@angular/material/datepicker';
// import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoomReserveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    // MatDatepickerModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, position: 'right'}),
    // MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
