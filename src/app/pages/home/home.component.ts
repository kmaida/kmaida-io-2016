import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs/Subscription';

import { MediacheckService } from '../../core/ui/mediacheck.service';
import { MqviewService } from '../../core/ui/mqview.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  pageName: string = 'reStart-angular2';
  loading: boolean = true;
  mqSub: Subscription;

  constructor(
    private titleService: Title,
    private mqview: MqviewService,
    private mc: MediacheckService) { }

  ngOnInit() {
    this.titleService.setTitle(this.pageName);
    this.loading = false;

    this.mqSub = this.mqview.isLarge$.subscribe(
      isLarge => console.log('subscribed', isLarge)
    );
  }

  alertGreeting(name: string) {
    alert(`Hello, ${name}!`);
  }

  get isLoaded() {
    return this.loading === false;
  }

  ngOnDestroy() {
    this.mqSub.unsubscribe();
  }

}
