import { Component } from '@angular/core';
// import { ProductListComponent } from './products/product-list.component'

@Component({
  selector: 'pm-root',
  template: `
    <div>
      <h1>{{ title }}</h1>
      <pm-products></pm-products>
    </div>
  `,
})
export class AppComponent {
  title: string = 'Acme product managment';
}
