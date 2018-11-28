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
        this.newEvent = {
            id:undefined,
            name: undefined,
            date: undefined,
            time: undefined,
            price: undefined,
            location:{
                address:undefined,
                city: undefined,
                country: undefined
            },
            imageUrl: undefined,
            onlineurl:undefined,
            sessions: []
            // 'https://imagejournal.org/wp-content/uploads/2018/09/cover-98-1-154x220.jpg'
        }
    }
    cancel() {
        this.router.navigate(['/events'])// this is the way where we inject the router service and use it to navigate
    }
    updateIsDirty() {

        this.isDirty = false;

    }
    saveEvent(formData){
        this.eventService.saveEvent(formData).subscribe(() => {
            this.isDirty = false;
            this.router.navigate(['/events'])
        })
    }
    
}