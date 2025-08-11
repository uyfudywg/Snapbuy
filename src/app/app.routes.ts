import { Routes } from '@angular/router';
import { HomeComponent } from './user/components/home/home/home.component';
import { ShopComponent } from './user/components/Shop/shop/shop.component';
import { DetailsProductComponent } from './user/components/Shop/details/details-product/details-product.component';
import { CartComponent } from './user/components/cart/cart.component';
import { CheckoutComponent } from './user/components/checkout/checkout.component';
import { ContactComponent } from './user/components/contact/contact/contact.component';
import { FavoriteListComponent } from './user/components/favorite-list/favorite-list.component';
import { AdminComponent } from './Admin/components/admin/admin.component';
 import { OverviewComponent } from './Admin/components/overview/overview.component';
import { LoginComponent } from './user/components/login/login.component';
import { RegisterComponent } from './user/components/register/register.component';
import { PageLoginComponent } from './user/components/page-login/page-login.component';
// import { AdminComponent } from './Admin/admin/admin.component';
import{authGuard} from './auth.guard';
import { ChatUserComponent } from './user/components/chat-user/chat-user.component';
import { AboutComponent } from './user/components/about/about.component';
import { ForegtpasswordComponent } from './user/components/foregtpassword/foregtpassword.component';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'home',component: HomeComponent ,    canActivate: [authGuard]},
    {path: 'shop',  component: ShopComponent,canActivate: [authGuard]}, 
    {path: 'shop/:id', component: DetailsProductComponent,canActivate: [authGuard]},
    {path:'cart', component: CartComponent,canActivate: [authGuard]},
    {path:'checkout', component: CheckoutComponent,canActivate: [authGuard]},
    {path:'contact', component: ChatUserComponent,canActivate: [authGuard]},
    {path:'favorite-list', component: FavoriteListComponent,canActivate: [authGuard]},
   
    {path:'admin',component: AdminComponent ,    canActivate: [authGuard]},
    {path:'chatUser',component: ChatUserComponent ,    canActivate: [authGuard]},
    {path:'',component:PageLoginComponent,children:[
        {path:'login',component:LoginComponent},
        {path:'register',component:RegisterComponent},
        {path:'forgetpass',component:ForegtpasswordComponent}
    ]
    },
    {path:'about',component:AboutComponent,canActivate: [authGuard]},
     
    
];

