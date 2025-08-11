import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { DataService } from '../../../../../data.service';
import { CartService } from './../../../../service/cart.service';
@Component({
  selector: 'app-details-product',
  standalone: true,  
  imports: [CommonModule], 
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {
  productDetails: any;
  productId: any;
  isCurrentBookInCart: boolean = false;  

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private CartService: CartService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.productId = params['id'];
      this.getCurrentProduct();
    });

    this.CartService.getCart().subscribe(cart => {
      this.isProductInCart(cart);
    });
  }

  getCurrentProduct(): void {
    const products = this.dataService.getProducts();
    this.productDetails = products.find(product => product.id == this.productId);
  }

  addToCart(product: any): void {
    this.CartService.addToCart(product);
  }

  isProductInCart(cart: any[]): void {
    const productInCart = cart.find(item => item.id === this.productId);
    this.isCurrentBookInCart = !!productInCart;
  }
}
