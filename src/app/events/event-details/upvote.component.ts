import {Component, EventEmitter, Output, Input} from '@angular/core'

@Component({
    selector: 'upvote', 
    template:`
        <div class="votingWidgetContainer pointable col-md-1" (click)="onclick()">
            <div class="well votingWidget">
                <div class="votingButton">
                    <i class="glyphicon glyphicon-heart"
                        [style.color]="iconColor"></i>
                    <!--<i *ngIf="!voted" class="glyphicon glyphicon-heart-empty"></i>-->
                </div>
                <div class="badge badge-inverse votingCount">
                    <div>{{count}}</div>
                </div>
            </div>
        </div>
    `,
    styleUrls:['./upvote.component.css']
})
export class UpVoteComponent{
    @Input() count: number
    @Input() set voted(val){
        this.iconColor = val ? 'red' : 'white'
    }
    @Output() vote = new EventEmitter()
    iconColor: string 
    onclick(){
        this.vote.emit({})
    }
}