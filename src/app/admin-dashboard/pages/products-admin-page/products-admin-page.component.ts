import { ProductsTableComponent } from '@/products/components/products-table/products-table.component';
import { ProductService } from '@/products/services/products.service';
import { PaginationComponent } from '@/shared/components/pagination/pagination.component';
import { PaginationService } from '@/shared/components/pagination/pagination.service';
import { Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products-admin-page',
  imports: [ProductsTableComponent, PaginationComponent, RouterLink],
  templateUrl: './products-admin-page.component.html'
})
export class ProductsAdminPageComponent {

  productsService = inject(ProductService)
  paginationService = inject(PaginationService)

  productsPerPage = signal(10)

  productsResource = rxResource({
    request: () => ({
      page: this.paginationService.currentPage() - 1,
      limit: this.productsPerPage(),
    }),
       loader: ({request}) => {
      return this.productsService.getProducts({
        offset: request.page * 9,
        limit: request.limit

      })
    }
    })

}
