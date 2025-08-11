 /*
 import { Prodect } from './../../../../product';
 import { DataService } from './../../../../data.service';
 import { CommonModule } from '@angular/common';
 import { AfterViewInit, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
 import { Router } from '@angular/router';
 import { CartService } from '../../../service/cart.service';
 

 @Component({
   selector: 'app-product-list',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './product-list.component.html',
   styleUrls: ['./product-list.component.css']
 })
 export class ProductListComponent implements OnChanges ,AfterViewInit{
   @Input() category: string = '';

   content: any[] = [];
   products: Prodect[] = [];
   technalogy: Prodect[] = [];
      cloth: Prodect[] = [];
   jewelery: Prodect[] = [];

   ngOnChanges(changes: SimpleChanges) {
     if (changes['category'] && changes['category'].currentValue !== changes['category'].previousValue) {
       console.log('Category changed:', this.category);  
       this.updateContent(this.category);
     }
   }

   updateContent(category: string) {
    
     
     
     if (category === '') {
       this.content = this.products;
     } else if (category === 'books') {
       this.content = this.products;
     } else if (category === 'house') {
       this.content = this.technalogy;
     } else if (category === 'cars') {
       this.content = this.cloth;
     } else if (category === 'club') {       this.content = this.jewelery;
     } else {
       this.content = [];        
     }
   }

   constructor(private DataService: DataService,private CartService:CartService ,private router: Router) {
    this.products = this.DataService.getProducts();

   }



   cart: any[] = [];
   ngOnInit() {
     this.products = this.DataService.getProducts();
    this.technalogy = this.DataService.getTechnalogy();
     this.cloth = this.DataService.getClouth();
   this.jewelery = this.DataService.getJewelery();
      console.log('المحتوى الأولي:', this.content); 
      
      this.DataService.getProductS().subscribe({
        next:(response) =>{
          console.log(response.data)
         
        }
      })
      
    
   }
  
   ngAfterViewInit(): void {
     this.changeWishlistIcons();
   }

  
  changeWishlistIcons(): void {
       this.DataService.changeWishlistIcons();
     }
  
   hideLeftButton = true;
   hideRightButton = false;

   scrollToTop(): void {
     window.scrollTo(0, 0);
   }

   
   navigateToBook(id: any): void {
     window.scrollTo(0, 0);
     this.router.navigate(['shop', id]);
     console.log(id);
   }

   trackBookId(index: number, book: any): number {
     return book.id;     
   }


   getBooksForCurrentPage() {
    return this.content.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
  }

addToCart(product: any): void {
  this.CartService.addToCart(product);  
}



addOrRemoveToWishlist(product: Prodect): void {
  this.CartService.addOrRemoveToWishlist(product);  
}
isInWishlist(bookId: number): boolean {
  const wishlist = this.CartService.getWishlistFromLocalStorage();   
  return wishlist.some(b => b.id === bookId);  
}
currentPage: number = 1;
  pageSize: number = 4; 
  totalPages: number = Math.ceil(this.content.length / this.pageSize);

  trackByBookId(index: number, book: any): number {
    return book.id;
  }

  
  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) return;  
    this.currentPage = page;
  }


  

 }
 */

 import { Component, Input, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './../../../../data.service';
import { CartService } from '../../../service/cart.service';
import { Prodect } from './../../../../product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnChanges, AfterViewInit {
  @Input() category: string = '';
  content: any[] = [];
  products: Prodect[] = [];
  technalogy: Prodect[] = [];
  cloth: Prodect[] = [];
  getBackpacks:Prodect[] = [];
  jewelery: Prodect[] = [];
  currentPage: number = 1;
  pageSize: number = 8;
  totalPages: number = 0;
  notifications: any[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['category'] && changes['category'].currentValue !== changes['category'].previousValue) {
      this.updateContent(this.category);
    }
  }
  constructor(private DataService: DataService,private CartService:CartService ,private router: Router) {
    this.products = this.DataService.getProducts();

   }
  ngOnInit() {
    this.products = this.DataService.getProducts();
    this.technalogy = this.DataService.getTechnalogy();
    this.cloth = this.DataService.getClouth();
    this.jewelery = this.DataService.getScooter();
    this.getBackpacks = this.DataService.getBackpack();
    this.updateContent(this.category); 

    let storedData = localStorage.getItem('notifications');
    storedData ? (this.notifications = JSON.parse(storedData)) : (this.notifications = []);
  }

  ngAfterViewInit(): void {
    this.changeWishlistIcons();
  }

  updateContent(category: string) {
    if (category === '') {
      this.content = this.products;
    } else if (category === 'books') {
      this.content = this.products;
    } else if (category === 'house') {
      this.content = this.technalogy;
    } else if (category === 'cars') {
      this.content = this.cloth;
    }else if (category === 'backpacks') {
      this.content = this.getBackpacks;
    } else if (category === 'club') {
      this.content = this.jewelery;
    } else {
      this.content = [];
    }

    // تحديث عدد الصفحات
    this.totalPages = Math.ceil(this.content.length / this.pageSize);
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


}
