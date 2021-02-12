import {Component} from '@angular/core';

@Component({
    selector:`app-productbutton`,
    template:`<button type="button" class="btn btn-primary mx-2" (click)="product='laptop'">LAPTOP</button>
    <button type="button" class="btn btn-primary mx-2" (click)="product='mobile'">MOBILE</button>
    <button type="button" class="btn btn-primary mx-2" (click)="product='TV'">TV</button>
    <div *ngIf="product" [ngSwitch]="product">
    <h2 *ngSwitchCase="'laptop'"><app-laptop></app-laptop></h2>
    <h2 *ngSwitchCase="'mobile'"><app-mobile></app-mobile></h2>
    <h2 *ngSwitchCase="'TV'"><app-tv></app-tv></h2>
    <h2 *ngSwitchDefault>not a found anything</h2>
    </div>
    `
})
export class productButtonComponent{
    public product:string | undefined;
    constructor(){}
}