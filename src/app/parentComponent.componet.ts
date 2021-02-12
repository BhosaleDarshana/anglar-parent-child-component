import {Component} from '@angular/core';
import {Iproduct} from './shared/product';

@Component({
    selector:`app-parent`,
    template:`<app-child [product]="products" (newProduct)="storeUserData($event)"></app-child>`
})
export class ParentComponent{
    public products:Iproduct[]=[{
        product_id:1,
        //product_cat:'juice',
        product_name:'pineapple juice',
        product_type:'thick-liquid',
        product_cost:200
        //product_available:true
    },
    {
        product_id:2,
        //product_cat:'pickle',
        product_name:'mixed mango',
        product_type:'thick-solid',
        product_cost:400
        //product_available:true
    },
    {
        product_id:3,
        //product_cat:'juice',
        product_name:'cranberry juice',
        product_type:'thick-liquid',
        product_cost:500
        //product_available:false
    },
    {
        product_id:4,
        //product_cat:'juice',
        product_name:'grapes juice',
        product_type:'thick-liquid',
        product_cost:200
        //product_available:true
    }];
    constructor(){}
    storeUserData(data: Iproduct){
        this.products.push(data);
    }
}