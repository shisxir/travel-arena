import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from '../local-storage.service';

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

  constructor(private formBuilder: FormBuilder, private router: Router, private localStorageService: LocalStorageService) {
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
        extra: ['']
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
    const formData = this.form.value;
    const userId = this.localStorageService.saveFormData(formData);
    this.onReset();
    // alert('Form data saved with user ID:'+userId);
    this.router.navigate(['/payment']);
  }
  onReset(): void { 
    this.submitted = false;
    this.form.reset();
  }
}
