import {Injectable} from '@angular/core'
import {Resolve} from '@angular/router'
import {EventService} from './shared/event.service'
import {HttpClient} from '@angular/common/http'

@Injectable()
export class EventListResolver implements Resolve<any>{
    constructor(private eventService: EventService, private http: HttpClient){}
    resolve(){
        return this.eventService.getEvents()
    }
}