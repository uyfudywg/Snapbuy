
import { Component } from '@angular/core';
import { PageTitleComponent } from '../../page_title/page-title/page-title.component';
import { CategoryComponent } from '../category/category/category.component';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [PageTitleComponent, CategoryComponent, ProductListComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  
  selectedCategory: string = '';

  onCategorySelected(category: string) {
    console.log('Category selected in Shop:', category);  // Debug log
    this.selectedCategory = category;
  }

  
}
