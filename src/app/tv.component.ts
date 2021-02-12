import {Component} from '@angular/core';

@Component({
    selector:`app-tv`,
    template:`<h2> these is tv section</h2>
    <div class="container">
    <div class="row" *ngFor="let tvs of tv">
    <h3>{{tvs.name}}</h3>
    <img src="{{tvs.imgurl}}">
    </div>
    </div>`
})
export class tvComponent{
    public tv=[{
        name:'tv-1',
        imgurl:'../assets/img/tv1.jpg'
    },
    {
        name:'tv-2',
        imgurl:'../assets/img/tv3.jpg'
    },
    {
        name:'tv-3',
        imgurl:'../assets/img/tv2.jpg'
    },
    {
        name:'tv-4',
        imgurl:'../assets/img/tv4.jpg'
    }]
    constructor(){}
}