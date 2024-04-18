import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';

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

  constructor(private formBuilder: FormBuilder, private router: Router,
    private route: ActivatedRoute,
    private localStorageService: LocalStorageService) { }

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
    alert("Success!");
    this.router.navigate(['./']);
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
    return this.checkGST()+this.checkAllPrice();
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