import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';
import { SharedBookPayService } from '../shared-book-pay.service';
import { MatDialog } from '@angular/material/dialog';
import { UpiPaymentDialogComponent } from '../upi-payment-dialog/upi-payment-dialog.component';
import { CardPaymentDialogComponent } from '../card-payment-dialog/card-payment-dialog.component';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent implements OnInit {
  userId!: string;
  images!: string;
  formData: any;
  noOfDays!: string;
  noOfGuests!: number;
  package!: string;
  submitted: boolean = false;
  paymentForm!: FormGroup;
  finalPrice: number = 13999;
  finalTotalPrice: number = 13999;
  amount: number=0;
  selectedPaymentMethod!:string;

  constructor(private formBuilder: FormBuilder, private router: Router,
    private route: ActivatedRoute,
    private localStorageService: LocalStorageService,
    private sharedBookPayService: SharedBookPayService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.userId = params['userId'];
      this.formData = this.localStorageService.getFormData(this.userId);
      if (this.formData) {
        this.noOfDays = this.formData.noOfDays;
        this.noOfGuests = this.formData.noOfGuests;
        this.package = this.formData.package;
      }
    });
  }

  // Convenience getter for easy access to form fields
  get f() { return this.paymentForm.controls; }

  onSubmit() {
    this.submitted = true;
    // Stop here if form is invalid
    // if (this.paymentForm.invalid) {
    //   return;
    // }
    // Submit the form
    // alert("Success!");
    // this.router.navigate(['./']);
    
    // this.sharedBookPayService.createOrder(this.amount).subscribe((response: any) => {
    //   if (response.status == 200) {
    //     const paymentOrderId = response.data.id;
    //     console.log(paymentOrderId)
    //     // this.productService.setSelectedProductForCheckout(product)
    //     this.router.navigateByUrl(`/checkout/${paymentOrderId}`);
    //   } else {
    //     alert('server side error cant process order');
    //   }
    // });

    if (this.selectedPaymentMethod === 'UPI') {
      this.openUpiPaymentDialog();
    } else if (this.selectedPaymentMethod === 'CARD') {
      this.openCardPaymentDialog();
    }
  }

  openUpiPaymentDialog(): void {
    const dialogRef = this.dialog.open(UpiPaymentDialogComponent, {
      width: '400px',
      // Add other dialog options if needed
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The UPI Payment dialog was closed');
    });
  }

  openCardPaymentDialog(): void {
    const dialogRef = this.dialog.open(CardPaymentDialogComponent, {
      width: '400px',
      // Add other dialog options if needed
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The Card Payment dialog was closed');
    });
  }

  //will checkPrice
  checkPrice() {
    if (this.package === 'Ladakh') {
      this.finalPrice = 11999;
      return this.finalPrice;

    } else if (this.package === 'Lakshadweep') {
      this.finalPrice = 13999;
      return this.finalPrice;

    } else if (this.package === 'Amritsar') {
      this.finalPrice = 8999;
      return this.finalPrice;

    } else if (this.package === 'Kedarnath') {
      this.finalPrice = 5999;
      return this.finalPrice;


    } else if (this.package === 'Agra') {
      this.finalPrice = 9999;
      return this.finalPrice;

    } else if (this.package === 'Kerala') {
      this.finalPrice = 12599;
      return this.finalPrice;
    }else{
      return this.finalPrice;
    }
  }
  //will check number of durration and print price per head
  checkTotalPrice(){
    if(this.noOfDays==='2D/1N'){
      this.finalTotalPrice = this.finalPrice*2;
      return this.finalTotalPrice;
    }else if(this.noOfDays==='3D/2N'){
      this.finalTotalPrice = this.finalPrice*3;
      return this.finalTotalPrice;
    }else if(this.noOfDays==='4D/3N'){
      this.finalTotalPrice = this.finalPrice*4;
      return this.finalTotalPrice;
    }else if(this.noOfDays==='5D/4N'){
      this.finalTotalPrice = this.finalPrice*5;
      return this.finalTotalPrice;
    }else{
      return this.finalTotalPrice*2;
    }
  }
  //checks total price of all people all day
  checkAllPrice(){
    return this.checkTotalPrice()*this.noOfGuests;
  }
  checkGST(){
    return 18*this.checkAllPrice()/100;
  }
  netPay(){
    this.amount=this.checkGST()+this.checkAllPrice();
    return this.amount;
  }
  checkImage(){
    if (this.package === 'Ladakh') {
      this.images = '11999';
      return this.images;

    } else if (this.package === 'Lakshadweep') {
      this.images = '11999';
      return this.images;

    } else if (this.package === 'Amritsar') {
      this.images = '11999';
      return this.images;

    } else if (this.package === 'Kedarnath') {
      this.images = '11999';
      return this.images;


    } else if (this.package === 'Agra') {
      this.images = '11999';
      return this.images;

    } else if (this.package === 'Kerala') {
      this.images = '11999';
      return this.images;
    }else{
      return this.images;
    }
  }
}