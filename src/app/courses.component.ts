import {Component} from '@angular/core';

@Component({
    selector:`app-course`,
    template:`
    <div *ngFor="let course of courses">
    <ul *ngIf="!course.backend">
    <li>{{course.name}}</li>
    <li>{{course.price}}</li>
    <li>{{course.author}}</li>
    <li>{{course.avail}}</li>
    </ul>
    <ul *ngIf="let cb of course.backend">
    <li>{{cb.name}}</li>
    <li>{{cb.price}}</li>
    <li>{{cb.author}}</li>
    <li>{{cb.avail}}</li>
    </ul>
    </div>
    `
})
export class courseComponent{
    public courses=[{
        name:'angular',
        price:200,
        author:'google',
        avail:true
    },
    {
        name:'react',
        price:500,
        author:'IE8',
        avail:true
    },
    {
        backend:[{
        name:'python',
        price:200,
        author:'google',
        avail:false
        },
    {
        name:'php',
        price:200,
        author:'google',
        avail:true
    }]
        
    }];
    constructor(){}
}