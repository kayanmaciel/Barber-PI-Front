import { Component, signal, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  @ViewChild('drawer') sidenav!: MatSidenav;
  protected readonly title = signal('UniStore-site');
  route = '';
  isopen = false;
  
  async togglenav() {
    if (this.sidenav) {
      await this.sidenav.toggle();
      this.isopen = this.sidenav.opened;
    }
  }

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.route = this.router.url.substring(1);
    });
  }



  isActiveRoute(route: string): boolean {
    if (this.route === route) {
      return true;
    }
    return false;
  }

  navigateTo(route: string): void {
    this.route = route;
    this.router.navigate([`/${route}`]);
  }
}
