import { DatePipe, formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';
import { ReviewPage } from 'src/app/pages/review/review.page';
import { ProviderService } from 'src/app/services/provider.service';
import { StorageService } from 'src/app/services/storage.service';
import { CalModalPage } from '../cal-modal/cal-modal.page';

@Component({
  selector: 'app-appointment-provider',
  templateUrl: './appointment-provider.page.html',
  styleUrls: ['./appointment-provider.page.scss'],
})
export class AppointmentProviderPage implements OnInit {
  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  items: any;
  id: number;
  imgURL: string = this.providerSvc.imgURL;
  empty: number;


  eventSource = [];
  viewTitle: string;

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };

  selectedDate: Date;

  constructor(
    private storage: StorageService,
    private providerSvc: ProviderService,
    private router: Router,
    private alertCtrl: AlertController,
    @Inject(LOCALE_ID) private locale: string,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.storage.get('PROVIDER_INFO_DATA').then(
      (data) => {
        if (data != null) {
          this.id = data[0].provider_id;
          this.getAppointmentData(this.id);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  doRefresh(event) {
    this.getAppointmentData(this.id);
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

  getAppointmentData(id: number) {
    const postDataProvider = JSON.stringify({
      providerID: this.id,
    });

    this.providerSvc.postDataProvider('appointment-list.php', postDataProvider).subscribe(
      (data) => {
        if (data != null) {
          this.items = data;
          this.empty = 0;
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

  appointmentProfile(id: number) {
    this.router.navigate(['appointment-view-provider', id]);
  }
  onClickCalander(){
    this.router.navigate(['calander']);
  }
  next() {
    this.myCal.slideNext();
  }

  back() {
    this.myCal.slidePrev();
  }

  // Selected date reange and hence title changed
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  // Calendar event was clicked
  async onEventSelected(event) {
    // Use Angular date pipe for conversion
    let start = formatDate(event.startTime, 'medium', this.locale);
    let end = formatDate(event.endTime, 'medium', this.locale);

    const alert = await this.alertCtrl.create({
      header: event.title,
      subHeader: event.desc,
      message: 'From: ' + start + '<br><br>To: ' + end,
      buttons: ['OK'],
    });
    alert.present();
  }

  createRandomEvents() {
    var events = [];
    for (var i = 0; i < 50; i += 1) {
      var date = new Date();
      var eventType = Math.floor(Math.random() * 2);
      var startDay = Math.floor(Math.random() * 90) - 45;
      var endDay = Math.floor(Math.random() * 2) + startDay;
      var startTime;
      var endTime;
      if (eventType === 0) {
        startTime = new Date(
          Date.UTC(
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate() + startDay
          )
        );
        if (endDay === startDay) {
          endDay += 1;
        }
        endTime = new Date(
          Date.UTC(
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate() + endDay
          )
        );
        events.push({
          title: 'All Day - ' + i,
          startTime: startTime,
          endTime: endTime,
          allDay: true,
        });
      } else {
        var startMinute = Math.floor(Math.random() * 24 * 60);
        var endMinute = Math.floor(Math.random() * 180) + startMinute;
        startTime = new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate() + startDay,
          0,
          date.getMinutes() + startMinute
        );
        endTime = new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate() + endDay,
          0,
          date.getMinutes() + endMinute
        );
        events.push({
          title: 'Event - ' + i,
          startTime: startTime,
          endTime: endTime,
          allDay: false,
        });
      }
    }
    this.eventSource = events;
  }

  removeEvents() {
    this.eventSource = [];
  }

async openCalModal() {
  const modal = await this.modalCtrl.create({
    component: CalModalPage,
    cssClass: 'cal-modal',
    backdropDismiss: false
  });

  await modal.present();

  modal.onDidDismiss().then((result) => {
    if (result.data && result.data.event) {
      let event = result.data.event;
      if (event.allDay) {
        let start = event.startTime;
        event.startTime = new Date(
          Date.UTC(
            start.getUTCFullYear(),
            start.getUTCMonth(),
            start.getUTCDate()
          )
        );
        event.endTime = new Date(
          Date.UTC(
            start.getUTCFullYear(),
            start.getUTCMonth(),
            start.getUTCDate() + 1
          )
        );
      }
      this.eventSource.push(result.data.event);
      this.myCal.loadEvents();
    }
  });
}

}
