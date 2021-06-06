import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { SplashScreen } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { AuthenticationService } from './services/authentication.service';
import { StorageService } from './services/storage.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private router: Router,
    public storage: StorageService,
    private authenticateService: AuthenticationService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      this.storage.get('USER_INFO_DATA').then((res) => {
        if (res) {
          this.router.navigate(['home']);
        }
      });
      this.storage.get('PROVIDER_INFO_DATA').then((res) => {
        if (res) {
          this.router.navigate(['provider/home']);
        }
      });

      // this.authenticateService.authenticationState.subscribe(state => {
      //   if(state) {
      //     this.router.navigate(['home']);
      //     // this.router.navigate(['doctor/1']);
      //     // this.router.navigate(['clinic/1/doctor/1']);
      //   } else {
      //     this.router.navigate(['login']);
      //   }
      // });

    });
  }
}
