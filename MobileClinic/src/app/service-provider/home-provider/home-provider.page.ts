import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { ProviderService } from 'src/app/services/provider.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-home-provider',
  templateUrl: './home-provider.page.html',
  styleUrls: ['./home-provider.page.scss'],
})
export class HomeProviderPage implements OnInit {
  items: any;
  providerID: any;
  providerFirstname: any;
  itemsApp: any;
  imgURL: string;

  businessID: any;
  patientID: string;
  appDate: any;
  appTime: any;
  patientName: string;
  patientEmail: string;
  speciality: string;
  patientAvatar: string;
  currentDate: string;

  empty: number;

  constructor(
    private storage: StorageService,
    private providerSvc: ProviderService,
    // private localNotifications: LocalNotifications,
    public datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.getData();
    this.promptNotify();
  }

  getData() {
    this.storage.get('PROVIDER_INFO_DATA').then(
      (data) => {
        console.log(data);
        if (data != null) {
          console.log(data);
          this.items = data;
          this.providerID = data[0].provider_id;
          this.providerFirstname = data[0].provider_firstname;
          // setTimeout(() => {
            this.getAppointmentData(this.providerID);
          // }, 1000);

          this.imgURL = this.providerSvc.imgURL;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getAppointmentData(providerID: number) {
    console.log(providerID);
    const postData = JSON.stringify({
      providerID,
    });
    console.log(postData);
    this.providerSvc
      .postDataProvider('appointment-list.php', postData)
      .subscribe(
        (appdata) => {
          console.log(appdata);
          if (appdata != null) {
            this.empty = 0;
            this.businessID = appdata[0].business_id;
            this.patientID = appdata[0].patient_id;
            this.patientName =
              appdata[0].patient_lastname + ' ' + appdata[0].patient_firstname;
            this.patientAvatar = appdata[0].patient_avatar;
            this.appDate = appdata[0].app_date;
            this.appTime = appdata[0].app_time;
            this.patientEmail = appdata[0].pa;
            this.speciality = appdata[0].speciality_name;
            const currentDate = this.datePipe.transform(
              new Date().toLocaleString(),
              'yyyy-MM-dd'
            );
            if (this.appDate > currentDate) {
              this.promptNotify();
            }
          } else {
            this.empty = 1;
            console.log('No Data Available');
          }
        },
        (error) => {
          console.log('Load Failed', error);
        }
      );
  }

  promptNotify() {
    // this.localNotifications.schedule({
    //   id: 1,
    //   title: 'Reminder',
    //   text:
    //     'Hey' +
    //     this.providerFirstname +
    //     ', Your have appointment with ' +
    //     this.patientName +
    //     ' on ' +
    //     this.appDate +
    //     ' We are looking forward to seeing you at ' +
    //     this.appTime,
    // });
  }
}
