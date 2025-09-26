import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  standalone: false, 
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      { label: 'Início', icon: 'pi pi-home', routerLink: '/' },
      { label: 'Login', icon: 'pi pi-sign-in', routerLink: '/login' }
    ];
  }
}
