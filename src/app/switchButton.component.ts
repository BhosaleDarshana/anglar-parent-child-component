import {Component} from '@angular/core';

@Component({
    selector:`app-switch`,
    template:`<button type="button" class="btn btn-primary mx-2" (click)="isActive='home'">HOME</button>
    <button type="button" class="btn btn-primary" (click)="isActive='about'">ABOUT</button>
    <div *ngIf="isActive" [ngSwitch]="isActive">
    <h2 *ngSwitchCase="'home'">Home section</h2>
    <h2 *ngSwitchCase="'about'">about section</h2>
    <h2 *ngSwitchDefault>not found anything</h2>
    </div>
    `
})
export class switchButtonComponent{
    public isActive:string | undefined;
    constructor(){}
}