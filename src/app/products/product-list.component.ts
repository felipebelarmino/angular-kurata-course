import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 60;
  imageMargin: number = 2;
  showImage: boolean = false;

  private _listFilter: string = '';

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In Setter: ', value);
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: IProduct[] = [];

  products: IProduct[] = [
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

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();

    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy)
    );
  }

  ngOnInit(): void {
    this.listFilter = '';
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
