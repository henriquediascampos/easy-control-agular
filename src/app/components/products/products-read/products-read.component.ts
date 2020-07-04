import { ProductsService } from './../services/products.service';
import { Product } from './../model/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-read',
  templateUrl: './products-read.component.html',
  styleUrls: ['./products-read.component.sass']
})
export class ProductsReadComponent implements OnInit {

  products: Product[]

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.read();
  }

  read(): void {
    this.productsService.read()
      .subscribe((e) => {
        this.products = e
        console.log(this.products)
    })
  }

  delete(id: number):void {
    console.log(id)
  }

}
