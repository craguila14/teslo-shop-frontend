import { Component, inject, signal } from '@angular/core';
import { ProductCardComponent } from '@/products/components/product-card/product-card.component';
import { ProductService } from '@/products/services/products.service';
import { rxResource } from "@angular/core/rxjs-interop"
import { PaginationComponent } from "@/shared/components/pagination/pagination.component";
import { PaginationService } from '@/shared/components/pagination/pagination.service';


@Component({
  selector: 'app-home-page',
  imports: [ProductCardComponent, PaginationComponent],
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {
  productsService = inject(ProductService)
  paginationService = inject(PaginationService)

  productsResource = rxResource({
    request: () => ({page: this.paginationService.currentPage() - 1}),
    loader: ({request}) => {
      return this.productsService.getProducts({
        offset: request.page * 9,

      })
    }
    })
}
