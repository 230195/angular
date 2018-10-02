import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventListComponent } from './events-app.component';
import {eventlist} from  './events/evetns-list.component'
import {EventThumbnail} from './events/events-thumbnail.component'
import {NavBarComponent} from './nav/navbar.component'

@NgModule({
  declarations: [
    EventListComponent,
     eventlist,
     EventThumbnail,
     NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EventListComponent]
})
export class AppModule { }
