import {Component, OnInit} from '@angular/core'
import { EventService } from './shared/event.service'
import {ActivatedRoute} from '@angular/router'
import{IEvent} from './shared/event.model'

@Component({
    selector: 'events',
    template: `
    <div>
        <h1> Upcoming events</h1>
        <hr/>
        <div class= "well"><div>Welcome I am using Angular CLI 6</div></div>
        <div class="row">
            <div  *ngFor ="let event of events"  class = "col-md-5">
                <event-thumb  [event] = "event"></event-thumb>
            </div>
        </div>
    </div>
    `,
    styles: [`
    .pad-left{margin-left: 5px;}
    .well div{color: yellow;}
    `]
})

export class eventlist implements OnInit{
    events : IEvent[]
    constructor(private eventService: EventService, private route : ActivatedRoute){
        
    }
     ngOnInit(){
        this.events = this.route.snapshot.data['Events']
        //this.eventService.getEvents().subscribe(events =>{this.events = events})// before event resolver.. 
     }
}
