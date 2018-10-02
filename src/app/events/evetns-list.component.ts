import {Component} from '@angular/core'

@Component({
    selector: 'events',
    template: `
    <div>
        <h1> Upcoming events</h1>
        <hr/>
        <div class= "well"><div>What the hell do you want.</div></div>
        <event-thumb #thumbnail [event] = "event1"></event-thumb>
        <h3> {{thumbnail.someProperty}}</h3>    
    </div>
    `,
    styles: [`
    .pad-left{margin-left: 5px;}
    .well div{color: yellow;}
    `]
})

export class eventlist{
    event1 = {
        id: 1,
        name: 'Abhishek',
        date: '24/9/2018',
        price: 599.60,
        imageurl: '/assets/images/basic-shield.png',
        location: {
            address: 's-200d',
            city:'Delhi',
            country: 'India'
        }
    }
     
}
