import {
    eventlist,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver,
    CreateSessionComponent,
    EventResolver

} from  './events/index'
import {Routes} from '@angular/router'
import {Error404Component} from './errors/404.component';

export const appRoutes: Routes = [
    {path : 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path: 'events', component: eventlist, resolve:
        {Events:EventListResolver}
    },
    {path:'events/session/new', component:CreateSessionComponent},
    {path: 'events/:id', component: EventDetailsComponent,
     resolve:
        {event: EventResolver}
    //  canActivate: [EventRouteActivator]
    },
    {path: '404', component: Error404Component},
    {path: 'user', loadChildren: './user/user.module#UserModule'},
    {path: '', redirectTo: '/events', pathMatch: 'full'}
    
]