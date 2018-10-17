import {Injectable} from '@angular/core'
import {IUser} from './user.model'

@Injectable()

export class AuthService{
    currentUser: IUser
    loginUser(userName: string, password :string){
        this.currentUser = {
            id: 1,
            firstName: 'Abhishek',
            lastName: 'Sharma',
            userName: 'abh@gmail.com'
        }
        return this.isAuthenticated()
    }
    isAuthenticated(){
        return !!this.currentUser
    }
}