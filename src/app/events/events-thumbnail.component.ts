import {Component, Input} from '@angular/core'
//
@Component({
    selector: 'event-thumb',
    template: `
    <div [routerLink] = "['/events', event.id]" class= "well hoverwell thumbnail">
        <h2>{{event?.name}}</h2>
        <div>Date: {{event?.date}}</div>
        <div [class.green] = "event?.time ==='9:00 am'">Time: {{event?.time}}</div>
        <div [ngClass] = "getStartTimeClass()">Time: {{event?.time}}</div>
        <div [ngSwitch] = "event?.onlineurl">
            <span *ngSwitchCase = "'yes'">Early Start </span>
            <span *ngSwitchCase = "null"> Late Start </span>
            <span *ngSwitchDefault> Normal Start </span>
        </div>
        <div [style.color] = "getStyle()" *ngIf = "event?.location"> 
            <span [ngStyle] = "getStyle1()"> Location: {{event?.location?.address}}</span>
            <span class = "pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
        <div> Price: \${{event?.price}}</div>
        <div>date: {{event?.date}}</div>
        <div [hidden] = "!event?.onlineurl">Online Url: {{event?.onlineurl}} </div>
        
    </div>
    `,
    styles:[`
        .green{color: #003300 !important;}
        .bold{font-weight:bold;}
        .thumbnail{min-height:250px;}
        .pad-left{margin-left: 5px;}
        .well div {color:black;}
    `]
})
export class EventThumbnail{
  @Input() event: any 
  someProperty: string  =  "Some Value"
  logFoo(data){
    alert(data);
}
  getStartTimeClass(){
    const isEarlyStart = this.event && this.event.time === '9:00 am'
    if(this.event && this.event.time === "10:00 am")
        return ['green', 'bold']
    return {green: isEarlyStart, bold: isEarlyStart}
  }
  getStyle(){
    if(this.event.location.country === 'USA')
        return '#003300'
    else
        return '#bbb'
  }
  getStyle1() : any{
    if(this.event.location.country !== 'USA')
        return {'color': '#003300'}
    else
        return {}
  }
}
