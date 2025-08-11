import { CartService } from './../../service/cart.service';
import { Component, OnInit } from '@angular/core';
 import { CommonModule } from '@angular/common';
 import { RouterModule } from '@angular/router';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule,FormsModule],
  templateUrl: './checkout.component.html',
   styleUrl: './checkout.component.css'
 })
 export class CheckoutComponent implements OnInit {
   cart: any[] = [];
   dfe: any[] = [];
   orderProducts: any[] = [];
   wishlist: any[] = [];
   user: any[] = [];
   shippingFees: number = 50;
   booksTotal: number = 0;

   constructor( private CartService: CartService) { 
     this.storeDataInLocalStorage()

   }
  
   ngOnInit(): void {
     let storedData = localStorage.getItem('cart');
     storedData ? (this.cart = JSON.parse(storedData)) : (this.cart = []);

     let storedorder = localStorage.getItem('cart');
     storedorder ? (this.orderProducts = JSON.parse(storedorder)) : (this.orderProducts = []);
     this.totalAmount();
     this.loadUsers();

     let favort = localStorage.getItem('wishlist');
     favort ? (this.wishlist = JSON.parse(favort)) : (this.wishlist = []);
     this.totalAmount();
     console.log('orders');
     console.log(this.cart);
     console.log(this.wishlist);
     console.log(this.users);
   }

  // Calculate Subtotal for specific book
   calcSubtotal(index: number): number {
     const price = this.cart[index].price;
     const quantity = this.cart[index].quantity;
     return price * quantity;
   }

   // Calculate Total Amount
   totalAmount(): void {
     let total = 0;
     for (let i = 0; i < this.cart.length; i++) {
       total += this.calcSubtotal(i);
     }
     this.booksTotal = total + this.shippingFees;
   }

   scrollToTop(): void {
     window.scrollTo(0, 0);
   }
  
   firstName: string = ''; 
   lastName: string = ''; 
   email: string = '';
   phone: string = '';
   city: string = '';
   companyName: string = '';
   country: string = '';
   streetName: string = '';
   apartment: string = '';
   orderNotes: string = '';

   // Array to store user data
   users: { firstName: string, lastName: string, email: string, phone: string, city: string }[] = [];
 
   


   // Load users from localStorage
   loadUsers(): void {
   const storedUsers = localStorage.getItem('users');
     if (storedUsers) {
       this.users = JSON.parse(storedUsers);  // Parse the stored string back into an array
     }
   }
   // Order submission method with validation
   order(): void {
    if (this.firstName && this.lastName && this.email && this.phone && this.city) {
       const user = {
               firstName: this.firstName,
         lastName: this.lastName,
         email: this.email,
         phone: this.phone,
        city: this.city,
         totalAmount: this.booksTotal,
         data: new Date().toISOString(),
       };

       // Add the user object to the array
       this.users.push(user);
       localStorage.setItem('users', JSON.stringify(this.users)); 
       this.user.push(user);
       this.storeDataInLocalStorage(); 
       // Reset the form fields
       this.resetForm();
      
       console.log(this.users);  // To display the array in the console
     } else {
       alert("Please fill in all required fields!");
     }

     localStorage.removeItem('cart');
     this.CartService.getWishlistFromLocalStorage();
      this.CartService.loadCartFromLocalStorage();
      this.CartService.saveCart(this.dfe);

     
   }

   // Reset form method
   resetForm(): void {
     this.firstName = '';
     this.lastName = '';
     this.email = '';
     this.phone = '';
     this.city = '';
     this.apartment = '';
     this.streetName = '';
     this.country = '';
     this.companyName = '';
     this.orderNotes = '';
   }

//   // Form validity check
  formIsValid(): boolean {
     return this.firstName && this.lastName && this.email && this.phone && this.city ? true : false;
   }

   storeDataInLocalStorage(): void {
     const order = {
      cart: this.cart,
       wishlist: this.wishlist,
       user: this.user
     };
     localStorage.setItem('order', JSON.stringify(order)); // Store the order object
     localStorage.setItem('orderProducts', JSON.stringify(this.orderProducts));
     console.log('order', this.orderProducts);
    
   }



   reloadPage(){
      window.location.reload();
   }
 }
/*



  

   

     
  
 
*/