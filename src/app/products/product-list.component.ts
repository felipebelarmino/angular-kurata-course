import { Component } from '@angular/core';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  pageTitle: string = 'Product List';
  products: any[] = [
    {
      productId: 2,
      productName: 'Galaxy A31',
      productCode: 'SM-A315GZBKZTO',
      releaseDate: 'March 18, 2021',
      description: 'Quádrupla 48MP e Bateria de 5000mAh.',
      price: 1699.99,
      starRating: 4.5,
      imageUrl:
        'https://samsungbr.vtexassets.com/arquivos/ids/313828-1200-auto?width=1200&height=auto&aspect=true',
    },
    {
      productId: 5,
      productName: 'Galaxy S21',
      productCode: 'SM-G996BZKJZTO',
      releaseDate: 'March 18, 2021',
      description:
        'O display com cores mais vivas e brilhantes em um smartphone.',
      price: 5699.99,
      starRating: 4.6,
      imageUrl:
        'https://samsungbr.vtexassets.com/arquivos/ids/315731-1200-auto?width=1200&height=auto&aspect=true',
    },
  ];
}
