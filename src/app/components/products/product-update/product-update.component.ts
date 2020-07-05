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
  product: Product;

  constructor(private productsService: ProductsService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe((product: Product) => {
      this.product = product;
    });
  }

  update(): void {

  }
}
