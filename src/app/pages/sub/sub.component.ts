import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'restart-sub',
  templateUrl: './sub.component.html'
})
export class SubComponent implements OnInit {
  pageName: string = 'Subpage';

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle(this.pageName);
  }

}
