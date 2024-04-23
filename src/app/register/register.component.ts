import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  fullName: string = '';
  email: string = '';
  dob: string = '';
  password: string = '';
  formValid: boolean = false;

  constructor(private router: Router, private authService: AuthService, private snackbar:MatSnackBar) {}

  checkForm(): void {
    // Check if all fields are filled
    this.formValid = this.fullName.trim() !== '' && this.email.trim() !== '' && this.dob.trim() !== '' && this.password.trim() !== '';
  }

  register(): void {
    // Save the user data to local storage
    const newUser = {
      fullName: this.fullName,
      email: this.email,
      dob: this.dob,
      password: this.password,
    };

    // Use a key to store a list of users
    const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    existingUsers.push(newUser); // Add the new user
    localStorage.setItem('registeredUsers', JSON.stringify(existingUsers));

    // Redirect to login page after registration
    this.snackbar.open('Registration Successful', 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
    this.router.navigate(['/login']);
  }
}
