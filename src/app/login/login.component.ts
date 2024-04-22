import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    if (this.authService.login(this.username, this.password)) {
      alert('Successful Login');
      this.router.navigate(['/']); // Redirect to home
    } else {
      alert('Invalid credentials');
    }
  }
  register(): void {
    this.router.navigate(['/register']); // Navigate to the registration page
  }
}
