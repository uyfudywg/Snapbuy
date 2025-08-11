 import { Component, HostListener } from '@angular/core';
 import { Router, RouterLink } from '@angular/router';
 import { DataService } from '../../../../data.service';
import { CartService } from '../../../service/cart.service';

 @Component({
   selector: 'app-header',
   standalone: true,
   imports: [RouterLink],
   templateUrl: './header.component.html',
   styleUrl: './header.component.css'
 })
 export class HeaderComponent {
  isFixed: boolean = false;
   cart!: any[];
   wishlist!: any[];
   wishlistLength: number = 0;
   constructor (private dataService:DataService,private CartService:CartService,private _Router:Router) { 
   

}
@HostListener('window:scroll', [])
onWindowScroll() {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  this.isFixed = scrollPosition > 50; // Adjust threshold as needed
}
  ngOnInit(): void {
    this.CartService.getCart().subscribe(cart => {
      this.cart = cart;
  });
  this.CartService.wishlist$.subscribe(wishlist => {
    this.wishlistLength = wishlist.length;  
  });
}
getcartproduct(): void {
  if ('cart' in localStorage) {
    this.cart = JSON.parse(localStorage.getItem('cart')!);
  }
}
scrollToTop(): void {
  window.scrollTo(0, 0);
}

activeForm: 'login' | 'register' | 'recover' = 'login'; // Default form
  setActiveForm(form: 'login' | 'register' | 'recover'): void {
    this.activeForm = form;
  }

 
  signOut():void {
    localStorage.removeItem('etoken')
    this._Router.navigate(['/login'])

  }

 }
