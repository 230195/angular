import {Component} from '@angular/core'
import {AuthService} from './auth.service'
import {Router} from '@angular/router'

@Component({
 templateUrl:'./login.component.html',
 styles: [`
    em{color: #d43131;float:right;}
`]
})

export class LoginComponent{
    userName
    password
    mouseoverLogin
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