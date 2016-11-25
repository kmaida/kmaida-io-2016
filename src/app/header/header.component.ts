import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { MqviewService } from '../core/ui/mqview.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() navToggled = new EventEmitter();
  navOpen: boolean = false;
  mqSub: Subscription;

  constructor(
    private router: Router,
    private mqview: MqviewService) { }

  ngOnInit() {
    this.router.events
      .filter(event => event instanceof NavigationStart && this.navOpen)
      .subscribe(event => this.toggleNav());

    this.mqSub = this.mqview.isLarge$.subscribe(
      isLarge => {
        if (this.navOpen) {
          this.toggleNav();
        }
      }
    );
  }

  toggleNav() {
    this.navOpen = !this.navOpen;
    this.navToggled.emit(this.navOpen);
  }

  ngOnDestroy() {
    this.mqSub.unsubscribe();
  }

}
