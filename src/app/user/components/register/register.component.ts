import { CommonModule } from '@angular/common';
import { Component, OnChanges } from '@angular/core';
import { FormBuilder, FormControl, FormControlOptions, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
  constructor(private _AuthService:AuthService, private _Router:Router, private _FormBuilder:FormBuilder){}

  errMsg:string = '';
  isLoading:boolean = false;

  registerForm:FormGroup = new FormGroup({
    name:new FormControl('', [Validators.required]),
    email:new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)]),
    rePassword:new FormControl(''),
    phone:new FormControl('', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)])
  }, {validators:[this.confirmPassword]} as FormControlOptions);

  
  confirmPassword(group:FormGroup):void{

    const password = group.get('password');
    const rePassword = group.get('rePassword');

    if(rePassword?.value == ''){
      rePassword?.setErrors({required:true})
    }

    else if (password?.value != rePassword?.value){
      rePassword?.setErrors({misMatch:true})
    }

  }

   
  handleForm():void{
    const userData = this.registerForm.value;
    console.log('userData',userData.name)
    localStorage.setItem('userData', JSON.stringify(userData));
    this._Router.navigate(['/app-chat-user']);
    this.isLoading = true;

  if(this.registerForm.valid === true){
  this._AuthService.register(userData).subscribe({
  next:(respose)=> {
  console.log('respone',respose)
  if(respose !== null){
  this._Router.navigate(['/login'])
  this.isLoading = false;
  }},
  error:(err)=> {
  console.log('erorrrr',err)
  this.errMsg = err.error.message;          ;
  this.isLoading = false;
  }})}



  }

}
