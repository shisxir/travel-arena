import { Component, OnInit } from '@angular/core';
import { SharedBookPayService } from '../shared-book-pay.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import Razorpay from 'razorpay';


@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrl: './payment-page.component.scss'
})
export class PaymentPageComponent implements OnInit{
  razorPayKey: any;
  constructor(
    private sharedBookPayService: SharedBookPayService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  // selectedProduct!: Product;
  ngOnInit() {
    this.getRazorPayKey();
    // this.listenSelectedProduct();
    this.getOrderId();
  }
  getRazorPayKey() {
    this.sharedBookPayService.getRazorPayKey().subscribe((response: any) => {
      this.razorPayKey = response['key_id'];
    });
  }
  getOrderId() {
    return this.route.snapshot.params['paymentOrderId'];
  }
  // listenSelectedProduct() {
  //   this.selectedProduct = this.productService.getSelectedProductForCheckout();
  // }

  payWithRazorpay() {
    if (this.sharedBookPayService.nativeWindow && this.sharedBookPayService.nativeWindow.Razorpay) {
      // Your existing code to initialize Razorpay
      const paymentOrderId = this.getOrderId();
    console.log(this.razorPayKey);
    const options: any = {
      key: this.razorPayKey,
      amount: 100 * 100, // amount should be in paise format to display Rs 1255 without decimal point
      currency: 'INR',
      name: 'Voyager', // company name or product name
      description: '', // product description
      // image: './../../assets/images/logo.png', // company logo or product image
      order_id: paymentOrderId, // order_id created by you in backend
      modal: {
        // We should prevent closing of the form when esc key is pressed.
        escape: false,
      },
      notes: {
        // include notes if any
      },
      theme: {
        color: '#ddcbff',
      },
    };
    options.handler = (response: any, error: any) => {
      options.response = response;
      if (error) {
        this.router.navigateByUrl('/paymentfailed');
      } else {
        this.sharedBookPayService
          .verifyPaymentSignature(response, paymentOrderId)
          .subscribe((response: any) => {
            response.data.isPaymentVerfied
              ? alert("Payment Success")
              : alert("Payment Failed");
          });
      }
      // call your backend api to verify payment signature & capture transaction
    };
    options.modal.ondismiss = () => {
      // handle the case when user closes the form while transaction is in progress
      alert('Transaction has been cancelled.');
      this.router.navigateByUrl('');
    };
    const rzp = new this.sharedBookPayService.nativeWindow.Razorpay(options);
    rzp.open();
      // const rzp = new this.sharedBookPayService.nativeWindow.Razorpay(options);
      // ...
    } else {
      console.error('Razorpay is not available');
    }
    
  }
}

