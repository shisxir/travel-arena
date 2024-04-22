import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private userKey = 'loggedInUser'; // Key to use in localStorage
//   constructor(private localStorageService: LocalStorageService){}
//   // Method to log in the user
//   login(username: string, password: string): boolean {
//     // In a real application, validate credentials with the backend
//     if (username === 'admin' && password === 'password') {
//       localStorage.setItem(this.userKey, username);
//       return true;
//     }
//     return false;
//   }

//   // Method to log out the user
//   logout(): void {
//     localStorage.removeItem(this.userKey);
//   }

//   // Check if the user is logged in
//   isLoggedIn(): boolean {
//     return localStorage.getItem(this.userKey) !== null;
//   }
// }
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userKey = 'loggedInUser';

  login(email: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const user = users.find((u: any) => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem(this.userKey, JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.userKey);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(this.userKey) !== null;
  }
  getLoggedInUser(): any {
    return JSON.parse(localStorage.getItem(this.userKey) || '{}');
  }
  getFirstName(): string {
    const user = this.getLoggedInUser();
    if (user && user.fullName) {
      return user.fullName.split(' ')[0]; // Return the first word
    }
    return '';
  }
}
