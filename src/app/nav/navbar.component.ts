import {Component} from '@angular/core'
import { AuthService } from '../user/auth.service';

@Component({
    selector: '<nav-bar></nav-bar>',
    templateUrl: './nav-bar.component.html',
    styles:[`
        li > a.active {color: orange;}
        .nav .navbar-nav{font-size:15px;}
        #searchForm{margin-right: 100px;},
        @media (max-width: 1200px){#searForm{display:none;}}
    `]
})
export class NavBarComponent{
    constructor(public authServc: AuthService){}

}