import { Product } from '@/products/interfaces/product.interface';
import { Component, input } from '@angular/core';
import { ProductImagePipe } from '@/products/pipes/product-image';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'products-table',
  imports: [ProductImagePipe, RouterLink, CurrencyPipe],
  templateUrl: './products-table.component.html'
})
export class ProductsTableComponent {

  products = input.required<Product[]>()

}
