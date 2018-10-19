import {Component, Input} from '@angular/core'
import {IEvent} from './shared/event.model'
// 
@Component({
    selector: 'event-thumb',
    templateUrl: './events-thumbnail.component.html',
    styles:[`
        .green{color: #003300 !important;}
        .bold{font-weight:bold;}
        .thumbnail{min-height:250px;}
        .pad-left{margin-left: 5px;}
        .event-image{height: 50px; margin-bottom:10px; float: right;}
        h2{ margin-top:0px;}
        
    `]
})
export class EventThumbnail{
  @Input() event: IEvent 
  someProperty: string  =  "Some Value"
  logFoo(data){
    alert(data);
}
  getStartTimeClass(){
    const isEarlyStart = this.event && this.event.time === '8:00 am'
    if(this.event && this.event.time === "8:00 am")
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
