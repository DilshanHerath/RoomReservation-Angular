import { Component, OnInit } from '@angular/core';
import {AlertService} from 'ngx-alerts';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-room-reserve',
  templateUrl: './room-reserve.component.html',
  styleUrls: ['./room-reserve.component.css']
})
export class RoomReserveComponent implements OnInit {

  constructor(private alertService: AlertService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();

    }, 1000);

  }

}
