import {Injectable} from '@angular/core'
import { ISession } from '../shared';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { endPointUrl } from '../shared/EndPointUrl';
import { catchError } from 'rxjs/operators';

@Injectable()
export class VoterService{
    constructor(private http: HttpClient){}
    private handleError<T>(operation ='Operations',result?: T){
        return (error: any) : Observable<T> => {
            console.error(error)
            return of(result as T)
        }
    }
    deleteVoter(eventId: number, session: ISession, voterName:string){
        // deletes the voter to the corresponding list
        session.voters = session.voters.filter( voter => voter !== voterName)
        
        const options = {headers : new HttpHeaders({
            'content-Type':'application/json'
        }),
        params: new HttpParams()
        .set("eventId",eventId.toString())
        .set("sessionId", session.id.toString())
        .set("voterName", voterName)
    }
        const url = endPointUrl + `api/event/session/deletevoters`;
        return this.http.delete<ISession>(url, options)
            .pipe(catchError(this.handleError('deleteVoters')))
                .subscribe()
    }

    addVoter(eventId: number, session: ISession, voterName:string){
        // adds the voter to the corresponding session
        session.voters.push(voterName)
        
        const options = {headers : new HttpHeaders({
            'content-Type':'application/json'
        }),
        params: new HttpParams()
        .set("eventId",eventId.toString())
        .set("sessionId", session.id.toString())
        .set("voterName", voterName)
    }
        const url = endPointUrl + `api/event/session/voters`;
        this.http.post<ISession>(url,{}, options)
            .pipe(catchError(this.handleError('addVoters')))
                .subscribe()
    }
    userHasVoted(session: ISession, voterName:string){
        return session.voters.some(voter => voter === voterName)
    }
}
