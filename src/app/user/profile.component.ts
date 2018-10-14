import { Component } from '@angular/core'
import {Router} from '@angular/router'

@Component({
  template: `
    <h1>Edit Your Profile</h1>
    <hr>
    <div class="col-md-6">
      <h3>[Edit profile form will go here]</h3> 
      <br />
      <br />
      <button type="submit" class="btn btn-primary">Save</button>
      <button (click) ="cancel()" type="button" class="btn btn-default">Cancel</button>
    </div>
  `,
})
export class ProfileComponent {

  constructor(private router: Router){}
  cancel(){
    debugger
    this.router.navigate(['/events'])// this is the way where we inject the router service and use it to navigate
}
}