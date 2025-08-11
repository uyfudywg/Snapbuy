import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  public links: any = [
    {
      title: 'Dashboard',
      items: [
        {
          name: 'overview',
          icon: 'fa-solid fa-house',
        }
        
      ],
    },

    {
      title: 'Pages',
      items: [
        {
          name: 'products',
          icon: 'fa-solid fa-book',
        }, {
          name: 'orders',
          icon: 'fa-solid fa-bag-shopping',
        },
        {
          name: 'sales',
          icon: 'fa-solid fa-dumpster-fire',
        },
        {
          name: 'chat',
          icon: 'fa-solid fa-comment',
        },
        {
          name: 'customers',
          icon: 'fa-solid fa-users',
        }, {
          name: 'favorites',
          icon: 'fa-solid fa-heart'
        }
      ],
    },

  ];

  //date formateur
  public formatReadableDate(dateString: any) {
    const options: any = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };

    const date = new Date(dateString);

    return date.toLocaleString('en-US', options);
  }


  //price formatteur
  public formatPrice(price: any) {
    if (typeof price === 'string') {

      if (price.includes('$')) {

        return price.replace('$', '') + '$';
      } else {

        return price + '$';
      }
    } else if (typeof price === 'number') {

      return price.toString() + '$';
    } else {

      return 'N/A';
    }
  }


  // [routerLink]="['/', item.name]
  public currentPath: string | undefined;

  public navigateTo(item: string) {

    this.router.navigate(['/', item]);

  }

  constructor(
    private router: Router
  ) {
    this.router.events.subscribe((event) => {

      if (event instanceof NavigationEnd) {

        this.currentPath = event.url.slice(1);

      }
    });
  }

  public sidebarisOpen: boolean = true;

  public toggleSideBar() {

    this.sidebarisOpen = false;
    console.log(this.sidebarisOpen);

  }
  @Output() changeComponent: EventEmitter<string> = new EventEmitter<string>();
  public onComponentChange(component: string): void {
    this.changeComponent.emit(component);
  }

}
