import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.scss'
})
export class PackagesComponent {
  constructor(private router: Router){}
}
