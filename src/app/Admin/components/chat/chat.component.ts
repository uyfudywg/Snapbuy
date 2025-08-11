import { Component } from '@angular/core';
import { CommonModule, KeyValue } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})

export class ChatComponent {
  message: string = '';  
  messageGroups: { [key: string]: { username: string; email: string; message: string; time: string }[] } = {};  // تخزين الرسائل مع الوقت

  ngOnInit(): void {
    let storedData = localStorage.getItem('messages');
    if (storedData) {
      const messages = JSON.parse(storedData);
      messages.forEach((messageGroup: any) => {
        this.messageGroups[messageGroup.email] = messageGroup.messages;
      });

      for (const email in this.messageGroups) {
        this.messageGroups[email].sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());
      }
    }
  }

  sendMessage(): void {
    if (this.message.trim()) {
      const newMessage = {
        username:'User',
        email: 'user@example.comp',
        message: this.message,
        time: new Date().toLocaleTimeString(), 
      };

      const adminEmail = 'admin@example.com';

      
      if (this.messageGroups[adminEmail]) {
        this.messageGroups[adminEmail].push(newMessage);
      } else {
        this.messageGroups[adminEmail] = [newMessage];
      }

      
      this.messageGroups[adminEmail].sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());


      let storedMessages = localStorage.getItem('messages');
      let updatedMessages = storedMessages ? JSON.parse(storedMessages) : [];
      let adminMessages = updatedMessages.find((group: any) => group.email === adminEmail);

      if (adminMessages) {
        adminMessages.messages.push(newMessage);
      } else {
        updatedMessages.push({ email: adminEmail, messages: [newMessage] });
      }

      localStorage.setItem('messages', JSON.stringify(updatedMessages));
      this.message = ''; 
    }
  }
}