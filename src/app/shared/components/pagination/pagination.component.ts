import { Component, input, computed, signal, linkedSignal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagination',
  imports: [RouterLink],
  templateUrl: './pagination.component.html'
})
export class PaginationComponent {

  currentPage = input<number>(2);
  pages = input(0);

  activePage = linkedSignal(this.currentPage);

  getPagesList = computed(() => {
    return Array.from({length: this.pages()}, (_ , i) => i + 1);
  });

}
