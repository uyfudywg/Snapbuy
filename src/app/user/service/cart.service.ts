import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartSubject = new BehaviorSubject<any[]>(this.loadCartFromLocalStorage());
   wishlistSubject = new BehaviorSubject<any[]>(this.getWishlistFromLocalStorage());
  wishlist$ = this.wishlistSubject.asObservable();
  constructor() {}

   loadCartFromLocalStorage(): any[] {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  }

  getCart() {
    return this.cartSubject.asObservable();
  }
  isCurrentBookInCart:boolean = false;
  @Output() booleanEmitter = new EventEmitter<boolean>();
 
  addToCart(product: any): void {
    const currentCart = this.cartSubject.value;
    const exist = currentCart.find(item => item.id === product.id);

    if (exist) {
      alert('Product is already in cart');
         this.isCurrentBookInCart = true;
    } else {
      this.isCurrentBookInCart = false;
      currentCart.push(product);
      this.cartSubject.next(currentCart);  
      localStorage.setItem('cart', JSON.stringify(currentCart));  
    }
  }


saveCart(cart: any[]): void {
  localStorage.setItem('cart', JSON.stringify(cart));
  this.cartSubject.next([...cart]); // notify subscribers with new cart data
}

removeItem(index: number, cart: any[]): void {
  cart.splice(index, 1);
  this.saveCart(cart); // update cart and localStorage
}




  toggleBoolean() {
    this.booleanEmitter.emit(this.isCurrentBookInCart);
  }
//  Wishlist
  addOrRemoveToWishlist(product: any): void {
    const wishlist = this.getWishlistFromLocalStorage();
    
    
    const index = wishlist.findIndex(item => item.id === product.id);
    
    if (index !== -1) {
     
      wishlist.splice(index, 1);
    } else {
      
      wishlist.push(product);
    }

    
    this.updateWishlist(wishlist);
  }

  private updateWishlist(wishlist: any[]): void {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    this.wishlistSubject.next(wishlist);  // Notify subscribers about the change
  }

  
   getWishlistFromLocalStorage(): any[] {
    const wishlist = localStorage.getItem('wishlist');
    return wishlist ? JSON.parse(wishlist) : [];
  }



}

