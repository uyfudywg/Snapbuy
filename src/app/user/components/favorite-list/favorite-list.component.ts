
import { Router, RouterModule } from '@angular/router';
import { CartService } from '../../service/cart.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorite-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './favorite-list.component.html',
  styleUrl: './favorite-list.component.css'
})

export class FavoriteListComponent {
  wishlist: any[] = [];
  constructor(private CartService: CartService, private router: Router) {
    let storedData = localStorage.getItem('wishlist');
    storedData
      ? (this.wishlist = JSON.parse(storedData))
      : (this.wishlist = []);
  }

  // Remove Book From wishlist
  removproduct(index: number): void {
    this.wishlist.splice(index, 1);
    this.saveWishlistData();
     this.CartService.wishlistSubject.next(this.wishlist);
  }

  // Save wishlist data
  saveWishlistData(): void {
    localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
    this.CartService.wishlistSubject.next(this.wishlist);
  }

  // Navigate To Book Details
  navigateToBookDetails(id: any): void {
    this.scrollToTop();
    this.router.navigate(['shop', id]);
  }

  // Scroll To Top
  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
