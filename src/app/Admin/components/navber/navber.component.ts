import { Component, EventEmitter, Output } from '@angular/core';
import { ProductServiceServiceService } from '../../service/product-service.service.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-navber',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './navber.component.html',
  styleUrl: './navber.component.css'
})
export class NavberComponent {
  public errorMsg:any[] = [];
  public divTop = '-1000px'; 
  messages:any[] = [];
  notifications:any[] = [];
  notice:any[] = [];
  totalNotification: any[] = [];
  constructor(
    private productService: ProductServiceServiceService
  ){}
    
    //date formateur
    public  formatReadableDate(dateString:any) {
      const options:any = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  
      const date = new Date(dateString);
  
      return date.toLocaleString('en-US', options);
    }

  togglePosition() {
    this.divTop = this.divTop === '-1000px' ? '60px' : '-1000px';
  }
  ngOnInit(): void {
    
    this.productService.getProducts().subscribe(res=>{
      //console.log(res.data.filter((product:any)=>product.quantity === 0));
      
      this.errorMsg = res.data.filter((product:any) => product.quantity === 0)
      .map((product:any) => ({

        name: product.name,
        id: product._id,
        image:product.image,
        errorMessage: `Error: Quantity for ${product.name} is 0. Please update the quantity.`,
        
      }));
      //console.log(this.errorMsg);
      
    })

    let storedData = localStorage.getItem('messages');
    storedData ? (this.messages = JSON.parse(storedData)) : (this.messages = []);
    console.log(this.messages);

    //notifications

    let notificationsData = localStorage.getItem('notifications');
    notificationsData ? (this.notifications = JSON.parse(notificationsData)) : (this.notifications = []);


    let notice = localStorage.getItem('notificationsmesi');
    notice ? (this.notice = JSON.parse(notice)) : (this.notice = []);
    console.log(this.notice);
    this.totalNotification = [...this.notice, ...this.notifications];
    console.log(this.totalNotification);
  }

      //price formatteur
      public formatPrice(price:any) {
        if (typeof price === 'string') {
          
          if (price.includes('$')) {
           
            return price.replace('$', '') + '$';
          } else {
            
            return price + '$';
          }
        } else if (typeof price === 'number') {
          
          return price.toString() + '$';
        } else {
          
          return 'N/A';
        }
      }
   @Output() changeComponent: EventEmitter<string> = new EventEmitter<string>();
    public onComponentChange(component: string): void {
      this.changeComponent.emit(component);
      console.log
    }


    // 

    // 
    

    

}
