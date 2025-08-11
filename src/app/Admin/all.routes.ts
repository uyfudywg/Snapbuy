import { Routes } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
;

export const routestwo: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
   {path:'overview',component: OverviewComponent}
    
];
