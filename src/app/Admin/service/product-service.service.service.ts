import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceServiceService {

 
  
  private apiUrl = 'http://localhost:3000/api/v1/products';

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
    
  }

  public postProduct(productData: any): Observable<any> {
    return this.http.post(this.apiUrl, JSON.stringify(productData));
  }

  public deleteAllProducts(): Observable<any> {
    return this.http.delete(this.apiUrl);
  }

  public updateProductById(productId: string, productData: any): Observable<any> {
    const updateUrl = `${this.apiUrl}/product/${productId}`;
    return this.http.patch(updateUrl, productData);
  }

  public deleteProductById(productId: string): Observable<any> {
    const deleteUrl = `${this.apiUrl}/product/${productId}`;
    return this.http.delete(deleteUrl);
  }

  public getProductById(productId: string): Observable<any> {
    const getUrl = `${this.apiUrl}/product/${productId}`;
    return this.http.get(getUrl);
  }

}
