import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import {MatDatepickerModule} from '@angular/material/datepicker';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent implements OnInit {
  minDate = new Date();
  currentDate: string;

  form: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    email: new FormControl(''),
    date: new FormControl(''),
    noOfDays: new FormControl(''),
    noOfGuests: new FormControl(''),
    extra: new FormControl(''),
  });
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.currentDate = this.getCurrentDate();
  }
    getCurrentDate() {
    const today = new Date();
    return today.toISOString().split('T')[0];
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        fullname: ['', [Validators.required,Validators.pattern('[a-zA-Z ]*')]],
        email: [
          '',[Validators.required, Validators.email]
        ],
        date: ['', Validators.required],
        noOfDays: [
          '',
          [
            Validators.required,
            Validators.max(7)
          ]
        ],
        noOfGuests: ['', Validators.required],
        extra: ['', Validators.required]
      },
    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    console.log(JSON.stringify(this.form.value, null, 2));
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
