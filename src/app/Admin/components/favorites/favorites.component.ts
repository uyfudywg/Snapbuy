import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {
  favorites: any[] = [];

  ngOnInit(): void {
    let storedData = localStorage.getItem('wishlist');
    storedData ? (this.favorites = JSON.parse(storedData)) : (this.favorites = []);
    console.log('favorites');
    console.log(this.favorites);
  }



}
