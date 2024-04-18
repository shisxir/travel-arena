// import { Component ,OnInit} from '@angular/core';
// import { ActivatedRoute, ParamMap } from '@angular/router';
// @Component({
//   selector: 'app-booking',
//   templateUrl: './booking.component.html',
//   styleUrl: './booking.component.scss'
// })
// export class BookingComponent {
//   selectedPackage: string = ''; // Define the selectedPackage property

//   constructor(private route: ActivatedRoute) { }

//   ngOnInit(): void {
//     // Retrieve the selected package from the route parameters
//     this.route.params.subscribe(params => {
//       this.selectedPackage = params['packageName'] || '';
//     });
//   }
// }



import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  selectedPackage!: string;
 
  constructor(private route: ActivatedRoute) { }
 
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.selectedPackage = params['package'];
    });
  }
}
