
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-user.component.html',
  styleUrls: ['./chat-user.component.css']
})
export class ChatUserComponent {
  message: string = ''; 
  notifications: any[] = [];

  messageGroups: { [key: string]: { username: string; email: string; message: string; time: string }[] } = {};  
  userDatayu= localStorage.getItem('userData');
  
  constructor(private route:ActivatedRoute) { }
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
    const stordData = localStorage.getItem('userData');
    if (stordData) {
      const userData = JSON.parse(stordData);
      console.log(userData.name);
    }
    console.log(this.userDatayu)

  }

  sendMessage(): void {
    if (this.message.trim()) {
      const newMessage = {
        username: 'Admin',
        email: 'admin',
        message: this.message,
        time: new Date().toLocaleTimeString(),  
      };

      const userEmail = 'user';

  
      if (this.messageGroups[userEmail]) {
        this.messageGroups[userEmail].push(newMessage);
      } else {
        this.messageGroups[userEmail] = [newMessage];
      }

      this.messageGroups[userEmail].sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());

      let storedMessages = localStorage.getItem('messages');
      let updatedMessages = storedMessages ? JSON.parse(storedMessages) : [];
      let userMessages = updatedMessages.find((group: any) => group.email === userEmail);

      if (userMessages) {
        userMessages.messages.push(newMessage);
      } else {
        updatedMessages.push({ email: userEmail, messages: [newMessage] });
      }

      localStorage.setItem('messages', JSON.stringify(updatedMessages));
      this.message = '';  
    }
   
  }
   
  addNo(){
    this.notifications.push({ message: ` message` });
    localStorage.setItem('notificationsmesi', JSON.stringify(this.notifications));
  }
}

