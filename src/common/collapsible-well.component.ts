import {Component, Input} from '@angular/core'
@Component({
    selector: 'collapsible-well',
    template: `
        <div (click)="toggleContent()" class="well pointable"> 
            <h4 class="well-title">
            <!--{{title}}-->
            <ng-content select=".title"></ng-content>
            </h4>
            <!--//Content Goes here-->
            <ng-content *ngIf="visible" select="[well-body]"></ng-content>
        </div>
    `
})
export class CollapsibleWellComponent{
    @Input() title: string
    visible: boolean = false;
    toggleContent(){
        this.visible = !this.visible;
    }
}