import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: '<img class="loading" src="/assets/images/ripple.gif">',
  styles: [`
    .loading {
      display: block;
      height: 60px;
      margin: 30px auto;
      width: 60px;
    }
  `]
})
export class LoadingComponent { }
