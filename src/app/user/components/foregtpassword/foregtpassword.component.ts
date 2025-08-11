import { Component, OnInit } from '@angular/core';
import { ForgetpassService } from '../../service/forgetpass.service';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-foregtpassword',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './foregtpassword.component.html',
  styleUrls: ['./foregtpassword.component.css']  // تم تصحيحها هنا
})
export class ForegtpasswordComponent {
  constructor(
    private _ForgetpassService: ForgetpassService, 
    private _ToastrService: ToastrService, 
    private _Router: Router
  ) {}

  step1: boolean = true;
  step2: boolean = false;
  step3: boolean = false;
  email: string = '';
  userMsg: string = '';

  forgotForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  resetCodeForm: FormGroup = new FormGroup({
    resetCode: new FormControl('', [Validators.required])
  });

  resetPasswordForm: FormGroup = new FormGroup({
    newPassword: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)])
  });

  forgetPassword(): void {
    let userEmail = this.forgotForm.value;
    this.email = userEmail.email;
    this._ForgetpassService.forgetPassword(userEmail).subscribe({
      next: (response) => {
        console.log(response);
        this._ToastrService.success(response.message);
        this.step1 = false;
        this.step2 = true;
      },
      error: (err) => {
        this.userMsg = err.error.message;
        console.error(err);
      }
    });
  }

  resetCode(): void {
    let resetCode = this.resetCodeForm.value;
    this._ForgetpassService.resetCode(resetCode).subscribe({
      next: (response) => {
        console.log(response);
        this._ToastrService.success(response.status + ' Code');
        this.step2 = false;
        this.step3 = true;
      },
      error: (err) => {
        this.userMsg = err.error.message;
        console.error(err);
      }
    });
  }

  resetPassword(): void {
    let passwordForm = this.resetPasswordForm.value;
    passwordForm.email = this.email;
    this._ForgetpassService.resetPassword(passwordForm).subscribe({
      next: (response) => {
        console.log('msg', response);
        if (response.token) {
          localStorage.setItem('_token', response.token);
          this._Router.navigate(['/home']);
        }
      },
      error: (err) => {
        this.userMsg = err.error.message;
        console.error(err);
      }
    });
  }
}
