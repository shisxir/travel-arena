import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  activeLink: string = '';

  isNavbarCollapsed = true;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
  closeNavbar() {
    this.isNavbarCollapsed = true;
  }
  isPackagesPage(): boolean {
    return this.router.url === '/packages';
}
isBookPage(): boolean {
  return this.router.url === '/book';
}

isHomePage(): boolean {
  return this.router.url === '/home';
}
isAboutPage(): boolean {
  return this.router.url === '/about';
}
}
