import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from '../../../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {
  product: any[] = [];
  products: any[] = [];
  orders: any[] = [];
  Costumers: any[] = [];
  cats:any[] = [];
  tags:any[] = [];
  comments:any[] = [];
  user:any[] = [];
  sales:any[] = [];
  wishlist:any[] = [];
  totalSales: number = 0;
  income: number = 0;
  @Output() changeComponentEvent: EventEmitter<string> = new EventEmitter<string>();

  public activeComponent: string = 'overview'; 

  ngOnInit(): void {
   
     let costomer = localStorage.getItem('users');
     costomer ? (this.user = JSON.parse(costomer)) : (this.user = []);
     console.log(this.user);

     let storedData = localStorage.getItem('sell');
     storedData ? (this.sales = JSON.parse(storedData)) : (this.sales = []);

      let storedData1 = localStorage.getItem('products');
      storedData1 ? (this.products = JSON.parse(storedData1)) : (this.products = []);

      let storefavorite = localStorage.getItem('wishlist');
      storefavorite ? (this.wishlist = JSON.parse(storefavorite)) : (this.wishlist = []);

     this.totalAmount();
      this.totalIncome();

  }


  public onComponentChange(component: string): void {
    this.activeComponent = component;  
    this.changeComponentEvent.emit(component); 
    console.log(this.activeComponent);
  }

  
  category:any[]=[]
  cartprodect:any[]=[]
  constructor(private DataService: DataService ,private router: Router) {
    // this.products = this.DataService.getProducts();

   }

   totalAmount(): void {
    let total = 0;
    for (let i = 0; i < this.sales.length; i++) {
      total += this.sales[i].quantity;
    }
    this.totalSales = total;
  }
  // Calculate Total income
  totalIncome(): void {
    let total = 0;
    for (let i = 0; i < this.sales.length; i++) {
      total += this.sales[i].quantity * this.sales[i].price;
    }
    this.income = total;
  }

}
