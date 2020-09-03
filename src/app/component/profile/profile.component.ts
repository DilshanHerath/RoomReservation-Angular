import {Component, OnInit} from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {AlertService} from 'ngx-alerts';
import {ImagePickerConf} from 'ngp-image-picker';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isDisabled = true;
  imagePickerConf: ImagePickerConf = {
    borderRadius: '4px',
    language: 'en',
    width: '320px',
    height: '240px',
  };

  constructor(private alertService: AlertService, private spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();

    }, 1000);

  }

  // tslint:disable-next-line:typedef
  btnsave() {
    this.isDisabled = false;
    this.alertService.warning('Please Create User Account');

  }

  // tslint:disable-next-line:typedef
  createAccount() {
    this.alertService.success('User Account Created');
  }

  // tslint:disable-next-line:typedef
  onImageChange($event: any) {
   this.alertService.success('Image');
  }
}
