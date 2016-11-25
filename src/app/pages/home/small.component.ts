import { Component, Input } from '@angular/core';

@Component({
  selector: 'restart-small',
  template: `
    <ul>
      <li *ngFor="let animal of animals">{{animal.name}} ({{animal.class}})</li>
    </ul>
  `,
  styles: [`
  `]
})
export class SmallComponent { 
  @Input() animals: any[];
}
