/* eslint-disable eqeqeq */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControllersService } from 'src/app/services/controllers.service';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-register-provider',
  templateUrl: './register-provider.page.html',
  styleUrls: ['./register-provider.page.scss'],
})
export class RegisterProviderPage implements OnInit {
  formData: any = {};
  specialities: any;
  iconLink: string;
  gender: any;
  constructor(
    public ctrl: ControllersService,
    private providerSvc: ProviderService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getCategory();
  }
  getCategory() {
    this.providerSvc.getData('speciality.php').subscribe((data) => {
      if (data != null) {
        this.specialities = data;
        console.log(data);

        this.iconLink = this.providerSvc.iconURL;
      }
    });
  }
  registerUser() {
    if (
      this.formData.email != null &&
      this.formData.password != null &&
      this.formData.lastname != null &&
      this.formData.firstname != null &&
      this.formData.contact != null &&
      this.formData.gender != null &&
      this.formData.year != null &&
      this.formData.speciality != null
    ) {
      if (
        this.formData.lastname.match(this.ctrl.pattern.text) &&
        this.formData.firstname.match(this.ctrl.pattern.text)
      ) {
        if (this.formData.email.match(this.ctrl.pattern.email)) {
          if (this.formData.password.length < 8) {
            this.ctrl.alertPopUp(
              'Attention',
              'Password Must At Least 8 Character',
              'OK'
            );
          } else {
            if (this.formData.password != this.formData.confirm_password) {
              this.ctrl.alertPopUp(
                'Attention',
                'Confirm Password not Same',
                'OK'
              );
            } else {
              this.ctrl.presentLoading();
              const dataPost = new FormData();
              dataPost.append('inputlastname', this.formData.lastname);
              dataPost.append('inputfirstname', this.formData.firstname);
              dataPost.append('inputemail', this.formData.email);
              dataPost.append('inputspeciality', this.formData.speciality);
              dataPost.append('inputcontact', this.formData.contact);
              dataPost.append('inputgender', this.formData.gender);
              dataPost.append('inputyear', this.formData.year);
              dataPost.append('inputpassword', this.formData.password);
              dataPost.append('inputpassword', this.formData.confirm_password);
              this.providerSvc
                .postDataProvider('register.php', dataPost)
                .subscribe(
                  (res) => {
                    if (res[0] == 1) {
                      this.ctrl.alertPopUp('Successful', 'Added', 'OK');
                      this.ctrl.dismissLoading();
                      this.router.navigate(['business']);
                    } else {
                      this.ctrl.dismissLoading();
                      this.ctrl.alertPopUp(
                        'Attention',
                        'Email Already Exist',
                        'OK'
                      );
                    }
                  },
                  (error) => {
                    console.log(error);
                  }
                );
            }
          }
        } else {
          this.ctrl.alertPopUp('Attention', 'Invalid Email Format', 'OK');
        }
      } else {
        this.ctrl.alertPopUp(
          'Attention',
          'First/Lastname only text allow',
          'OK'
        );
      }
    } else {
      this.ctrl.alertPopUp('Attention', 'All fields are required', 'OK');
    }
  }
}
