import { Component, OnInit } from '@angular/core';
import { SharedBookPayService } from '../shared-book-pay.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

declare var Razorpay: any;
@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrl: './payment-page.component.scss'
})
export class PaymentPageComponent implements OnInit{
  
  constructor(private sharedBookPayService: SharedBookPayService, private router:Router) { }

  ngOnInit(): void {
    this.sharedBookPayService.buttonClick$.subscribe( () => {
      this.router.navigateByUrl('/payment')
      this.payNow();
    })
  }

  payNow(){
    const RozarpayOptions = {
      description: 'Sample Razorpay demo',
      currency: 'INR',
      amount: 100000,
      name: 'Sai',
      key: 'rzp_test_ykpIQCXJbWgyQi',
      image: 'https://i.imgur.com/FApqk3D.jpeg',
      prefill: {
        name: 'sai kumar',
        email: 'sai@gmail.com',
        phone: '9898989898'
      },
      theme: {
        color: '#6466e3'
      },
      modal: {
        ondismiss:  () => {
          console.log('dismissed')
        }
      }
    }

    const successCallback = (paymentid: any) => {
      console.log(paymentid);
    }

    const failureCallback = (e: any) => {
      console.log(e);
    }

    Razorpay.open(RozarpayOptions,successCallback, failureCallback)
  }
}

