import { Component, OnInit } from '@angular/core';
import {AlertService} from 'ngx-alerts';
import {NgxSpinnerService} from 'ngx-spinner';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-room-reserve',
  templateUrl: './room-reserve.component.html',
  styleUrls: ['./room-reserve.component.css']
})
export class RoomReserveComponent implements OnInit {
  date: any;
  serializedDate: any;
  hideDelay: any;

  constructor(private alertService: AlertService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.hideDelay = new FormControl(10);
    }, 1000);

  }

}
