import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { MediacheckService } from './ui/mediacheck.service';
import { MqviewService } from './ui/mqview.service';
import { ApiService } from './API.service';
import { UtilsService } from './utils.service';

import { AppComponent } from './app.component';
import { LoadingComponent } from './ui/loading.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

import { HomeComponent } from '../pages/home/home.component';
import { WorkComponent } from '../pages/work/work.component';
import { WorkDetailComponent } from '../pages/work-detail/work-detail.component';
import { Error404Component } from '../pages/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
    HomeComponent,
    WorkComponent,
    WorkDetailComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    Title,
    MediacheckService,
    MqviewService,
    ApiService,
    UtilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
