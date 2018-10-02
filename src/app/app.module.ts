import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventListComponent } from './events-app.component';
import {eventlist} from  './events/evetns-list.component'
import {EventThumbnail} from './events/events-thumbnail.component'
import {NavBarComponent} from './nav/navbar.component'
import {EventService} from './events/shared/event.service'

@NgModule({
  declarations: [
    EventListComponent,
     eventlist,
     EventThumbnail,
     NavBarComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [EventService],
  bootstrap: [EventListComponent]
})
export class AppModule { }
