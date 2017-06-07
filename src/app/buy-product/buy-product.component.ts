import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import {Router} from '@angular/router';



@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {
  cartDetails;
  productName;
  finalProductDetails;
  totalAmount = 0;
  showCash: boolean = false;
  showCard: boolean = false;
  showSuccessMsg: boolean = false;
  amountDenominationsFormGroup = new FormGroup({
    one: new FormControl(1),
    five: new FormControl(5),
    ten: new FormControl(10),
    twenty: new FormControl(20),
    total: new FormControl()

  });
  constructor(public localStorage: LocalStorageService,public parentRouter:Router) { }

  ngOnInit() {
    this.finalProductDetails = Object.keys(this.localStorage.get('quantitySelected'))
    this.cartDetails = this.localStorage.get('quantitySelected');
    var obj = this.cartDetails;
    this.finalProductDetails = Object.keys(obj).map(function (e) {
      return [String(e), obj[e]];
    });
    this.finalProductDetails.forEach((element, i) => {
      if (element[0] == 'lays') {
        element[2] = element[1] * 35;
      }
      if (element[0] == 'pepsi') {
        element[2] = element[1] * 44;
      }
      if (element[0] == 'sprite') {
        element[2] = element[1] * 35;
      }
      if (element[0] == 'coke') {
        element[2] = element[1] * 35;
      }
    });
    console.log(this.finalProductDetails)

    this.finalProductDetails.forEach((element, i) => {
      if (element[2] !== 0) {
        this.totalAmount = this.totalAmount + element[2];
      }

    });
    console.log(this.totalAmount);
    this.amountDenominationsFormGroup.disable();
    this.amountDenominationsFormGroup.controls['total'].enable();
  }
  add(data) {
    this.totalAmount = this.totalAmount + data;
  }
  payBycash() {
    this.showCash = true;
    this.showCard = false;
  }

  payByCard() {
    this.showCash = false;
    this.showCard = true;
  }

  decreaseQuantity(value) {
    console.log(value)
    let tempTotal;
    tempTotal = this.amountDenominationsFormGroup.controls['total'].value;
    tempTotal = tempTotal - value;
    this.amountDenominationsFormGroup.controls['total'].setValue(tempTotal);
  }

  increaseQuantity(value) {
    console.log(value)
    let tempTotal;
    tempTotal = this.amountDenominationsFormGroup.controls['total'].value;
    tempTotal = tempTotal + value;
    this.amountDenominationsFormGroup.controls['total'].setValue(tempTotal);
  }
  payCash() {
    this.showSuccessMsg = true;
    console.log('HI')
     setTimeout(()=>{ 
      this.parentRouter.navigateByUrl('/');
      }, 1500);
    
  }
}
