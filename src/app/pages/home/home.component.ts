import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs/Subscription';

import { MediacheckService } from '../../core/ui/mediacheck.service';
import { MqviewService } from '../../core/ui/mqview.service';
import { ApiService } from '../../core/API.service';

@Component({
  selector: 'restart-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  pageName: string = 'Hello';
  data: any;
  loading: boolean = true;
  mqSub: Subscription;

  constructor(
    private titleService: Title,
    private mqview: MqviewService,
    private mc: MediacheckService,
    private api: ApiService) { }

  ngOnInit() {
    this.titleService.setTitle(this.pageName);
    this.loading = true;

    this.mqSub = this.mqview.isLarge$.subscribe(
      isLarge => console.log('subscribed', isLarge)
    );

    this.getData();
  }

  getData() {
    this.api.getHomeData$()
      .subscribe(
        res => {
          this.data = res;
          console.log(this.data);
          this.loading = false;
        },
        err => {
          console.log(err);
          this.loading = false;
        }
      );
  }

  get isLoaded() {
    return this.loading === false;
  }

  ngOnDestroy() {
    this.mqSub.unsubscribe();
  }

}
