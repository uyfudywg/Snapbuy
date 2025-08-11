import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})
export class SalesComponent {
  sales:any[] = [];
  totalSales: number = 0;
  ngOnInit(): void {
    let storedData = localStorage.getItem('sell');
    storedData ? (this.sales = JSON.parse(storedData)) : (this.sales = []);
    this.totalAmount();
    console.log(this.totalSales);
    
  }
  // Calculate Total Amount
  totalAmount(): void {
    let total = 0;
    for (let i = 0; i < this.sales.length; i++) {
      total += this.sales[i].quantity;
    }
    this.totalSales = total;
  }
}
