import {Component} from '@angular/core'
import {Router} from '@angular/router'

@Component({
    template:`
            <h1>New Event</h1>
            <hr>
            <h3>[Create Event Form will go from here]</h3>
            <br/>
            <br/>
            <button type = "submit" (click) = "updateIsDirty()" class ="btn btn-primary">Save</button>
            <button type = "button" class = "btn btn-default" (click) = "cancel()">Cancel</button>
    `
})
export class CreateEventComponent{
    isDirty: boolean = true
    constructor(private router : Router){debugger}
    cancel(){
        debugger
        this.router.navigate(['/events'])// this is the way where we inject the router service and use it to navigate
    }
    updateIsDirty(){
        this.isDirty = false;
    }
}