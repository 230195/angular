import {Component} from '@angular/core'

@Component({
    selector: '<nav-bar></nav-bar>',
    templateUrl: './nav-bar.component.html',
    styles:[`
        .nav .navbar-nav{font-size:15px;}
        #searchForm{margin-right: 100px;},
        @media (max-width: 1200px){#searForm{display:none;}}
    `]
})
export class NavBarComponent{

}