import {Component, OnInit} from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {AlertService} from 'ngx-alerts';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private alertService: AlertService, private router: Router ) {
  }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();

    }, 1000);

  }


  // tslint:disable-next-line:typedef
  DeluxeRoom() {
    // this.alertService.success('Stundent registration successfully!');
    this.router.navigate(['/reserveRoom']);
  }
}


