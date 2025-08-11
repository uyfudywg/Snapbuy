import { CartService } from './../../service/cart.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../../data.service';
import { Prodect } from '../../../product';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  cart: any[] = [];
  booksSubtotal: number = 0;
  booksTotal: number = 0;
  shippingFees: number = 50;

 
  private cartSubject = new BehaviorSubject<any[]>(this.loadCartFromLocalStorage());

  constructor(
    private router: Router,
    private dataService: DataService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cart = this.loadCartFromLocalStorage();
    this.cartSubject.next(this.cart); 
    this.totalAmount();
  }

 
  scrollToTop(): void {
    window.scrollTo(0, 0);
  }

  
  private loadCartFromLocalStorage(): any[] {
    const storedData = localStorage.getItem('cart');
    return storedData ? JSON.parse(storedData) : []; 
  }

  
  addQuantity(index: number): void {
    this.cart[index].quantity += 1; 
    this.saveDataToCart();          
    this.totalAmount();            
    this.cartSubject.next([...this.cart]); 
  }

  
  subtractQuantity(index: number): void {
    if (this.cart[index].quantity > 1) {
      this.cart[index].quantity -= 1; 
      this.saveDataToCart();          
      this.totalAmount();             
      this.cartSubject.next([...this.cart]); 
    }
  }

  
  calcSubtotal(index: number): number {
    const { price, quantity } = this.cart[index]; 
    return price * quantity; 
  }


  totalAmount(): void {
    let total = 0;
    this.cart.forEach((item, index) => {
      total += this.calcSubtotal(index);
    });
    this.booksSubtotal = total;          
    this.booksTotal = total + this.shippingFees; 
  }

  removeItem(index: number): void {
    this.cartService.removeItem(index, this.cart); 
    this.totalAmount(); 
  }


  navigateToCheckout(): void {
    this.scrollToTop();
    this.router.navigate(['checkout']);
  }


  saveDataToCart(): void {
    localStorage.setItem('cart', JSON.stringify(this.cart)); 
  }
}
