import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';  // Fixed import
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient: HttpClient) { }

  baseUrl: string = 'https://ecommerce.routemisr.com/api/v1/auth/';
  userInfo: any;

  // Register a user
  register(userData: object): Observable<any> {
    return this._HttpClient.post(this.baseUrl + "signup", userData)
      .pipe(
        catchError(this.handleError) // Error handling
      );
  }

  // Log in a user
  login(userData: object): Observable<any> {
    return this._HttpClient.post(this.baseUrl + "signin", userData)
      .pipe(
        catchError(this.handleError) // Error handling
      );
  }

  // Decode JWT token
  decodeUser(): void {
    const encodedToken = localStorage.getItem('etoken'); 
    if (encodedToken) {
      try {
        const decoded: any = jwtDecode(encodedToken);
        this.userInfo = decoded;
        const expDate = decoded.exp ? decoded.exp * 1000 : null; 
  
        if (expDate && expDate < Date.now()) {
          console.log('  ');
        } else if (expDate) {
          console.log( '', decoded);
        } else {
          console.log('');
        }
      } catch (error) {
        console.error('', error); 
      }
    } else {
      console.log('    ');     
    }
  }
  

  // Error handling function for HTTP requests
  private handleError(error: any) {
    console.error('An error occurred', error);
    return throwError(error); // Updated to use throwError
  }
}
