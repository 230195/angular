import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import{IEvent} from './shared/event.model'
import{FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
    templateUrl:'./create-event.component.html',
    styles:[`
        em{float:right; color:#E05C65; padding-left:10px;}
        .error input{ background-color:#E3C3C5}
        .error ::-webkit-input-placeholder{color: #999} 
        .error ::-moz-placeholder{color: #999} 
        .error :-moz-placeholder{color: #999} 
        .error :-ms-input-placeholder{color: #999} 
    `]
        
})
export class CreateEventComponent implements OnInit{
    eventForm: FormGroup
    mouseoverLogin
    valid: boolean = true
    isDirty: boolean = true
    constructor(private router : Router){}
    ngOnInit(){
        let event:IEvent
        let eName = new FormControl(event!=null?event.name:null,Validators.required) 
        let eDate = new FormControl(event!=null?event.date:null,Validators.required) 
        let eTime = new FormControl(event!=null?event.time:null,Validators.required) 
        let ePrice = new FormControl(event!=null?event.price:null,Validators.required) 
        let eAddress = new FormControl(event!=null?event.location!=null?event.location.address:null:null,Validators.required) 
        let eCity = new FormControl(event!=null?event.location!=null?event.location.city:null:null,Validators.required) 
        let eCountry = new FormControl(event!=null?event.location!=null?event.location.country:null:null,Validators.required)     
        this.eventForm = new FormGroup({
            name:eName,
            date:eDate,
            time:eTime,
            price:ePrice,
            address:eAddress,
            city:eCity,
            country:eCountry
        })
    }
    cancel(){
        this.router.navigate(['/events'])// this is the way where we inject the router service and use it to navigate
    }
    updateIsDirty(){
        if(this.eventForm.valid){
            this.isDirty = false;
            this.valid = true
        }
        else{
            this.valid = false
            return true
        }

    }
    saveEvent(){
        console.log(this.valid)
    }
}