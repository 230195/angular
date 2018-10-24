import {Injectable} from '@angular/core'
import {Subject, Observable} from 'rxjs'// create the observable of rsjx for the subject step 1 for the Event list resolver...
import { IEvent } from './event.model';
import {Events} from './events-data'

@Injectable()
export class EventService{
    
    getEvents(): Observable<IEvent[]>{
      let subject = new Subject<IEvent[]>()
      setTimeout(() => {subject.next(Events.slice(0)); subject.complete();},100)// Step 2...
      // console.log(subject.subscribe(x => { for(var key  in x){
      //  alert(JSON.stringify(x[key].name))
      // }
      //}))
        return subject
    }
    getEvent( id : number): IEvent{
      return Events.slice(0).find(event => event.id == id)
    }
    saveEvent(event : IEvent){
      debugger
      event.id = Events[Events.length-1].id+1
      event.sessions = []
      event.date = new Date(event.date)
      Events.push(event)
    }
    updateEvent(event: IEvent){
      let index = Events.findIndex(x => x.id == event.id )
      Events[index] = event   
    }
}
