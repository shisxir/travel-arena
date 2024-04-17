import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  // Method to generate a unique user ID
  private generateUserId(): string {
    return 'user_' + Math.random().toString(36).substr(2, 9); // You can use a more robust method for generating unique IDs
  }

  // Method to save form data with a unique user ID
  saveFormData(formData: any): string {
    const userId = this.generateUserId();
    localStorage.setItem(userId, JSON.stringify(formData));
    return userId;
  }

  // Method to get form data based on a user ID
  getFormData(userId: string): any {
    const formData = localStorage.getItem(userId);
    return formData ? JSON.parse(formData) : null;
  }
}
  