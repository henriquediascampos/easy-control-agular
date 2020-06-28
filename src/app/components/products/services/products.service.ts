import { Product } from './../model/product.model';
import { by } from 'protractor';
import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl: string = "http://localhost:3001/products";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMensagem(msg: string): void {
    this.snackBar.open(msg, 'ok', {
      duration: 2000,
      horizontalPosition: "center",
      verticalPosition: "top",
      panelClass: "green"
    })
  }

  save(Product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, Product);
  }
}
