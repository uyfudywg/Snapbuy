import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavberComponent } from '../navber/navber.component';
import { OverviewComponent } from '../overview/overview.component';
import { OrdersComponent } from '../orders/orders.component';
import { CostomersComponent } from '../costomers/costomers.component';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product/product.component';
import { SalesComponent } from '../sales/sales.component';
import { FavoritesComponent } from '../favorites/favorites.component';
import { ChatComponent } from '../chat/chat.component';

// import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    SidebarComponent,
    NavberComponent,
    OverviewComponent,
    OrdersComponent,
    CostomersComponent,
    CommonModule,
    ProductComponent
    ,SalesComponent,
    FavoritesComponent,
    ChatComponent,
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  
  public activeComponent: string = 'overview'; 
 
  constructor() {}
  public changeComponent(component: string): void {
    this.activeComponent = component;
    console.log(this.activeComponent);
  }

}






