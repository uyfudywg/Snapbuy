import { Component, Input ,SimpleChanges} from '@angular/core';
import { DataService } from '../../../../data.service';
import { CartService } from '../../../service/cart.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../footer/footer.component';
import { CategoriesComponent } from '../../categories/categories.component';
import { Prodect } from '../../../../product';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FooterComponent,ReactiveFormsModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  
   @Input() category: string = '';
    content: any[] = [];
    products: Prodect[] = [];
    technalogy: Prodect[] = [];
    cloth: Prodect[] = [];
    jewelery: Prodect[] = [];
    currentPage: number = 1;
    pageSize: number = 8;
    totalPages: number = 0;
    notifications: any[] = [];
  
   
    constructor(private DataService: DataService,private CartService:CartService ,private router: Router) {
      this.products = this.DataService.getProducts();
  
     }
    ngOnInit() {
      this.products = this.DataService.getProducts();
      this.technalogy = this.DataService.getTechnalogy();
      this.cloth = this.DataService.getClouth();
      this.jewelery = this.DataService.getScooter();
       
  
      let storedData = localStorage.getItem('notifications');
      storedData ? (this.notifications = JSON.parse(storedData)) : (this.notifications = []);
    }
  
    ngAfterViewInit(): void {
      this.changeWishlistIcons();
    }
  

  
    getBooksForCurrentPage() {
      return this.content.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
    }
  
    goToPage(page: number): void {
      if (page < 1 || page > this.totalPages) return;
      this.currentPage = page;
    }
  
    trackByBookId(index: number, book: any): number {
      return book.id;
    }
  //   this.sell.push(product);
     // localStorage.setItem('sell', JSON.stringify(this.sell));
    addToCart(product: any): void {
      this.CartService.addToCart(product);
      this.DataService.notifications.push({ message: `purchased ${product.name}` });
      this.notifications.push({ message: `purchased  ${product.name}` });
      localStorage.setItem('notifications', JSON.stringify(this.notifications));
    }
  
    addOrRemoveToWishlist(product: Prodect): void {
      this.CartService.addOrRemoveToWishlist(product);
      this.DataService.notifications.push({ message: `liked  ${product.name}` });
      this.notifications.push({ message: `liked  ${product.name}` });
      localStorage.setItem('notifications', JSON.stringify(this.notifications));
    }
  
    isInWishlist(bookId: number): boolean {
      const wishlist = this.CartService.getWishlistFromLocalStorage();
      return wishlist.some(b => b.id === bookId);
    }
  
    changeWishlistIcons(): void {
      this.DataService.changeWishlistIcons();
    }
  
    navigateToBook(id: any): void {
      window.scrollTo(0, 0);
      this.router.navigate(['shop', id]);
    }
  
 
  scrollToTop(): void {
    window.scrollTo(0, 0);
  }

   // Method to truncate text
   checkTextLength(text: string, length: number = 15): string {
    return text.length > length ? text.slice(0, length) + '...' : text;
  }


  // Track the book's identity in *ngFor loop
  trackBookId(index: number, book: any): number {
    return book.id;
  }

  // Handle window resizing for dynamic slides per view
  checkSizeOfWindow(): number {
    return window.innerWidth < 768 ? 1 : 4;  // Adjust based on screen width
  }

  

}
