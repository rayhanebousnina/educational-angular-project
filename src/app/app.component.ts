import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // showProduct: Boolean = false;
  // products: any[] = [
  //   {
  //     productId: 1,
  //     productName: 'Cardigan femme',
  //     productPrice: '85',
  //   },
  //   {
  //     productId: 2,
  //     productName: 'Robe noir',
  //     productPrice: '65',
  //   },
  // ];
  constructor() {}
  ngOnInit(): void {}
  // toggleProduct(): void {
  //   console.log('tesssst', this.showProduct);
  //   this.showProduct = !this.showProduct;
  // }
}
