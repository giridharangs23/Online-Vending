import { element } from 'protractor';
import { ProductService } from './product-list.services';
import { Component, OnInit, OnChanges } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit, OnChanges {
  httpRequest;
  productList;
  quantitySelected;
  quantitySelectionFormGroup = new FormGroup({});
  buyButtonDisable:boolean = true;
  constructor(public productService: ProductService, public localStorage: LocalStorageService) {
    this.localStorage.set("quantitySelected", '')
  }

  ngOnInit() {
    this.httpRequest = this.productService.getProductList().subscribe((data) => {
      this.productList = data.json();
      this.productList.forEach(element => {
        this.quantitySelectionFormGroup.addControl(element.name, new FormControl());
      });
      this.quantitySelectionFormGroup.valueChanges.subscribe(data => {
        // console.log(data);
        this.quantitySelected = data;

      });
    });

  }
  ngOnChanges() {

  }
  alert() {
    this.buyButtonDisable = false;
    this.localStorage.set("quantitySelected", this.quantitySelected)
    window.alert('Added to Cart')
  }

  decreaseQuantity(itemName) {
    let decreasedQuantity = this.quantitySelectionFormGroup.controls[itemName].value;
    if (decreasedQuantity <= 1) {
      console.log(decreasedQuantity)
      this.quantitySelectionFormGroup.controls[itemName].setValue(0)
      
    } else {
      this.quantitySelectionFormGroup.controls[itemName].setValue(decreasedQuantity - 1)
    }

  }

  increaseQuantity(itemName) {
    let decreasedQuantity = this.quantitySelectionFormGroup.controls[itemName].value;
    this.quantitySelectionFormGroup.controls[itemName].setValue(decreasedQuantity + 1)
  }
}
