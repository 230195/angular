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
// import {CollapsibleWellComponent} from '../common/collapsible-well.component'
// import {TOASTR_TOKEN, Toastr} from '../common/toastr.service'
import {
  JQ_TOKEN,
  TOASTR_TOKEN,
  Toastr,
  CollapsibleWellComponent,
  SimpleModalComponent
} from '../common/index'

//declare let toastr : Toastr
let toastr:Toastr = window['toastr']
let JQuery: Object = window['$'] // is for Jquery

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
     DurationPipe,
     SimpleModalComponent
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
     //{ provide: AuthService , useClass: AuthService}, // Use Class Syntax......
     //{provide: MinimalLogger , useExisting: Logger}, // useExisting will use the most common methods
     //{provide: ,useFactory:  }
     { // long hand syntax for registering the services
      provide: TOASTR_TOKEN, // called by this name 
      useValue: toastr// Actual instance of this class will be created
    },
    {provide: JQ_TOKEN, useValue: JQuery},
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