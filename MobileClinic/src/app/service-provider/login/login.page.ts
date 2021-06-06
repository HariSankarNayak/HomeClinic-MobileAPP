import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ControllersService } from 'src/app/services/controllers.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formData: any = {};
  memberID: number;

  constructor(
    public router: Router,
    public http: HttpClient,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public storage: StorageService,
    private authSerive: AuthenticationService,
    public ctrl: ControllersService
  ) {}

  ngOnInit() {}

  loginProvider() {
    if (this.formData.email != null && this.formData.password != null) {
      if (this.formData.email.match(this.ctrl.pattern.email)) {
        this.authSerive.loginProviderSer(this.formData.email, this.formData.password);
      } else {
        this.alertPopUp('Attention', 'Invalid Email Format!', 'Try Again');
      }
    } else {
      this.alertPopUp(
        'Attention',
        'Email & Password Field is Empty!',
        'Try Again'
      );
    }
  }

  register() {
    this.router.navigate(['../register-provider']);
  }
  loginPatient() {
    this.router.navigate(['../login']);
  }

  async alertPopUp(hdr: string, msg: string, btn: string) {
    const alert = await this.alertCtrl.create({
      header: hdr,
      message: msg,
      buttons: [btn],
    });
    await alert.present();
  }

}
