import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router, private snackbar: MatSnackBar) {}

  login(): void {
    if (this.authService.login(this.username, this.password)) {
      // alert('Successful Login');
      this.snackbar.open('Login successful', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      this.router.navigate(['/']); // Redirect to home
    } else {
      // alert('Invalid credentials');
      this.snackbar.open('Invalid Credentials', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
    }
  }
  register(): void {
    this.router.navigate(['/register']); // Navigate to the registration page
  }
}
