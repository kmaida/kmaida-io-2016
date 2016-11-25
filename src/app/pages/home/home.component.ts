import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs/Subscription';

import { MediacheckService } from '../../core/ui/mediacheck.service';
import { MqviewService } from '../../core/ui/mqview.service';
import { JSONDataService } from '../../core/JSONData.service';
import { UtilsService } from '../../core/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  pageName: string;
  data: any;
  loading: boolean = true;
  mqSub: Subscription;
  name: string = 'Visitor';
  stringOfHTML: string = '<strong>Some bold text</strong> bound as HTML with a <a href="#">link</a>!';

  constructor(
    private titleService: Title,
    private mqview: MqviewService,
    private mc: MediacheckService,
    private jsonData: JSONDataService,
    private global: UtilsService) { }

  ngOnInit() {
    this.loading = true;

    this.mqSub = this.mqview.isLarge$.subscribe(
      isLarge => console.log('subscribed', isLarge)
    );

    this.getData();
  }

  getData() {
    this.jsonData.getData$()
      .subscribe(
        res => {
          this.data = res;
          this.pageName = this.data.title;
          this.titleService.setTitle(this.pageName);
          this.loading = false;
        },
        err => {
          console.log(err);
          this.loading = false;
        }
      )
  }

  get isLoaded() {
    return this.loading === false;
  }

  ngOnDestroy() {
    this.mqSub.unsubscribe();
  }

}
