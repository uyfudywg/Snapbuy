import { Component } from '@angular/core';
import { NavberLoginComponent } from '../navber-login/navber-login.component';
import { RouterOutlet } from '@angular/router';
import { ForegtpasswordComponent } from '../foregtpassword/foregtpassword.component';

@Component({
  selector: 'app-page-login',
  standalone: true,
  imports: [NavberLoginComponent,RouterOutlet,ForegtpasswordComponent],
  templateUrl: './page-login.component.html',
  styleUrl: './page-login.component.css'
})
export class PageLoginComponent {

}
