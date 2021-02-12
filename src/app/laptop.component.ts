import {Component} from '@angular/core';

@Component({
    selector:`app-laptop`,
    template:`<h2> these is laptop section</h2>
    <div class="container">
    <div class="row" *ngFor="let laps of laptop">
    <h3>{{laps.name}}</h3>
    <img src="{{laps.imgurl}}">
    </div>
    </div>`
})
export class laptopComponent{
    public laptop=[{
        name:'laptop-1',
        imgurl:'../assets/img/laptop1.jpg'
    },
    {
        name:'laptop-2',
        imgurl:'../assets/img/laptop3.jpg'
    },
    {
        name:'laptop-3',
        imgurl:'../assets/img/laptop2.jpg'
    },
    {
        name:'laptop-4',
        imgurl:'../assets/img/laptop4.jpg'
    }]
    constructor(){}
}