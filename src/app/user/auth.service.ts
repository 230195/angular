import {Injectable} from '@angular/core'
import {IUser} from './user.model'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { endPointUrl } from '../events/shared/EndPointUrl';
import { catchError, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable()

export class AuthService{
    currentUser: IUser
    constructor(private http: HttpClient){}
    private handleError<T>(operation ='operations', result? :T){
        return (error: any) :Observable<T> =>{
            console.error(error)
            return of(result as T)
        }
    }
    loginUser(userName: string, password :string){
        const options = {
            headers: new HttpHeaders({
                'content-Type':'application/json'
            })
        }
        const loginData = {userName:userName,password:password}
        const url = endPointUrl + `api/login`;
        return this.http.post<IUser>(url,loginData, options)
            .pipe(tap(data =>{
                    this.currentUser = data
            }))
            .pipe(catchError(err => {
                return of(false)
            }))
    }
    isAuthenticated(){
        return !!this.currentUser
    }
    updateCurrentUser(firstName: string, lastName: string){
        // this.currentUser.firstName = firstName
        // this.currentUser.lastName = lastName
        const options = {
            headers: new HttpHeaders({
                'content-Type':'application/json'
            })
        }
        const loginData = {id:this.currentUser.id ,firstName:firstName,lastName:lastName}
        const url = endPointUrl + `api/updatedetails`;
        return this.http.post<IUser>(url,loginData, options)
            .pipe(tap(data =>{
                    this.currentUser = data
            }))
            .pipe(catchError(err => {
                return of(false)
            }))
    }
}