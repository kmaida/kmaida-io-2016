import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ApiService } from '../../core/API.service';

@Component({
  selector: 'restart-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  pageName: string = 'Work';
  loading: boolean;
  data: any;

  constructor(
    private titleService: Title,
    private api: ApiService) { }

  ngOnInit() {
    this.titleService.setTitle(this.pageName);
    this.loading = true;

    this.getData();
  }

  getData() {
    this.api.getWorkData$()
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

}
