import { Component, OnInit } from '@angular/core';
import {AlertService} from 'ngx-alerts';

@Component({
  selector: 'app-room-reserve',
  templateUrl: './room-reserve.component.html',
  styleUrls: ['./room-reserve.component.css']
})
export class RoomReserveComponent implements OnInit {

  constructor(private alertService: AlertService) { }

  ngOnInit(): void {
   // mdbCarousel3d();
  }

}
