import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { MediacheckService } from './ui/mediacheck.service';
import { MqviewService } from './ui/mqview.service';

@Component({
  selector: 'restart-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  navOpen: boolean;
  minHeight: string;
  private initWinHeight: number = 0;

  constructor(private mc: MediacheckService, private mqview: MqviewService) { }

  ngOnInit() {
    this.setupResponsive();
    this.setupNavControl();
  }

  private setupResponsive() {
    // determine which media query is active on initial load and set
    this.mqview.setIsLarge(this.mc.check('large'));

    // set up listener for entering 'small' media query
    this.mc.onMqChange('small', (mql: MediaQueryList) => {
      this.mqview.setIsLarge(false);
    });

    // set up listener for entering 'large' media query
    this.mc.onMqChange('large', (mql: MediaQueryList) => {
      this.mqview.setIsLarge(true);
    });
  }

  private setupNavControl() {
    Observable.fromEvent(window, 'resize')
      .debounceTime(200)
      .subscribe((event) => {
        this.resizeFn(event);
      });

    this.initWinHeight = window.innerHeight;
    this.resizeFn(null);
  }

  private resizeFn(e) {
    let winHeight: number = e ? e.target.innerHeight : this.initWinHeight;
    this.minHeight = `${winHeight}px`;
  }

  navToggleHandler(e: boolean) {
    this.navOpen = e;
  }

}
