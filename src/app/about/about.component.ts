import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(private router:Router){}
  expanded: boolean=false;
  toggleText(): void{
    this.expanded = !this.expanded;
  }
}
