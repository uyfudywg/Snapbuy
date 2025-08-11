import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  @Output() categorySelected = new EventEmitter<string>();

  selectedCategory: string = 'books';    

  selectCategory(category: string): void {
    this.selectedCategory = category;
    console.log('Category clicked:', category);  // Debug log
     this.categorySelected.emit(category);
  }
}
