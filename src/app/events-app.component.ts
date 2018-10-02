import {Component} from '@angular/core'
@Component({
    selector: 'events-list',
    template: `
    <nav-bar></nav-bar>
    <events></events>
    `
})
export class EventListComponent{
    title = 'app';
}