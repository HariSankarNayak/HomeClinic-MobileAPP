import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'src/app/services/provider.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  items: any;
  patientID: any;
  patientFirstname: any;
  itemsApp: any;
  imgURL: string;

  clinicID: any;
  doctorID: string;
  appDate: any;
  appTime: any;
  doctorName: string;
  speciality: string;
  doctorAvatar: string;
  currentDate: string;

  empty: number;

  constructor(
    private storage: StorageService,
    private providerSvc: ProviderService,
    public datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.getData();
    this.promptNotify();
  }

  getData() {
    this.storage.get('USER_INFO_DATA').then(
      (data) => {
        console.log(data);
        if (data != null) {
          this.items = data;
          this.patientID = data[0].patient_id;
          this.patientFirstname = data[0].patient_firstname;
          this.getAppointmentData(this.patientID);
          this.imgURL = this.providerSvc.imgURL;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getAppointmentData(patientID: number) {
    const postData = JSON.stringify({
      patientID: this.patientID,
    });
    this.providerSvc.postDataProvider('appointment-list.php', postData).subscribe(
      (appdata) => {

        if (appdata != null) {
          this.empty = 0;
          this.clinicID = appdata[0].clinic_id;
          this.doctorID = appdata[0].doctor_id;
          this.doctorName =
            appdata[0].doctor_lastname + ' ' + appdata[0].doctor_firstname;
          this.doctorAvatar = appdata[0].doctor_avatar;
          this.appDate = appdata[0].app_date;
          this.appTime = appdata[0].app_time;
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
    //     this.patientFirstname +
    //     ', Your have appointment with ' +
    //     this.doctorName +
    //     ' on ' +
    //     this.appDate +
    //     ' We are looking forward to seeing you at ' +
    //     this.appTime,
    // });
  }
}
