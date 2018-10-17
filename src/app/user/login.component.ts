import {Component} from '@angular/core'
import {AuthService} from './auth.service'
import {Router} from '@angular/router'

@Component({
 templateUrl:'./login.component.html'
})

export class LoginComponent{
    userName
    password
    constructor(private authServc: AuthService, private route: Router){}
    login(loginData){
        let check: boolean
        check = this.authServc.loginUser(loginData.userName, loginData.password)
        if(check === true)
            this.route.navigate(['events'])
        console.log(loginData)
        return check
    }
    cancel(){
        this.route.navigate(['events'])
    }
}