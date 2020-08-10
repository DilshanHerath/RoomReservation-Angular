import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {AlertModule} from 'ngx-alerts';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import { RoomReserveComponent } from './component/room-reserve/room-reserve.component';

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
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, position: 'right'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
