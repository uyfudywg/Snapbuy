
/*
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms'
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent {
  
  

  messageForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(3),
    ]),
    email: new FormControl('', [
      Validators.email,
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(254),
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(2000),
    ]),
  });

  
  reloadPage(): void {
    
    if (this.messageForm.valid) {
      const formData = {
        username: this.messageForm.controls['username'].value,
        email: this.messageForm.controls['email'].value,
        message: this.messageForm.controls['message'].value,
      };

      
      let storedMessages = JSON.parse(localStorage.getItem('messages') || '[]');

     
      storedMessages.push(formData);

      
      localStorage.setItem('messages', JSON.stringify(storedMessages));

     
      console.log('New message saved:', formData);
    }

   
    location.reload();
  }

  


}
  */
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
interface Message {
  username: string;
  email: string;
  message: string;
}

interface MessageGroup {
  email: string;
  messages: Message[];
}
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  notifications: any[] = [];
  messageForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(3),
    ]),
    email: new FormControl('', [
      Validators.email,
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(254),
    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(2000),
    ]),
  });

  reloadPage(): void {
    if (this.messageForm.valid) {
      const formData = {
        username: this.messageForm.controls['username'].value,
        email: this.messageForm.controls['email'].value,
        message: this.messageForm.controls['message'].value,
      };

      let storedMessages = JSON.parse(localStorage.getItem('messages') || '[]');
      // إنشاء أو تحديث المحادثة استنادًا إلى البريد الإلكتروني
      const userChatIndex = storedMessages.findIndex(
        (chat: MessageGroup) => chat.email === formData.email
      );

      if (userChatIndex > -1) {
        storedMessages[userChatIndex].messages.push(formData);
      } else {
        storedMessages.push({ email: formData.email, messages: [formData] });
      }

      localStorage.setItem('messages', JSON.stringify(storedMessages));
      console.log('New message saved:', formData);

      this.notifications.push({ message: ` mesig` });
    localStorage.setItem('notificationsmesi', JSON.stringify(this.notifications));
    }
    
    location.reload();
  }






  
}