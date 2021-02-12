import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Iproduct } from './shared/product';

@Component({
    selector:`app-child`,
    template:`<ul *ngFor="let pro of product">
    <li>{{pro.product_id}}</li>
    <li>{{pro.product_name}}</li>
    <li>{{pro.product_type}}</li>
    <li>{{pro.product_cost}}</li>
    </ul>

    <div class="container">
  <form>
    <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Product id</label>
    <input type="text" class="form-control" #product_id>
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">product name</label>
      <input type="text" class="form-control" #product_name >
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Product type</label>
      <input type="text" class="form-control" #product_type >
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Product cost</label>
      <input type="text" class="form-control" #product_cost >
    </div>
    <button type="submit" class="btn btn-primary" (click)="addUser(product_id.value, product_name.value, product_type.value, product_cost.value)">Submit</button>
  </form>
</div>
    `
})
export class ChildComponent{
    @Input() product:Iproduct[] | undefined;
    @Output() newProduct:EventEmitter<Iproduct> = new EventEmitter();
    constructor(){}

    addUser(pid: any,name: any,type: any,cost: any){
        this.newProduct.emit({product_id:pid, product_name:name, product_type:type, product_cost:cost});
    }
}