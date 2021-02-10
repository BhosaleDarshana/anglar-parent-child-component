import {Component} from '@angular/core';

@Component
({
    selector:`app-tparent`,
    template:`<app-twitter [count]=count></app-twitter>`
})
export class twitterparentComponent{
    count:number= 10;
    constructor(){}
}