import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/tamplate/header/header.component';
import { FooterComponent } from './components/tamplate/footer/footer.component';
import { NavComponent } from './components/tamplate/nav/nav.component';

import { ProductsComponent } from './views/products/products.component';
import { ProductsCreateComponent } from './components/products/products-create/products-create.component';
import { HomeComponent } from './views/home/home.component';
import { BalanceComponent } from './views/balance/balance.component';
import { ProductsReadComponent } from './components/products/products-read/products-read.component';
import { ProductUpdateComponent } from './components/products/product-update/product-update.component';
import { MovementComponent } from './components/balance/movement/movement.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import {MatTabsModule} from '@angular/material/tabs';
import { MovementInputComponent } from './components/balance/movement-input/movement-input.component';
import { MovementOutputComponent } from './components/balance/movement-output/movement-output.component';
import { ThemesDirective } from './directives/themes.directive';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductsComponent,
    ProductsCreateComponent,
    ProductsReadComponent,
    ProductUpdateComponent,
    BalanceComponent,
    MovementComponent,
    MovementInputComponent,
    MovementOutputComponent,
    ThemesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTabsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
