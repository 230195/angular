import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventListComponent } from './events-app.component';
import {eventlist} from  './events/evetns-list.component'
import {EventThumbnail} from './events/events-thumbnail.component'
import {NavBarComponent} from './nav/navbar.component'
import {EventService} from './events/shared/event.service'
import {EventDetailsComponent} from './events/event-details/event-details.component'
import {appRoutes} from './routes'
import { RouterModule } from '@angular/router'
import {CreateEventComponent} from './events/create-event.component'
import {Error404Component} from './errors/404.component'
import {EventRouteActivator} from './events/event-details/event-route-activator.service'
import {EventListResolver} from './events/events-list-resolver.service'

@NgModule({
  declarations: [
    EventListComponent,
     eventlist,
     EventThumbnail,
     NavBarComponent,
     EventDetailsComponent,
     CreateEventComponent,
     Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    EventRouteActivator,
    EventListResolver,
    {
      provide : 'canDeactivateCreateEvent', 
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventListComponent]
})

export class AppModule { }

export function checkDirtyState(component: CreateEventComponent){
  if(component.isDirty)
    return window.confirm('you have not saved this event,  do really want to cancel?')
  return true;
}