import {Component, Input} from '@angular/core';

@Component({
    selector:`app-twitter`,
    template:`<div class="container">
    <div class="card text-center">
        <div class="card-header">
        <div class="row">
        <img src="../assets/img/female.png" class="rounded-circle float-left mr-6" alt="..." >
        <p>{{username}}</p>
        </div>
        </div>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
        <div class="card-footer">
        <div class="row p-4 mx-2">
        <i class="fa fa-4x" aria-hidden="true"
        [class.fa-heart-o]="isActive"
        [class.fa-heart]="!isActive" [style.color]="isActive ? 'black':'red'" (click)="action()"
        ></i>
        <h4 class="p-1 mt-4">{{count}}</h4>
        </div>
        </div>
      </div>
</div>`
})

export class twitterComponent{
    public username:string="Bhosaledarshana";
    public isActive:boolean=true;
    @Input() count:any;
    constructor(){}
    action(){
        this.isActive = !this.isActive;
        this.count+=this.isActive ? -1 :1;
    }

}