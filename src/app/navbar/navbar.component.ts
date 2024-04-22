import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  activeLink: string = '';
  isNavbarCollapsed: boolean = true;
  ngOnInit(): void {
    this.isNavbarCollapsed = false;;
  }
  constructor(private authService: AuthService,private router: Router) { }
  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if (!(event.target as HTMLElement).closest('.navbar-collapse')) {
      this.closeNavbar();
    }
  }
  //login
  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
  loginOrLogout(): void {
    if (this.isLoggedIn) {
      this.authService.logout();
      alert('Successfully Logged Out');
    } else {
      console.log('working');
      this.router.navigate(['/login']);
    }
  }
  //////////////////////////////////////////////////////
  toggleNavbar() {
    if (this.isNavbarCollapsed) {
      this.isNavbarCollapsed = false;
    } else {
      this.isNavbarCollapsed = true;
    }
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