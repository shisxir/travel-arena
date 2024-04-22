import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-card-payment-dialog',
  templateUrl: './card-payment-dialog.component.html',
  styleUrl: './card-payment-dialog.component.scss'
})
export class CardPaymentDialogComponent {

  constructor(private dialogRef: MatDialogRef<CardPaymentDialogComponent>, private snackBar: MatSnackBar) { }
  onPayNow(): void {
    // Close the dialog
    this.dialogRef.close();

    // Show payment success message
    this.snackBar.open('Payment successful', 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
