import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  expanded: boolean=false;
  toggleText(): void{
    this.expanded = !this.expanded;
  }
}
