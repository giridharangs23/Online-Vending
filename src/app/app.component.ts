import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit, OnChanges {
  title = 'app';
  buyButtonDisable: boolean = true;
  constructor(public localStorage: LocalStorageService) {

    this.localStorage.set("quantitySelected", '')

  }
  ngOnInit() {

  }
  ngOnChanges() {


  }
}
