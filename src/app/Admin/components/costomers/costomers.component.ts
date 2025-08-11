import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-costomers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './costomers.component.html',
  styleUrl: './costomers.component.css'
})
export class CostomersComponent {
  users:any[] = [];
  orders: any[] = [];
  favorites: any[] = [];
  ngOnInit(): void {
    let storedData = localStorage.getItem('users');
    storedData ? (this.users = JSON.parse(storedData)) : (this.users = []);
    console.log(this.users);


    let storeData = localStorage.getItem('sell');
    storeData ? (this.orders = JSON.parse(storeData)) : (this.orders = []);

    let Data = localStorage.getItem('wishlist');
     Data ? (this.favorites = JSON.parse(Data)) : (this.favorites = []);
    console.log('favorites');
    console.log(this.favorites);
  }

  isVisible: boolean[] = [false];
  
  toggleDiv(id: number) {
    this.isVisible[id]= !this.isVisible[id];
    
  }

 

}
