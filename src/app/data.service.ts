 /** */
 import { afterNextRender, Injectable } from '@angular/core';
import { Prodect } from './product';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

 @Injectable({
  providedIn: 'root'
 })
 export class DataService {
  allproducts: any[] = [  ]
  notifications: any[] = [];
wishlist: BehaviorSubject<any> = new BehaviorSubject([]);
 allProducts = {
  products: [
    {
      quantity: 1,
      id: 1550,
      name: 'Acer Aspire  Slim Laptop',
      price: 43.00,
       category: 'technology',
       date: new Date(),
      imageUrl: 'assets/images/product/technology-5.jpg',
      link: 'cart.html',
      discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
    },
    {
      quantity: 1,
      id: 1,
      name: '-000Xiaomi Wireless Earphones',
      price: 43.00,
      category: 'technology',
      imageUrl: 'assets/images/product/prodct-0r9r.jpg',
      link: 'cart.html',
      date: new Date()
    },
    {
      quantity: 1,
      id: 6,
      name: 'Mark Ryden',
      price: 43.00,
      category: 'Backpack',
      imageUrl:'assets/images/product/Backpack-4.jpg',
      date: new Date(),
      link: 'cart.html'
    
    },
    {
      quantity: 1,
      id: 313,
      name: 'Scooter for Kids 360v ',
      price: 43.00,
      imageUrl: 'assets/images/product/Scooter-3.jpg',
      link: 'cart.html',
      category: 'Scooter',
      date: new Date(),
      discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
    },
    {
      quantity: 1,
      id: 58,
      name: 'Laptoptasche',
      price: 43.00,
      imageUrl: 'assets/images/product/Backpack-17.jpg',
      date: new Date(),
      link: 'cart.html',
      discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum',
      category: 'Backpack',
    },
    {
      quantity: 1,
      id: 311,
      name: 'Scooter for Kids 36v ',
      price: 43.00,
      imageUrl: 'assets/images/product/Scooter-1.jpg',
      link: 'cart.html',
      category: 'Scooter',
      date: new Date(),
      discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
    },
    {
      quantity: 1,
      id: 15,
      name: 'Logitech G435 LIGHTSPEED ',
      price: 43.00,
       category: 'technology',
       date: new Date(),
      imageUrl: 'assets/images/product/technology-10.jpg',
      link: 'cart.html',
      discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
    },
    {
      quantity: 1,
      id: 13,
      name: 'SAMSUNG 49-Inch CHG90 144Hz',
      category: 'technology',
      price: 43000.00,
       date: new Date(),
      imageUrl: 'assets/images/try/tech-2.jpg',
      link: 'cart.html',
      discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
    },


    
    {
      quantity: 1,
      id: 156,
      name: 'Logitech G435 LIGHTSPEED lessWire',
      price: 43.00,
       category: 'technology',
       date: new Date(),
      imageUrl: 'assets/images/product/technology-11.jpg',
      link: 'cart.html',
      discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
    },
    {
      quantity: 1,
      id: 312,
      name: 'Scooter for Kids 30v ',
      price: 43.00,
      imageUrl: 'assets/images/product/Scooter-2.jpg',
      link: 'cart.html',
      category: 'Scooter',
      date: new Date(),
      discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
    },
    {
      quantity: 1,
      id: 5,
      name: 'FEDUAN Backpack',
      price: 43.00,
      imageUrl: 'assets/images/product/Backpack-9.jpg',
      date: new Date(),
      link: 'cart.html'
    },
    {
      quantity: 1,
      id: 152,
      name: 'Inch Portable Monitor',
      price: 43.00,
       category: 'technology',
       date: new Date(),
      imageUrl: 'assets/images/product/technology-2.jpg',
      link: 'cart.html',
      discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
    },




  ],
  technalogy:[
    {
  quantity: 1,
    id: 12,
    name: 'PlayStation 4 Slim 1TB',
    price: 43000.00,
    category: 'technology',
    imageUrl: 'assets/images/product/technology-9.jpg',
    link: 'cart.html',
     date: new Date(),
    discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
  },
  {
    quantity: 1,
    id: 13,
    name: 'SAMSUNG 49-Inch CHG90 144Hz',
    category: 'technology',
    price: 43000.00,
     date: new Date(),
    imageUrl: 'assets/images/try/tech-2.jpg',
    link: 'cart.html',
    discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
  },
  {
    quantity: 1,
    id: 14,
    name: 'SAMSUNG 49-Inch CHG90 144Hz',
    price: 83.00,
     category: 'technology',
    imageUrl: 'assets/images/try/tech-3.jpg',
    link: 'cart.html',
    date: new Date(),
    discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
  },
  {
    quantity: 1,
    id: 15,
    name: 'Logitech G435 LIGHTSPEED ',
    price: 43.00,
     category: 'technology',
     date: new Date(),
    imageUrl: 'assets/images/product/technology-10.jpg',
    link: 'cart.html',
    discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
  },
  {
   quantity: 1,
   id: 1550,
   name: 'Acer Aspire  Slim Laptop',
   price: 43.00,
    category: 'technology',
    date: new Date(),
   imageUrl: 'assets/images/product/technology-5.jpg',
   link: 'cart.html',
   discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
 },
 {
   quantity: 1,
   id: 154,
   name: 'Acer 15.6 inch Laptop',
   price: 43.00,
    category: 'technology',
    date: new Date(),
   imageUrl: 'assets/images/product/technology-4.jpg',
   link: 'cart.html',
   discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
 },
 {
   quantity: 1,
   id: 151,
   name: 'SAMSUNG 49-Inch CHG90 144Hz',
   price: 43.00,
    category: 'technology',
    date: new Date(),
   imageUrl: 'assets/images/product/technology-1.jpg',
   link: 'cart.html',
   discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
 },
 {
   quantity: 1,
   id: 152,
   name: 'Inch Portable Monitor',
   price: 43.00,
    category: 'technology',
    date: new Date(),
   imageUrl: 'assets/images/product/technology-2.jpg',
   link: 'cart.html',
   discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
 },
 {
   quantity: 1,
   id: 153,
   name: 'HP 18.6 inch Laptop',
   price: 43.00,
    category: 'technology',
    date: new Date(),
   imageUrl: 'assets/images/product/technology-3.jpg',
   link: 'cart.html',
   discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
 },
 {
   quantity: 1,
   id: 156,
   name: 'HP 15.6 inch Laptop',
   price: 43.00,
    category: 'technology',
    date: new Date(),
   imageUrl: 'assets/images/product/technology-6.jpg',
   link: 'cart.html',
   discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
 },
 {
   quantity: 1,
   id: 156,
   name: 'PlayStation 8 Slim 1TB',
   price: 43.00,
    category: 'technology',
    date: new Date(),
   imageUrl: 'assets/images/product/technology-9.jpg',
   link: 'cart.html',
   discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
 },
 {
   quantity: 1,
   id: 15600,
   name: 'PlayStation',
   price: 43.00,
    category: 'technology',
    date: new Date(),
   imageUrl: 'assets/images/try/tech-1.jpg',
   link: 'cart.html',
   discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
 },
 {
   quantity: 1,
   id: 156,
   name: 'Logitech G435 LIGHTSPEED lessWire',
   price: 43.00,
    category: 'technology',
    date: new Date(),
   imageUrl: 'assets/images/product/technology-11.jpg',
   link: 'cart.html',
   discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
 },
],
  cloth: [
    {
      quantity: 1,
      id: 21,
      name: 'cloth-1',
      price: 43.00,
      category: 'technology',
      date: new Date(),
      imageUrl: 'assets/images/try/cloth-1.jpg',
      link: 'cart.html'
    },
    {
      quantity: 1,
      id: 22,
      name: 'cloth-2',
      price: 43.00,
      category: 'cloth',
      imageUrl: 'assets/images/try/cloth-2.jpg',
      link: 'cart.html',
      date: new Date()
    },
    {
      quantity: 1,
      id: 24,
      name: 'cloth-3',
      price: 83.00,
      category: 'cloth',
      imageUrl: 'assets/images/try/cloth-3.jpg',
      link: 'cart.html',
      date: new Date()
    },
    {
      quantity: 1,
      id: 23,
      name: 'cloth-4',
      price: 43.00,
      category: 'cloth',
      imageUrl: 'assets/images/try/cloth-4.jpg',
      link: 'cart.html',
      date: new Date()
    }
  ],
  Scooter: [
    { 
      quantity: 1,
       id: 311,
       name: 'Scooter for Kids 36v ',
       price: 43.00,
       imageUrl: 'assets/images/product/Scooter-1.jpg',
       link: 'cart.html',
       category: 'Scooter',
       date: new Date(),
       discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
     },
     {
      quantity: 1,
      id: 312,
      name: 'Scooter for Kids 30v ',
      price: 43.00,
      imageUrl: 'assets/images/product/Scooter-2.jpg',
      link: 'cart.html',
      category: 'Scooter',
      date: new Date(),
      discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
    },
    {
      quantity: 1,
      id: 313,
      name: 'Scooter for Kids 360v ',
      price: 43.00,
      imageUrl: 'assets/images/product/Scooter-3.jpg',
      link: 'cart.html',
      category: 'Scooter',
      date: new Date(),
      discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
    },
    {
      quantity: 1,
      id: 314,
      name: ' Scooter for Kids 36v ',
      price: 43.00,
      imageUrl: 'assets/images/product/Scooter-4.jpg',
      link: 'cart.html',
      category: 'Scooter',
      date: new Date(),
      discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
    },
    {
      quantity: 1,
      id: 315,
      name: 'Printed Electric Scooter for Kids',
      price: 43.00,
      imageUrl: 'assets/images/product/Scooter-5.jpg',
      link: 'cart.html',
      category: 'Scooter',
      date: new Date(),
      discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
    },
    {
      quantity: 1,
      id: 316,
      name: 'Multi-color balance scooter',
      price: 43.00,
      imageUrl: 'assets/images/product/Scooter-6.jpg',
      link: 'cart.html',
      category: 'Scooter',
      date: new Date(),
      discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
    },
    {
      quantity: 1,
      id: 317,
      name: 'Printed Electric Scooter for Kids',
      price: 43.00,
      imageUrl: 'assets/images/product/Scooter-7.jpg',
      link: 'cart.html',
      category: 'Scooter',
      date: new Date(),
      discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
    },
    {
      quantity: 1,
      id: 318,
      name: 'Printed Electric Scooter for Kids',
      price: 43.00,
      imageUrl: 'assets/images/product/Scooter-8.jpg',
      link: 'cart.html',
      category: 'Scooter',
      date: new Date(),
      discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
    },
    {
      quantity: 1,
      id: 319,
      name: 'Multi-color balance scooter',
      price: 43.00,
      imageUrl: 'assets/images/product/Scooter-9.jpg',
      link: 'cart.html',
      category: 'Scooter',
      date: new Date(),
      discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
    },
     
    ],
  Backpack: [
    {
      quantity: 1,
      id: 50,
      name: 'Xiaomi Wireless Earphones',
      price: 43.00,
      category: 'technology',
      imageUrl: 'assets/images/product/Backpack-9.jpg',
      link: 'cart.html',
      date: new Date(),
      discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum'
    },
    {
      quantity: 1,
      id: 52,
      name: 'Backpack',
      price: 50.00,
      imageUrl: 'assets/images/product/Backpack-1.jpg',
      date: new Date(),
      discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum',
      category: 'Backpack',
      link: 'cart.html'
    },
    {
      quantity: 1,
      id: 53,
      name: 'Business Laptop Backpack',
      price: 78.00,
      date: new Date(),
      imageUrl: 'assets/images/product/Backpack-8.jpg',
      link: 'cart.html',
      discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum',
      category: 'Backpack',
    },
    {
      quantity: 1,
      id: 54,
      name: 'Girls Backpack,School',
      price: 43.00,
      date: new Date(),
      imageUrl: 'assets/images/product/Backpack-3.jpg',
      link: 'cart.html',
      discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum',
      category: 'Backpack',
    },
    {
      quantity: 1,
      id: 55,
      name: 'FEDUAN Backpack',
      price: 43.00,
      imageUrl: 'assets/images/product/Backpack-9.jpg',
      date: new Date(),
      link: 'cart.html',
      discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum',
      category: 'Backpack',
    },
    {
      quantity: 1,
      id: 56,
      name: 'Mark Ryden',
      price: 43.00,
      imageUrl:'assets/images/product/Backpack-4.jpg',
      date: new Date(),
      link: 'cart.html',
      discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum',
      category: 'Backpack',
    
    },
    {
      quantity: 1,
      id: 57,
      name: 'Vitality Fashion Backpack',
      price: 43.00,
      imageUrl: 'assets/images/product/Backpack-5.jpg',
      date: new Date(),
      link: 'cart.html',
      discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum',
      category: 'Backpack',
    },
    {
      quantity: 1,
      id: 58,
      name: 'Laptoptasche',
      price: 43.00,
      imageUrl: 'assets/images/product/Backpack-6.jpg',
      date: new Date(),
      link: 'cart.html',
      discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum',
      category: 'Backpack',
    },
    {
      quantity: 1,
      id: 58,
      name: 'Laptoptasche',
      price: 43.00,
      imageUrl: 'assets/images/product/Backpack-7.jpg',
      date: new Date(),
      link: 'cart.html',
      discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum',
      category: 'Backpack',
    },
    {
      quantity: 1,
      id: 58,
      name: 'Laptoptasche',
      price: 43.00,
      imageUrl: 'assets/images/product/Backpack-10.jpg',
      date: new Date(),
      link: 'cart.html',
      discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum',
      category: 'Backpack',
    }
  ]
};

   products:Prodect[] = [
     {
       quantity: 1,
        id: 1,
       name: 'Ergonomic Chair',
       price: 43.00,
       imageUrl: 'assets/images/product/Backpack-1.jpg',
       category: 'furniture',
       link: 'cart.html',
       date: new Date(),
       discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
     },
     {
       quantity: 1,
       id: 2,
       name: 'Nordic Chair',
       price: 50.00,
       category: 'furniture',
       imageUrl: 'assets/image/product-1.png',
       link: 'cart.html',
       date: new Date(),
       discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
     },
     {
       quantity: 1,
       id: 3,
       name: 'Kruzo Aero Chair',
       price: 78.00,
        category: 'furniture',
       imageUrl: 'assets/image/product-2.png',
       link: 'cart.html',
       date: new Date(),
       discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
     },
     {
       quantity: 1,
       id: 4,
       name: 'Ergonomic Chair',
       price: 43.00,
       imageUrl: 'assets/image/chair-4070161_640 (1).webp',
       link: 'cart.html',
       category: 'furniture',
       date: new Date(),
       discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
     },
     {
       quantity: 1,
       id: 5,
       name: 'Ergonomic Chair',
       price: 43.00,
       category: 'furniture',
       imageUrl: 'assets/image/R.png',
       link: 'cart.html',
       date: new Date(),
       discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
     },
     {
       quantity: 1,
       id: 6,
       name: 'Lounge Chair Mockup',
       price: 43.00,
       category: 'furniture',
       imageUrl: 'assets/image/23216.png',
       link: 'cart.html',
       date: new Date(),
       discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
     },
     {
       quantity: 1,
       id: 7,
       name: 'Woven Chair Mockup',
       price: 43.00,
       category: 'furniture',
       imageUrl: 'assets/image/5456.png',
       link: 'cart.html',
        date: new Date(),
       discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
     },
     {
       quantity: 1,
       id: 8,
       name: 'Lounge Chair Mockup',
       price: 43.00,
       category: 'furniture',
       imageUrl: 'assets/image/2024.png',
       link: 'cart.html',
        date: new Date(),
       discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
     }
 
   ];

   technalogy:Prodect[] = [
       {
     quantity: 1,
       id: 12,
       name: 'PlayStation 4 Slim 1TB',
       price: 43000.00,
       category: 'technology',
       imageUrl: 'assets/images/product/technology-9.jpg',
       link: 'cart.html',
        date: new Date(),
       discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
     },
     {
       quantity: 1,
       id: 13,
       name: 'SAMSUNG 49-Inch CHG90 144Hz',
       category: 'technology',
       price: 43000.00,
        date: new Date(),
       imageUrl: 'assets/images/try/tech-2.jpg',
       link: 'cart.html',
       discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
     },
     {
       quantity: 1,
       id: 14,
       name: 'SAMSUNG 49-Inch CHG90 144Hz',
       price: 83.00,
        category: 'technology',
       imageUrl: 'assets/images/try/tech-3.jpg',
       link: 'cart.html',
       date: new Date(),
       discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
     },
     {
       quantity: 1,
       id: 15,
       name: 'Logitech G435 LIGHTSPEED ',
       price: 43.00,
        category: 'technology',
        date: new Date(),
       imageUrl: 'assets/images/product/technology-10.jpg',
       link: 'cart.html',
       discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
     },
     {
      quantity: 1,
      id: 1550,
      name: 'Acer Aspire  Slim Laptop',
      price: 43.00,
       category: 'technology',
       date: new Date(),
      imageUrl: 'assets/images/product/technology-5.jpg',
      link: 'cart.html',
      discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
    },
    {
      quantity: 1,
      id: 154,
      name: 'Acer 15.6 inch Laptop',
      price: 43.00,
       category: 'technology',
       date: new Date(),
      imageUrl: 'assets/images/product/technology-4.jpg',
      link: 'cart.html',
      discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
    },
    {
      quantity: 1,
      id: 151,
      name: 'SAMSUNG 49-Inch CHG90 144Hz',
      price: 43.00,
       category: 'technology',
       date: new Date(),
      imageUrl: 'assets/images/product/technology-1.jpg',
      link: 'cart.html',
      discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
    },
    {
      quantity: 1,
      id: 152,
      name: 'Inch Portable Monitor',
      price: 43.00,
       category: 'technology',
       date: new Date(),
      imageUrl: 'assets/images/product/technology-2.jpg',
      link: 'cart.html',
      discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
    },
    {
      quantity: 1,
      id: 153,
      name: 'HP 18.6 inch Laptop',
      price: 43.00,
       category: 'technology',
       date: new Date(),
      imageUrl: 'assets/images/product/technology-3.jpg',
      link: 'cart.html',
      discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
    },
    {
      quantity: 1,
      id: 156,
      name: 'HP 15.6 inch Laptop',
      price: 43.00,
       category: 'technology',
       date: new Date(),
      imageUrl: 'assets/images/product/technology-6.jpg',
      link: 'cart.html',
      discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
    },
    {
      quantity: 1,
      id: 156,
      name: 'PlayStation 8 Slim 1TB',
      price: 43.00,
       category: 'technology',
       date: new Date(),
      imageUrl: 'assets/images/product/technology-9.jpg',
      link: 'cart.html',
      discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
    },
    {
      quantity: 1,
      id: 15600,
      name: 'PlayStation',
      price: 43.00,
       category: 'technology',
       date: new Date(),
      imageUrl: 'assets/images/try/tech-1.jpg',
      link: 'cart.html',
      discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
    },
    {
      quantity: 1,
      id: 156,
      name: 'Logitech G435 LIGHTSPEED lessWire',
      price: 43.00,
       category: 'technology',
       date: new Date(),
      imageUrl: 'assets/images/product/technology-11.jpg',
      link: 'cart.html',
      discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
    },
   ];

   cloth:Prodect[] = [
     {
       quantity: 1,
       id: 21,
       name: 'cloth-1',
       price: 43.00,
       category: 'cloth',
       imageUrl: 'assets/images/try/cloth-1.jpg',
       link: 'cart.html',
       date: new Date(),
       discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
     },
     {
       quantity: 1,
       id: 22,
       name: 'cloth-2',
       price: 43.00,
        category: 'cloth',
       imageUrl: 'assets/images/try/cloth-2.jpg',
       link: 'cart.html',
        date: new Date(),
       discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
     },
     {
       quantity: 1,
       id: 24,
       name: 'cloth-3',
       price: 83.00,
        category: 'cloth',
       imageUrl: 'assets/images/try/cloth-3.jpg',
       link: 'cart.html',
        date: new Date(),
       discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
     },
     {
       quantity: 1,
       id: 23,
       name: 'cloth-4',
       price: 43.00,
       imageUrl: 'assets/images/try/cloth-4.jpg',
       link: 'cart.html',
       category: 'cloth',
        date: new Date(),
       discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
     },
   ];

   Scooter:Prodect[] = [
    {
       quantity: 1,
       id: 311,
       name: 'Scooter for Kids 36v ',
       price: 43.00,
       imageUrl: 'assets/images/product/Scooter-1.jpg',
       link: 'cart.html',
       category: 'Scooter',
       date: new Date(),
       discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
     },
     {
      quantity: 1,
      id: 312,
      name: 'Scooter for Kids 30v ',
      price: 43.00,
      imageUrl: 'assets/images/product/Scooter-2.jpg',
      link: 'cart.html',
      category: 'Scooter',
      date: new Date(),
      discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
    },
    {
      quantity: 1,
      id: 313,
      name: 'Scooter for Kids 360v ',
      price: 43.00,
      imageUrl: 'assets/images/product/Scooter-3.jpg',
      link: 'cart.html',
      category: 'Scooter',
      date: new Date(),
      discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
    },
    {
      quantity: 1,
      id: 314,
      name: ' Scooter for Kids 36v ',
      price: 43.00,
      imageUrl: 'assets/images/product/Scooter-4.jpg',
      link: 'cart.html',
      category: 'Scooter',
      date: new Date(),
      discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
    },
    {
      quantity: 1,
      id: 315,
      name: 'Printed Electric Scooter for Kids',
      price: 43.00,
      imageUrl: 'assets/images/product/Scooter-5.jpg',
      link: 'cart.html',
      category: 'Scooter',
      date: new Date(),
      discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
    },
    {
      quantity: 1,
      id: 316,
      name: 'Multi-color balance scooter',
      price: 43.00,
      imageUrl: 'assets/images/product/Scooter-6.jpg',
      link: 'cart.html',
      category: 'Scooter',
      date: new Date(),
      discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
    },
    {
      quantity: 1,
      id: 317,
      name: 'Printed Electric Scooter for Kids',
      price: 43.00,
      imageUrl: 'assets/images/product/Scooter-7.jpg',
      link: 'cart.html',
      category: 'Scooter',
      date: new Date(),
      discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
    },
    {
      quantity: 1,
      id: 318,
      name: 'Printed Electric Scooter for Kids',
      price: 43.00,
      imageUrl: 'assets/images/product/Scooter-8.jpg',
      link: 'cart.html',
      category: 'Scooter',
      date: new Date(),
      discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
    },
    {
      quantity: 1,
      id: 319,
      name: 'Multi-color balance scooter',
      price: 43.00,
      imageUrl: 'assets/images/product/Scooter-9.jpg',
      link: 'cart.html',
      category: 'Scooter',
      date: new Date(),
      discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis dis ridicul parturient montes.'
    },
     
    ];
    Backpack:Prodect[] = [
      {
        quantity: 1,
        id: 50,
        name: 'Xiaomi Wireless Earphones',
        price: 43.00,
        category: 'technology',
        imageUrl: 'assets/images/product/Backpack-9.jpg',
        link: 'cart.html',
        date: new Date(),
        discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum'
      },
      {
        quantity: 1,
        id: 52,
        name: 'Backpack',
        price: 50.00,
        imageUrl: 'assets/images/product/Backpack-1.jpg',
        date: new Date(),
        discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum',
        category: 'Backpack',
        link: 'cart.html'
      },
      {
        quantity: 1,
        id: 53,
        name: 'Business Laptop Backpack',
        price: 78.00,
        date: new Date(),
        imageUrl: 'assets/images/product/Backpack-8.jpg',
        link: 'cart.html',
        discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum',
        category: 'Backpack',
      },
      {
        quantity: 1,
        id: 54,
        name: 'Girls Backpack,School',
        price: 43.00,
        date: new Date(),
        imageUrl: 'assets/images/product/Backpack-3.jpg',
        link: 'cart.html',
        discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum',
        category: 'Backpack',
      },
      {
        quantity: 1,
        id: 55,
        name: 'FEDUAN Backpack',
        price: 43.00,
        imageUrl: 'assets/images/product/Backpack-9.jpg',
        date: new Date(),
        link: 'cart.html',
        discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum',
        category: 'Backpack',
      },
      {
        quantity: 1,
        id: 56,
        name: 'Mark Ryden',
        price: 43.00,
        imageUrl:'assets/images/product/Backpack-4.jpg',
        date: new Date(),
        link: 'cart.html',
        discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum',
        category: 'Backpack',
      
      },
      {
        quantity: 1,
        id: 57,
        name: 'Vitality Fashion Backpack',
        price: 43.00,
        imageUrl: 'assets/images/product/Backpack-5.jpg',
        date: new Date(),
        link: 'cart.html',
        discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum',
        category: 'Backpack',
      },
      {
        quantity: 1,
        id: 58,
        name: 'Laptoptasche',
        price: 43.00,
        imageUrl: 'assets/images/product/Backpack-6.jpg',
        date: new Date(),
        link: 'cart.html',
        discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum',
        category: 'Backpack',
      },
      {
        quantity: 1,
        id: 58,
        name: 'Laptoptasche',
        price: 43.00,
        imageUrl: 'assets/images/product/Backpack-11.jpg',
        date: new Date(),
        link: 'cart.html',
        discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum',
        category: 'Backpack',
      },
      {
        quantity: 1,
        id: 58,
        name: 'Laptoptasche',
        price: 43.00,
        imageUrl: 'assets/images/product/Backpack-12.jpg',
        date: new Date(),
        link: 'cart.html',
        discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum',
        category: 'Backpack',
      },
      {
        quantity: 1,
        id: 58,
        name: 'Laptoptasche',
        price: 43.00,
        imageUrl: 'assets/images/product/Backpack-13.jpg',
        date: new Date(),
        link: 'cart.html',
        discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum',
        category: 'Backpack',
      },
      {
        quantity: 1,
        id: 58,
        name: 'Laptoptasche',
        price: 43.00,
        imageUrl: 'assets/images/product/Backpack-14.jpg',
        date: new Date(),
        link: 'cart.html',
        discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum',
        category: 'Backpack',
      },
      {
        quantity: 1,
        id: 58,
        name: 'Laptoptasche',
        price: 43.00,
        imageUrl: 'assets/images/product/Backpack-15.jpg',
        date: new Date(),
        link: 'cart.html',
        discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum',
        category: 'Backpack',
      },
      {
        quantity: 1,
        id: 58,
        name: 'Laptoptasche',
        price: 43.00,
        imageUrl: 'assets/images/product/Backpack-6.jpg',
        date: new Date(),
        link: 'cart.html',
        discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum',
        category: 'Backpack',
      },
      {
        quantity: 1,
        id: 58,
        name: 'Laptoptasche',
        price: 43.00,
        imageUrl: 'assets/images/product/Backpack-16.jpg',
        date: new Date(),
        link: 'cart.html',
        discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum',
        category: 'Backpack',
      },
      {
        quantity: 1,
        id: 58,
        name: 'Laptoptasche',
        price: 43.00,
        imageUrl: 'assets/images/product/Backpack-17.jpg',
        date: new Date(),
        link: 'cart.html',
        discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum',
        category: 'Backpack',
      },
      {
        quantity: 1,
        id: 58,
        name: 'Laptoptasche',
        price: 43.00,
        imageUrl: 'assets/images/product/Backpack-7.jpg',
        date: new Date(),
        link: 'cart.html',
        discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum',
        category: 'Backpack',
      },
      {
        quantity: 1,
        id: 58,
        name: 'Laptoptasche',
        price: 43.00,
        imageUrl: 'assets/images/product/Backpack-18.jpg',
        date: new Date(),
        link: 'cart.html',
        discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum',
        category: 'Backpack',
      },
      {
        quantity: 1,
        id: 58,
        name: 'Laptoptasche',
        price: 43.00,
        imageUrl: 'assets/images/product/Backpack-4.jpg',
        date: new Date(),
        link: 'cart.html',
        discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum',
        category: 'Backpack',
      },
      {
        quantity: 1,
        id: 58,
        name: 'Laptoptasche',
        price: 43.00,
        imageUrl: 'assets/images/product/Backpack-6.jpg',
        date: new Date(),
        link: 'cart.html',
        discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum',
        category: 'Backpack',
      },
      {
        quantity: 1,
        id: 58,
        name: 'Laptoptasche',
        price: 43.00,
        imageUrl: 'assets/images/product/Backpack-10.jpg',
        date: new Date(),
        link: 'cart.html',
        discribtion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean nec montes vestibulum',
        category: 'Backpack',
      }
    ];


   getScooter():Prodect[]{
     return this.Scooter;
   }

    getBackpack():Prodect[]{
      return this.Backpack;
    }

   getClouth():Prodect[]{
     return this.cloth;
   }

   getTechnalogy():Prodect[]{
     return this.technalogy;
   }
  
  getProducts(): any[] {
    return [
      ...this.allProducts.products,

      ...this.allProducts.technalogy,
      ...this.allProducts.cloth,
      ...this.allProducts.Scooter,
      ...this.allProducts.products,
      ...this.allProducts.Backpack
     
      
    ];
  }


   getallProducts():any{
      return this.allProducts;
   }

  constructor(private httpClient: HttpClient) {

    afterNextRender(() => {

       // Get wishlist
      const storedWishlist = localStorage.getItem('wishlist');
      storedWishlist
         ? this.wishlist.next(JSON.parse(storedWishlist))
         : this.wishlist.next([]);
     });

     const storedNotifications = localStorage.getItem('woww');
      if (storedNotifications) {
        this.notifications = JSON.parse(storedNotifications);
      }
    }


    baseUrl:string = 'https://ecommerce.routemisr.com/api/v1/';

    getProductS():Observable<any> {
      return this.httpClient.get(this.baseUrl +`products`)
    }
  
    getCategories():Observable<any> {
      return this.httpClient.get(this.baseUrl +`categories`)
    }

    // This part related to wishlist and favourite icons
   // Change class name of wishlist icons
   changeWishlistIcons(): void {
     let dataInWishlist: any;
     this.wishlist.subscribe((value) => (dataInWishlist = value));
     const wishlistIcons = document.querySelectorAll<HTMLElement>(
       'i[title="Add To Wishlist"]'
     );
     if (dataInWishlist.length !== 0) {
       for (let i = 0; i < wishlistIcons.length; i++) {
         for (let k = 0; k < dataInWishlist.length; k++) {
           if (wishlistIcons[i].id === dataInWishlist[k].id) {
             wishlistIcons[i].className = 'fa-solid fa-heart';
             break;
           } else {
             wishlistIcons[i].className = 'fa-regular fa-heart';
           }
         }
       }
     } else {
       wishlistIcons.forEach((icon) => (icon.className = 'fa-regular fa-heart'));
     }
   }

//   // Add to or Remove from wishlist
   addOrRemoveToWishlist(bookId: any): void {
     let dataInWishlist: any;
     this.wishlist.subscribe((value) => (dataInWishlist = value));
     const currentBook = this.allproducts.find((book) => book.id === bookId);
     let existCurrentBook = dataInWishlist.find(
       (ele: any) => ele.id === currentBook.id
     )
       ? true
              : false;
    // Check if current book exist in the wishlist or not
     if (!existCurrentBook) {
       dataInWishlist.push({
         id: currentBook.id,
         image: currentBook.volumeInfo.imageLinks.smallThumbnail,
         title: currentBook.volumeInfo.title,
         price: currentBook.saleInfo.listPrice.amount,
         category: currentBook.volumeInfo.categories,
         date: new Date(),       
        });
     } else {
       dataInWishlist.forEach((book: any, bookIndex: any) => {
         if (book.id === currentBook.id) {
          dataInWishlist.splice(bookIndex, 1);
         }
       });
     }
     localStorage.setItem('wishlist', JSON.stringify(dataInWishlist));
     this.wishlist.next(dataInWishlist);
   }

   addFavoriteNotification(product: any): void {
    // Add new notification to the notifications array
    //this.notifications.push({ message: `favorite ${product.name}` });
    this.notifications.push({ message: product });
    // Save the updated notifications array to localStorage
    localStorage.setItem('woww', JSON.stringify(this.notifications));
  }
}

 



