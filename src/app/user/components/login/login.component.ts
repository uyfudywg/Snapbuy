import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink], 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

/** 
export class LoginComponent {
  errMsg: string = '';
  isLoading: boolean = false;

  loginForm: FormGroup; 

  
  constructor(
    private _AuthService: AuthService,
    private _Router: Router,
    private _FormBuilder: FormBuilder
  ) {
    
    this.loginForm = this._FormBuilder.group({
      email: ['', [Validators.required, Validators.email]], 
      password: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)]] 
    });
  }

  handleForm(): void {
    const userData = this.loginForm.value; 
    this.isLoading = true;

    if (this.loginForm.valid === true) {
      
      this._AuthService.login(userData).subscribe({
        next: (response) => {
          console.log('response', response.token);
          if (response !== null) {
            localStorage.setItem('etoken', response.token); 
            
            this._AuthService.decodeUser; 
            this._Router.navigate(['/home']);
            this.isLoading = false;
          }
        },
        error: (err) => {
          console.log('errorrr', err);
          this.errMsg = err.error.message;  
          this.isLoading = false;
        }
      });
    }
  }
}
*/
/*
export class LoginComponent {
  errMsg: string = '';
  isLoading: boolean = false;
  loginForm: FormGroup; 
  emailAdmin = 'admin@example.com';
  passwordAdmin = '123456';

  constructor(
    private _AuthService: AuthService,
    private _Router: Router,
    private _FormBuilder: FormBuilder
  ) {
    this.loginForm = this._FormBuilder.group({
      email: ['', [Validators.required, Validators.email]], 
      password: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)]] 
    });
  }

  handleForm(): void {
    const userData = this.loginForm.value; 
    this.isLoading = true;
    const isAdmin = (userData.email === this.emailAdmin) && (userData.password === this.passwordAdmin);

    if (this.loginForm.valid === true) {
      this._AuthService.login(userData).subscribe({
        next: (response) => {
          console.log('response', response.token);

          if (response && response.token) {
            localStorage.setItem('etoken', response.token); 
            this._AuthService.decodeUser(); // قم بتنفيذ الدالة بشكل صحيح

            if (isAdmin) {
              this._Router.navigate(['/admin']);
            } else {
              this._Router.navigate(['/home']);
            }
          } else {
            this.errMsg = 'Invalid email or password';
          }
          
          this.isLoading = false;
        },
        
        error: (err) => {
          console.log('errorrr', err);
          this.errMsg = err.error.message;  
          this.isLoading = false;
        }
      });
    }
  }
}
  */

export class LoginComponent {
  errMsg: string = '';
  isLoading: boolean = false;
  loginForm: FormGroup; 
  emailAdmin = 'tbdbdaldaymbrkat@gmail.com';
  passwordAdmin = '123456';

  constructor(
    private _AuthService: AuthService,
    private _Router: Router,
    private _FormBuilder: FormBuilder
  ) {
    this.loginForm = this._FormBuilder.group({
      email: ['', [Validators.required, Validators.email]], 
      password: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)]] 
    });
  }

  handleForm(): void {
    const userData = this.loginForm.value;
    this.isLoading = true;
  
    // التحقق من إذا كان المستخدم هو الأدمن
    const isAdmin = (userData.email === this.emailAdmin) && (userData.password === this.passwordAdmin);
  
    if (this.loginForm.valid) {
      this._AuthService.login(userData).subscribe({
        next: (response) => {
          console.log('Response:', response); // طباعة الاستجابة للتأكد من صحة البيانات
  
          if (response && response.token) {
            localStorage.setItem('etoken', response.token); 
            this._AuthService.decodeUser(); // تأكد من أن هذه الدالة تعمل بشكل صحيح
  
            // إذا كان المستخدم هو الأدمن
            if (isAdmin) {
              this._Router.navigate(['/admin']);
            } else {
              this._Router.navigate(['/home']);
            }
          } else {
            // إذا كانت الاستجابة غير صحيحة أو لا تحتوي على token
            this.errMsg = 'Invalid email or password';
          }
          
          this.isLoading = false;
        },
        
        error: (err) => {
          console.log('Error:', err); // طباعة الخطأ إذا حدث
          if (err.status === 401) {
            this.errMsg = 'Incorrect email or password'; // رسالة مخصصة عند الخطأ 401
          } else {
            this.errMsg = 'An error occurred. Please try again later.';
          }
          this.isLoading = false;
        }
      });
    } else {
      // في حال كان النموذج غير صحيح
      this.errMsg = 'Please fill out the form correctly';
      this.isLoading = false;
    }
  }
  
}

