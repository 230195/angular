import {Component} from '@angular/core'

@Component({
 templateUrl:'./login.component.html'
})

export class LoginComponent{
    userName
    password
    login(loginData){
        alert(JSON.stringify(loginData))
        console.log(loginData)
        return false
    }
}