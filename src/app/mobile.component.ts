import {Component} from '@angular/core';

@Component({
    selector:`app-mobile`,
    template:`<h2> these is mobile section</h2>
    <div class="container">
    <div class="row" *ngFor="let mob of mobile">
    <h3>{{mob.name}}</h3>
    <img src="{{mob.imgurl}}">
    </div>
    </div>`
})
export class mobileComponent{
    public mobile=[{
        name:'mobile-1',
        imgurl:'../assets/img/mobile1.jpg'
    },
    {
        name:'mobile-2',
        imgurl:'../assets/img/mobile3.jpg'
    },
    {
        name:'mobile-3',
        imgurl:'../assets/img/mobile2.jpg'
    },
    {
        name:'mobile-4',
        imgurl:'../assets/img/mobile4.jpg'
    }]
    constructor(){}
}