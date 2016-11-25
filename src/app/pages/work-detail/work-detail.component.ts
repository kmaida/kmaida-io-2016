import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';

import { ApiService } from '../../core/API.service';

@Component({
  selector: 'restart-workdetail',
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.scss']
})
export class WorkDetailComponent implements OnInit {
  pageName: string;
  loading: boolean;
  data: any;
  liveUrl: string;
  ossUrl: string;

  constructor(
    private titleService: Title,
    private api: ApiService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.loading = true;
    this.getData();
  }

  getData() {
    this.route.params.forEach((params: Params) => {
      let slug = params['slug'];

      this.api.getWorkDetailData$(slug)
        .subscribe(
          res => {
            this.data = res;
            console.log(this.data);
            this.pageName = this.data.title;
            this.titleService.setTitle(this.pageName);
            this.liveUrl = this.data.acf.live_url;
            this.ossUrl = this.data.acf.open_source_url;
            this.loading = false;
          },
          err => {
            console.log(err);
            this.loading = false;
          }
        );
    });
  }

  get isLoaded() {
    return this.loading === false;
  }

}
