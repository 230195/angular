import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{ 
  EventListComponent,
  eventlist,
  EventThumbnail,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe

} from './events/index'
import {NavBarComponent} from './nav/navbar.component'
import {appRoutes} from './routes'
import { RouterModule } from '@angular/router'
import {Error404Component} from './errors/404.component'
import{AuthService} from './user/auth.service'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {CollapsibleWellComponent} from '../common/collapsible-well.component'

@NgModule({
  declarations: [
    EventListComponent,
     eventlist,
     EventThumbnail,
     NavBarComponent,
     EventDetailsComponent,
     CreateEventComponent,
     Error404Component,
     CreateSessionComponent,
     SessionListComponent,
     CollapsibleWellComponent,
     DurationPipe
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    EventRouteActivator,
    EventListResolver,
    AuthService,
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