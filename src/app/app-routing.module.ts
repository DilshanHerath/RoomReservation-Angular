import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoomReserveComponent} from './component/room-reserve/room-reserve.component';
import {HomeComponent} from './component/home/home.component';
import {ProfileComponent} from './component/profile/profile.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {path: 'home', component: HomeComponent},
  {path: 'reserveRoom', component: RoomReserveComponent},
  {path: 'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
