import { Component, input, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '@/products/interfaces/product.interface';
import { SlicePipe } from '@angular/common';
import { ProductImagePipe } from '@/products/pipes/product-image';

@Component({
  selector: 'product-card',
  imports: [RouterLink, SlicePipe, ProductImagePipe],
  templateUrl: './product-card.component.html'
})
export class ProductCardComponent {

  product = input.required<Product>()

  imageUrl = computed (() => {
    return `http://localhost:3000/api/files/product/${this.product().images[0]}`
  })

}
