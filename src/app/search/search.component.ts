import { Component} from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  searchForm:FormGroup =this.formBuilder.group({
    destination : ['', Validators.required],
    departure : ['',Validators.required],
    duration : ['', Validators.required],
    guests : ['',[Validators.required,Validators.min(1)]]
  });;
  destinations: string[] = ['Ladakh', 'Lakshadweep', 'Amritsar', 'Kedarnath','Agra', 'Kerala'];
  durations: number[] = [1,2,3,4];
  todayDate: string = new Date().toISOString().split('T')[0];
  // invalidForm:boolean=false;


  constructor(private router:Router, private formBuilder: FormBuilder){}

  isFormInvalid(){
    return this.searchForm.invalid;
  }

  onFocus(event:any){
    event.target.type = 'date';
  }
  onBlur(event:any){
    event.target.type = 'text';
  }

  onSubmit(){
    
    // if(this.searchForm.invalid){
    //   this.invalidForm=true;
    //   return;
    // }
    // this.invalidForm=false;


    const queryParams: any = { package: this.searchForm.get('destination')?.value };
    const navigationExtras: NavigationExtras = {
      queryParams,
    };

    // sending data to local storage for booking page
    const destination = this.searchForm.get('destination')?.value;
    const departure = this.searchForm.get('departure')?.value;
    const duration = this.searchForm.get('duration')?.value;
    const guests = this.searchForm.get('guests')?.value;
    localStorage.setItem('destination', destination);
    localStorage.setItem('departure', departure);
    localStorage.setItem('duration', duration);
    localStorage.setItem('guests', guests);
    // data stored in local storage

    this.router.navigate(['/booking'],navigationExtras)
  }
}