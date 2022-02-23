import { Component } from '@angular/core';

import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TESTING';
  showProduct: Boolean = false;
  products: any[] = [
    {
      productId: 1,
      productName: 'Cardigan femme',
      productPrice: '85',
    },
    {
      productId: 2,
      productName: 'Robe noir',
      productPrice: '65',
    },
  ];

  toggleProduct(): void {
    console.log('tesssst', this.showProduct);
    this.showProduct = !this.showProduct;
  }
}

// export class TabMenuDemo {
//   items: MenuItem[] | undefined;

//   ngOnInit() {
//     this.items = [
//       { label: 'Home', icon: 'pi pi-fw pi-home' },
//       { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
//       { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
//       { label: 'Documentation', icon: 'pi pi-fw pi-file' },
//       { label: 'Settings', icon: 'pi pi-fw pi-cog' },
//     ];
//   }
// }
