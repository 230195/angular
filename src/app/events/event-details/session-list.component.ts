import { Component, Input, OnChanges } from '@angular/core'
import { ISession } from '../shared/index'
import { AuthService } from '../../user/auth.service';
import { VoterService } from './voter.service'

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'

})
export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[]
    @Input() filterBy: string
    @Input() sortBy: string
    @Input() eventId: number
    visibleSessions: ISession[] = []
    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy)
            debugger
            this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc)
                : this.visibleSessions.sort(sortByVotesDesc);
        }
    }
    constructor(private auth: AuthService, private voterService: VoterService) {

    }
    toggleVote(session: ISession) {
        if (this.auth.currentUser !== null) {
            if (this.userHasVoted(session)) {
                this.voterService.deleteVoter(this.eventId, session, this.auth.currentUser.userName)
            } else {
                this.voterService.addVoter(this.eventId, session, this.auth.currentUser.userName)
            }
            if (this.sortBy === "votes")
                this.visibleSessions.sort(sortByVotesDesc)
        }
    }
    userHasVoted(session: ISession) {
        if (this.auth.currentUser !== null) {
            return this.voterService.userHasVoted(session, this.auth.currentUser.userName)
        }
    }
    filterSessions(filterBy: string) {
        if (filterBy === 'all') {
            this.visibleSessions = this.sessions.slice(0);
        }
        else {
            this.visibleSessions = this.sessions.filter(session => {
                return session.level.toLocaleLowerCase() === filterBy
            })
        }
    }
}
function sortByNameAsc(s1: ISession, s2: ISession) {
    if (s1.name.toLocaleLowerCase() > s2.name.toLocaleLowerCase()) return 1
    else if (s1.name.toLocaleLowerCase() === s2.name.toLocaleLowerCase()) return 0
    else return -1
}
function sortByVotesDesc(s1: ISession, s2: ISession) {
    return s2.voters.length - s1.voters.length
}
