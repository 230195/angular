import {Component, OnInit} from '@angular/core'
import {EventService} from '../shared/event.service'
import{ActivatedRoute, Params, Router} from '@angular/router'
import {IEvent, ISession} from '../shared/event.model'
@Component({
    templateUrl : './event-details.component.html',
    styles:[`
        .container{padding-right:20px; padding-left:20px;}
        .event-image{height:100px;}
        a{cursor: pointer}
        div button {margin-bottom: 10px; margin-left:4px;}
    `]
})

export class EventDetailsComponent implements OnInit{
   event : IEvent
   addMode: boolean
   filterBy : string = "all"
   sortBy: string = 'name'
    constructor(private eventService : EventService, private route: ActivatedRoute, private router: Router){}
    ngOnInit(){
       this.route.params.forEach((params: Params) =>{ // This method will be working on the parameter
           debugger;
           //this.eventService.getEvent(+params['id']).subscribe((event: IEvent)=>{
               this.event =   this.route.snapshot.data['event']
               let check :boolean = !!this.event
               if(!check)
                 this.router.navigate(['/404'])
               this.addMode =false
           //})
       })
    //    this.route.data.forEach((data) =>{ // This will be working for the valid data now
    //     debugger;
    //     this.event =   this.route.snapshot.data['event']
    //     this.addMode =false
    // })
       
        //this.event = this.eventService.getEvent(this.route.snapshot.params['id'])
    }
    addSession(){
        this.addMode = true
    }
    saveNewSession(session: ISession){
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id))+1
        console.log(nextId)
        this.event.sessions.push(session)
        this.eventService.updateEvent(this.event).subscribe()
        this.addMode = false
    }
    cancel(){
        this.addMode = false
    }
}