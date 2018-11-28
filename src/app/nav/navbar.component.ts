import {Component} from '@angular/core'
import { AuthService } from '../user/auth.service';
import { ISession } from '../events';
import {EventService} from '../events/shared/event.service'


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
    searchTerm : string = ""
    foundSession: ISession[]

    constructor(public authServc: AuthService, private eventService: EventService){
    }
    
    searchSession(searchTerm){
        this.eventService.searchSession(searchTerm).subscribe(
            (sessions:ISession[]) => {
                debugger
                this.foundSession = sessions
            }
        )  
    }
    onLinkClick(){

    }
}