import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  orders: any[] = [];
  orderProducts: any[] = [];
  shippingFees: number = 50;
  booksTotal: number = 0;
  user:any[] = [];
  sell:any[] = [];
  ngOnInit(): void {
    let storedData = localStorage.getItem('orderProducts');
    storedData ? (this.orders = JSON.parse(storedData)) : (this.orders = []);
     this.totalAmount();

     let costomer = localStorage.getItem('users');
     costomer ? (this.user = JSON.parse(costomer)) : (this.user = []);
    //  console.log(this.user);
    console.log('orders');
   ;
  }

  // Calculate Subtotal for specific book
  calcSubtotal(index: number): number {
    const price = this.orders[index].price;
    const quantity = this.orders[index].quantity;
    return price * quantity;
  }

  // Calculate Total Amount
  totalAmount(): void {
    let total = 0;
    for (let i = 0; i < this.orders.length; i++) {
      total += this.calcSubtotal(i);
    }
    this.booksTotal = total + this.shippingFees;
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
  isVisible: boolean[] = [false];

  toggleDiv(id: number) {
    this.isVisible[id]= !this.isVisible[id];
    
  }

  addtoSell(product: any,index:number): void {
    let storedData = localStorage.getItem('sell');
    storedData ? (this.sell = JSON.parse(storedData)) : (this.sell = []);
    this.sell.push(product);
    localStorage.setItem('sell', JSON.stringify(this.sell));
    this.orders.splice(index, 1);
    localStorage.setItem('orderProducts', JSON.stringify(this.orders));
    this.totalAmount();
  }
 
}

