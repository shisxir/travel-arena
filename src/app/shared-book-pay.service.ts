import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Subject } from 'rxjs';
import Razorpay from 'razorpay';

@Injectable({
  providedIn: 'root'
})
export class SharedBookPayService {
  
  baseUrl = 'http://localhost:3000';
  razorPayKeyconfig='../assets/config/keys.json'
  
  constructor(private httpClient: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) { }

  createOrder(amount:number) {
    const payload = {
      amount: 10000
    };
    return this.httpClient.post(`${this.baseUrl}/api/createPaymentOrder`, {
      payload,
    });
  }

  verifyPaymentSignature(checkoutResponse: any, original_order_id: string) {
    const payload = {
      razorpay_signature: checkoutResponse.razorpay_signature,
      original_order_id: original_order_id,
      razorpay_payment_id: checkoutResponse.razorpay_payment_id,
    };

    return this.httpClient.post(`${this.baseUrl}/api/validatePayment`, {
      payload,
    });
  }

  get nativeWindow(): any {
    if (isPlatformBrowser(this.platformId)) {
      return _window();
    }
  }
  getRazorPayKey() {
    return this.httpClient.get(this.razorPayKeyconfig);
  }
}
function _window(): any {
  // return the global native browser window object
  return window;
}

