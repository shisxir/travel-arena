import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from '../local-storage.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent implements OnInit {
  minDate = new Date();
  currentDate: string;
  //for query params
  selectedPackage!: string;

  form: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    email: new FormControl(''),
    date: new FormControl(''),
    noOfDays: new FormControl(''),
    noOfGuests: new FormControl(''),
    extra: new FormControl(''),
    package: new FormControl({ value: '', disabled: true })
  });
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router,
    private localStorageService: LocalStorageService,
    private route: ActivatedRoute,
    private authService: AuthService) {
    this.currentDate = this.getCurrentDate();
  }
  getCurrentDate() {
    const today = new Date();
    return today.toISOString().split('T')[0];
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.selectedPackage = params['package'];
    });
    this.form = this.formBuilder.group(
      {
        fullname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
        email: [
          '', [Validators.required, Validators.email]
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
        extra: [''],
        package: [this.selectedPackage]
      },
    );
    // this.route.queryParams.subscribe(params => {
    //   this.selectedPackage = params['package'];
    // });

    //to fetch name and email address from loggedin user 
    const user = this.authService.getLoggedInUser();
    if(user){
      this.form.patchValue({
        fullname: user.fullName || '',
        email: user.email || ''
      });
    }


    ///////////////////
    const storedData=localStorage.getItem('formData');
    if(storedData){
      const data=JSON.parse(storedData);
      if(data){
        this.form.patchValue({
          date: data.departure || '',
        noOfDays: data.duration || '',
        noOfGuests: data.guests || ''
        });
      }
    }
    localStorage.removeItem('formData');

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
    // this.router.navigate(['/payment']);
    this.router.navigate(['/payment'], { queryParams: { userId: userId } });
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
