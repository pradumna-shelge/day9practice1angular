import { Injectable } from '@angular/core';
import { Product } from './validators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public getProducts() {
 
    let products:Product[];

    products=[
        {id:1,name:'Memory Card',price:500},
        {id:2,name:'Pen Drive',price:750},
        {id:3,name:'Power Bank',price:100}
    ]

    return products;               
}


public getProduct(id:number) {
    let products:Product[]=this.getProducts();
    return products.find(p => p.id==id);
}

}
