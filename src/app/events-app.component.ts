import {Component} from '@angular/core'
@Component({
    selector: 'events-list',
    template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
 
    `
})
export class EventListComponent{
    title = 'app';
}