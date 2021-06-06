import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProviderService } from 'src/app/services/provider.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-tabs-provider',
  templateUrl: './tabs-provider.page.html',
  styleUrls: ['./tabs-provider.page.scss'],
})
export class TabsProviderPage implements OnInit {

  id: number;

  items: any;
  badge: number;

  constructor(
    public activatedRoute: ActivatedRoute,
    private providerSvc: ProviderService,
    private storage: StorageService
  ) {}

  ngOnInit() {
    // ! Try Weather Pass through the Tabs
    // this.activatedRoute.queryParams.subscribe((res) => {
    //   console.log(JSON.parse(res.value));
    // });
    this.storage.get('PROVIDER_INFO_DATA').then(
      (data) => {
        if (data != null) {
          console.log(data);
          this.id = data[0].doctor_id;
          this.getMessage(this.id);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getMessage(id: number) {
    const postData = JSON.stringify({
      patientID: id,
    });

    this.providerSvc.postDataProvider('message.php', postData).subscribe(
      (data) => {
        if (data != null) {
          this.items = data;

          this.badge = this.items.length;
        } else {
          this.badge = 0;
          console.log('No Data Available');
        }
      },
      (error) => {
        console.log('Load Failed', error);
      }
    );
  }

}
