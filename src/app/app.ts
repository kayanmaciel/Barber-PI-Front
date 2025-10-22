import { Component, ViewChild, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './auth/login-component/login-component'; // Importe seu LoginComponent

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrls: ['./app.css']
})
export class App {
  @ViewChild('drawer') sidenav!: MatSidenav;
  protected readonly title = signal('Barber-site');
  route = '';
  isopen = false;

  constructor(private router: Router, private dialog: MatDialog) {
    this.router.events.subscribe(() => {
      this.route = this.router.url.substring(1);
    });
  }

  isActiveRoute(route: string): boolean {
    return this.route === route;
  }

  navigateTo(route: string): void {
    this.route = route;
    this.router.navigate([`/${route}`]);
  }

  // Método para abrir o modal de Login
  openLoginModal(): void {
    this.dialog.open(LoginComponent, {
      width: '400px',  // Defina o tamanho do modal
    });
  }
}
