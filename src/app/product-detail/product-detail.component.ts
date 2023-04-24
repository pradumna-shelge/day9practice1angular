import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../validators';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  pro!: Product|undefined;;
  id!:number;
  constructor(
    private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService
  ) {}

  sub:any;
 
  ngOnInit() {
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      console.log(params);
      
        this.id =Number(params.get('id'));
    
      let products = this._productService.getProducts();
      this.pro = products.find((p) => p.id == this.id);
      console.log(products,this.pro);
      
    });


  }

  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }
 
  onBack(): void {
    this._router.navigate(['product']);
  }
 
}
