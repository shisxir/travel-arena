import { Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isNavbarCollapsed:boolean = true;
  ngOnInit(): void {
    this.isNavbarCollapsed = false;;
  }

  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if (!(event.target as HTMLElement).closest('.navbar-collapse')) {
      this.closeNavbar();
    }
  }

  toggleNavbar() {
    if(this.isNavbarCollapsed){
      this.isNavbarCollapsed=false;
    }else{
      this.isNavbarCollapsed=true;
    }
  }

  closeNavbar() {
    this.isNavbarCollapsed = true;
  }
}