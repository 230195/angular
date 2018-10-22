import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { IEvent } from './shared/event.model'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { EventService } from './shared';

@Component({
    templateUrl: './create-event.component.html',
    styles: [`
        em{float:right; color:#E05C65; padding-left:10px;}
        .error input{ background-color:#E3C3C5}
        .error ::-webkit-input-placeholder{color: #999} 
        .error ::-moz-placeholder{color: #999} 
        .error :-moz-placeholder{color: #999} 
        .error :-ms-input-placeholder{color: #999} 
    `]

})
export class CreateEventComponent{
    newEvent: IEvent
    isDirty: boolean = true
    constructor(private router: Router, private eventService: EventService) { }
    ngOnInit(){
        // this.newEvent = {
        //     id:0,
        //     name: 'Ng Spectacular',
        //     date: new Date(),
        //     time: '6:00 pm',
        //     price: 789.9,
        //     location:{
        //         address:'20th street',
        //         city: 'Berlin',
        //         country: 'Germany'
        //     },
        //     imageUrl: 'https://imagejournal.org/wp-content/uploads/2018/09/cover-98-1-154x220.jpg',
        //     onlineurl:'https://imagejournal.org',
        //     sessions: []
        // }
    }
    cancel() {
        this.router.navigate(['/events'])// this is the way where we inject the router service and use it to navigate
    }
    updateIsDirty() {

        this.isDirty = false;

    }
    saveEvent(formData){
        this.isDirty = false;
        this.eventService.saveEvent(formData)
        this.router.navigate(['/events'])
    }
    
}