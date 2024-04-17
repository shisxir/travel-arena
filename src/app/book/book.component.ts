import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent implements OnInit {
  minDate = new Date();

  form: FormGroup = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    date: new FormControl(''),
    noOfDays: new FormControl(''),
    noOfGuests: new FormControl(''),
    extra: new FormControl(''),
  });
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        firstname: ['', Validators.required],
        lastname: [
          '',Validators.required
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
