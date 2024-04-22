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
  dropdownOpen: boolean = false; // To control the dropdown state 
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
    this.router.navigate(['/login']);
  }
  //dropdown for logged in user 
  // getUserName(): string {
  //   const user = this.authService.getLoggedInUser();
  //   return user ? user.fullName : '';
  // }
  getUserName(): string {
    return this.authService.getFirstName(); // Return the first name
  }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen; // Toggle the dropdown state
  }

  goToProfile(): void {
    this.router.navigate(['/profile']);
    this.dropdownOpen = false; // Close the dropdown
  }
  logout(): void {
    this.authService.logout();
    alert('Successfully Logged Out');
    this.router.navigate(['/']);
    this.dropdownOpen = false; // Close the dropdown
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