import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../../../data.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
   templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  
  form: FormGroup;
  showModal: boolean = false;
  products: any[] = []; 
 productLenght:number = this.products.length;
  base64: any = ''; 
  editingProductIndex: number | null = null; 

  constructor(private DataService: DataService, private router: Router, private fb: FormBuilder) {

    this.products = this.DataService.getProducts(); 
    this.form = this.fb.group({
      title: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required],
      category: ['', Validators.required] 
    });
  }

  ngOnInit(): void {
   
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      this.products = JSON.parse(storedProducts);
    }

   console.log(this.productLenght);
  }

  openModal(productIndex: number | null = null): void {
    if (productIndex !== null) {

      this.editingProductIndex = productIndex;
      const product = this.products[productIndex];

     
      this.form.setValue({
        title: product.name || '', 
        price: product.price || '',
        description: product.description || '', 
        imageUrl: product.imageUrl || '', 
        category: product.category || ''  
      });

     
      this.base64 = product.imageUrl || '';  
    } else {
     
      this.editingProductIndex = null;
      this.form.reset({
        title: '',
        price: '',
        description: '',  
        imageUrl: '',
        category: ''
      });
      this.base64 = ''; 
    }

    this.showModal = true;
  }


  closeModal(): void {
    this.showModal = false;
    this.form.reset();
    this.base64 = '';
  }

 
  getImagePath(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.base64 = e.target.result; 
        this.form.controls['imageUrl'].setValue(this.base64); 
      };
      reader.readAsDataURL(file);
    }
  }

  addProduct(): void {
    if (this.form.valid) {
      const product = {
        name: this.form.value.title,
        category: this.form.value.category, 
        price: this.form.value.price,
        description: this.form.value.description,
        imageUrl: this.base64
      };

      if (this.editingProductIndex !== null) {
      
        this.products[this.editingProductIndex] = product;
      } else {
      
        this.products.push(product);
      }

      localStorage.setItem('products', JSON.stringify(this.products));

      alert(this.editingProductIndex !== null ? 'Product updated successfully!' : 'Product added successfully!');
      this.closeModal(); 
    } else {
      alert("Please fill in all fields correctly.");
    }
  }
}


