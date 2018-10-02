import {Component, Input} from '@angular/core'

@Component({
    selector: 'event-thumb',
    template: `
    <div class= "well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        <div> 
            <span> Location: {{event.location.address}}</span>
            <span class = "pad-left">{{event.location.city}}, {{event.location.country}}</span>
        </div>
        <div> Price: \${{event.price}}</div>
        <div>date: {{event.date}}</div>
    </div>
    `,
    styles:[`
        .thumbnail{min-height:210px;}
        .pad-left{margin-left: 5px;}
        .well div{color: #34ff00;}
    `]
})
export class EventThumbnail{
  @Input() event: any 
  someProperty: string  =  "Some Value"
  logFoo(data){
    alert(data);
}
}
