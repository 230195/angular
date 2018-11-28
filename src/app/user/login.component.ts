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
    loginInvalid : boolean = false
    constructor(private authServc: AuthService, private route: Router){}
    login(loginData){
        let check: boolean
        this.authServc.loginUser(loginData.userName, loginData.password)
        .subscribe(resp=> {
            if(!resp){
                this.loginInvalid = true
            }else{
                this.route.navigate(['events'])
                console.log(loginData)
                this.loginInvalid = false
            }
        })
        
        return check
    }
    cancel(){
        this.route.navigate(['events'])
    }
}