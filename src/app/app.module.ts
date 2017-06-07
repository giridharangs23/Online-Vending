import { ProductListComponent } from './product-list/product-list.component';
import { AppRoutingModule } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocalStorageModule } from 'angular-2-local-storage';
import { BuyProductComponent } from './buy-product/buy-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    BuyProductComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule, ReactiveFormsModule,
     LocalStorageModule.withConfig({
            prefix: 'OV-App',
            storageType: 'localStorage'
        })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
