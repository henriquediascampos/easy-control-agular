import { Product } from './../model/product.model';
import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.sass']
})
export class ProductUpdateComponent implements OnInit {
  product: Product = {
    name: '',
    price: null
  };

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productsService.readById(id)
      .subscribe(product => this.product = product);
  }

  update(): void {
    this.productsService.update(this.product)
      .subscribe( () => this.router.navigate(['products']));
  }
}
