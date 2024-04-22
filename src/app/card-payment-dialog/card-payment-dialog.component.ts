import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as CardValidator from 'card-validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-payment-dialog',
  templateUrl: './card-payment-dialog.component.html',
  styleUrl: './card-payment-dialog.component.scss'
})
export class CardPaymentDialogComponent {

  cardNumber: string = '';
  expiryDate: string = '';
  cvv: string = '';

  constructor(private dialogRef: MatDialogRef<CardPaymentDialogComponent>, private snackBar: MatSnackBar,
    private router: Router) { }
  onPayNow(): void {
    // Close the dialog
    this.dialogRef.close();

    // Show payment success message
    let snackBarRef=this.snackBar.open('Payment successful', 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
    snackBarRef.afterDismissed().subscribe(() => {
      this.router.navigate(['/']);
    });
  }
  validateCardNumber(cardNumber: string): boolean {
    return CardValidator.number(cardNumber).isValid;
  }

  validateExpiryDate(expiryDate: string): boolean {
    // Expiry date format: MM/YY
    const [month, year] = expiryDate.split('/');
    const currentYear = new Date().getFullYear() % 100; // Get last 2 digits of the current year
    return Number(month) >= 1 && Number(month) <= 12 && Number(year) >= currentYear;
  }

  validateCVV(cvv: string): boolean {
    // CVV should be a 3 or 4 digit number
    return /^\d{3,4}$/.test(cvv);
  }
}
