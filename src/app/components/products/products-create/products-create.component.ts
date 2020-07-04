import { Product } from './../model/product.model';
import { Router } from '@angular/router';
import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.sass']
})
export class ProductsCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  };
  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.productsService.create(this.product)
      .subscribe(() => {
        this.productsService.showMensagem('patos de borrachas');
        this.router.navigate(['products']);
      })
  }

  cancel(): void {
    this.router.navigate(['products']);
  }
}
