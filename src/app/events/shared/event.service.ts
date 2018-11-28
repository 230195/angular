import {Injectable,EventEmitter} from '@angular/core'
import {Subject, Observable, of} from 'rxjs'// create the observable of rsjx for the subject step 1 for the Event list resolver...
import { IEvent, ISession } from './event.model';
import  {endPointUrl} from './EndPointUrl'
import {Events} from './events-data'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Options } from 'selenium-webdriver/chrome';


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
      let url = endPointUrl + "api/Event";
      return this.http.get<IEvent[]>(url)
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
      let url = endPointUrl + "api/Event/" + id;
      return this.http.get<IEvent>(url)
        .pipe(
          catchError(
            this.handleError<IEvent>('getEvent')
          )
        )
    }
    saveEvent(event : IEvent){
      debugger
      // event.id = Events[Events.length-1].id+1
      // event.sessions = []
      // event.date = new Date(event.date)
      // Events.push(event) /// before including http
      debugger
      let url = endPointUrl + "api/Event"
      let options = {headers: new HttpHeaders({'Content-Type': 'application/json'})}
      let jsonString = JSON.stringify(event) 
      let item = this.http.post<IEvent>(url, event, options)
        .pipe(
          catchError(
            this.handleError('saveEvent')
          )
        )
        return item
    }
    searchSession(searchTerm: String): Observable<ISession[]>{
     /* let term = searchTerm.toLocaleLowerCase()// this is the peice of code which was written before including the server..
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
      */ 
     debugger
     let url = endPointUrl + 'api/sessions/search?search=' + searchTerm
     return this.http.get<ISession[]>(url)
        .pipe(catchError(this.handleError<ISession[]>('Search Session')))
    }
    updateEvent(event: IEvent){
      var url = endPointUrl + 'api/event'
      var options = {headers: new HttpHeaders({'Content-Type':'application/json'})}
      return this.http.put<IEvent>(url, event, options)
      .pipe(
        catchError(
          this.handleError('updateEvent')
        )
      )
      // let index = Events.findIndex(x => x.id == event.id )
      // Events[index] = event   
    }
}
