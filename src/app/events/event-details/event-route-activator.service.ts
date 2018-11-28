import {CanActivate, ActivatedRouteSnapshot, ActivatedRoute} from '@angular/router'
import {Injectable} from  '@angular/core'
import {EventService} from '../shared/event.service'
import {Router} from '@angular/router'

@Injectable()
export class EventRouteActivator implements CanActivate{
    constructor(private eventService : EventService, private router: Router, private route: ActivatedRoute){

    }
    canActivate(route: ActivatedRouteSnapshot){
        debugger
        const eventExists =  !!this.eventService.getEvent(route.params['id'])
        if(!eventExists)
            this.router.navigate(['/404'])
        return eventExists
    }
}