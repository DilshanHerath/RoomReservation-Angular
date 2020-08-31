import { Component, OnInit } from '@angular/core';
import {AlertService} from 'ngx-alerts';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private alertService: AlertService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  RoomAdd() {
    this.alertService.success('Room Added Successfully');
    console.log('Room Added Successfully');
  }

  // tslint:disable-next-line:typedef
  CategoryAdd() {
    this.alertService.success('Category Added Successfully');
    console.log('Category Added Successfully');

  }
}
