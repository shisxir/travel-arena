import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
// export class AboutComponent {
//   expanded: boolean=false;
//   toggleText(): void{
//     this.expanded = !this.expanded;
//   }
  
// }

export class AboutComponent implements OnInit {
  contactForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    message: ['', Validators.required]}) // Add definite assignment assertion
    submitted:boolean=false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  submitForm(): void {
    this.submitted=true;
    if(this.contactForm.invalid){
      return;
    }
    // Handle form submission
  }


  showMore: boolean=false;
  toggleText(): void{
    this.showMore = !this.showMore;
  }
}