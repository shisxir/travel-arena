import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  fullName: string = '';
  email: string = '';
  dob: string = '';
  newPassword: string = '';

  constructor(private authService: AuthService, private router: Router,
    private snackbar:MatSnackBar
  ) {
    const user = this.authService.getLoggedInUser();
    if (user) {
      this.fullName = user.fullName;
      this.email = user.email;
      this.dob = user.dob;
    } else {
      this.router.navigate(['/']); // If no user is logged in, redirect to home
    }
  }

  changePassword(): void {
    const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const userIndex = users.findIndex((u: any) => u.email === this.email);

    if (userIndex >= 0) {
      users[userIndex].password = this.newPassword; // Change the password
      localStorage.setItem('registeredUsers', JSON.stringify(users));
      this.snackbar.open('Password Changed Succesfully', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        panelClass: ['blue-snackbar']
      });
      this.newPassword = '';// Clear the input
    }
  }
}
