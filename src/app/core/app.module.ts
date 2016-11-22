import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { MediacheckService } from './ui/mediacheck.service';
import { MqviewService } from './ui/mqview.service';

import { AppComponent } from './app.component';
import { LoadingComponent } from './ui/loading.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

import { SubComponent } from '../pages/sub/sub.component';
import { HomeComponent } from '../pages/home/home.component';
import { Error404Component } from '../pages/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
    SubComponent,
    HomeComponent,
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
    MqviewService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
