import { Component, OnInit } from '@angular/core'
import {Router} from '@angular/router'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import{AuthService} from './auth.service'
import {IUser} from './user.model'

@Component({
  templateUrl:'./profile.component.html',  
  styles:[`
    em{float:right; color:#E05C65; padding-left:10px;}
    .error input{ background-color:#E3C3C5}
    .error ::-webkit-input-placeholder{color: #999} 
    .error ::-moz-placeholder{color: #999} 
    .error :-moz-placeholder{color: #999} 
    .error :-ms-input-placeholder{color: #999} 
  `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup
  constructor(private router: Router, private authService: AuthService){}
  ngOnInit(){
    let user: IUser = this.authService.currentUser
    let firstName1 = new FormControl(user!= null?user.firstName:null,Validators.required)
    let lastName1 = new FormControl(user!=null?user.lastName:null,Validators.required)
    this.profileForm = new FormGroup({
      firstName: firstName1,
      lastName: lastName1
    })
  }
  cancel(){
    debugger
    this.router.navigate(['events'])
  }
  saveProfile(formValues){
    if(this.profileForm.valid){
      this.authService.updateCurrentUser(formValues.firstName,formValues.lastName)
      this.router.navigate(['events'])
    }
  }
}