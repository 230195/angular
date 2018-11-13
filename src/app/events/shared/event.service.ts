import {Injectable,EventEmitter} from '@angular/core'
import {Subject, Observable, of} from 'rxjs'// create the observable of rsjx for the subject step 1 for the Event list resolver...
import { IEvent, ISession } from './event.model';
import {Events} from './events-data'
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';


@Injectable()
export class EventService{
  constructor(private http: HttpClient){}
    
    getEvents(): Observable<IEvent[]>{
      // let subject = new Subject<IEvent[]>()
      // setTimeout(() => {subject.next(Events.slice(0)); subject.complete();},100)// Step 2...
      // // console.log(subject.subscribe(x => { for(var key  in x){
      // //  alert(JSON.stringify(x[key].name))
      // // }
      // //}))
      //   return subject
      debugger
      return this.http.get<IEvent[]>('http://localhost:61794/api/Event')
        .pipe(
          catchError(
            this.handleError<IEvent[]>('getEvents',[])
          )
        )
    }
    private handleError<T>(operation ='operation', result?:T){
      return (error: any): Observable<T> => {
        console.error(error)
        return of(result as T)
      }
    }
    getEvent( id : number): Observable<IEvent>{
      //return Events.slice(0).find(event => event.id == id)
      debugger
      let url = 'http://localhost:61794/api/Event/' + id
      return this.http.get<IEvent>(url)
        .pipe(
          catchError(
            this.handleError<IEvent>('getEvent')
          )
        )
    }
    saveEvent(event : IEvent){
      debugger
      event.id = Events[Events.length-1].id+1
      event.sessions = []
      event.date = new Date(event.date)
      Events.push(event)
    }
    searchSession(searchTerm: String){
      let term = searchTerm.toLocaleLowerCase()
      var results : ISession[] = []
      Events.forEach(event => {
        
        var matchingSessions = event.sessions.filter(session =>
          {
            return session.name.toLocaleLowerCase().indexOf(term)>-1 
            
          })
          
          matchingSessions = matchingSessions.map((session: any) =>{
            session.eventId = event.id
            return session
          })
          //console.log(matchingSessions)
          results = results.concat(matchingSessions)
      })
      var emitter = new EventEmitter(true)
      setTimeout(()=>{
          emitter.emit(results)
      ,100})
      return emitter
    }
    updateEvent(event: IEvent){
      let index = Events.findIndex(x => x.id == event.id )
      Events[index] = event   
    }
}
