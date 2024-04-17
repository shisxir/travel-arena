import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  searchForm!: FormGroup;
  destinations: string[] = ['Ladakh', 'Lakshadweep', 'Amritsar', 'Kedarnath','Agra', 'Kerala'];
  durations: number[] = [1,2,3,4,5,6];
  duration?: number=NaN;
  selectedDestination!: string;
  todayDate: Date = new Date();

  constructor(private router:Router, private formBuilder: FormBuilder){
    this.searchForm = this.formBuilder.group({
      destination: ['', Validators.required],
      duration: ['', Validators.required],
      departureDate: ['',[Validators.required,this.dateValidator]],
      guests: ['',[Validators.required,Validators.min(1)]]
    });
  }
  
  dateValidator(control:any){
    const selectedDate = new Date(control.value);
    const currentDate = new Date();
    return selectedDate > currentDate ? null : { invalidDate: true };
  }

  onSubmit(){
    console.log(this.selectedDestination)
    this.router.navigate(['/booking',this.selectedDestination])
  }
}
