import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from '../pages/home/home.component';
import { WorkComponent } from '../pages/work/work.component';
import { WorkDetailComponent } from '../pages/work-detail/work-detail.component';
import { Error404Component } from '../pages/error404/error404.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'work',
        component: WorkComponent
      },
      {
        path: 'work/:slug',
        component: WorkDetailComponent
      },
      {
        path: '**',
        component: Error404Component
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
