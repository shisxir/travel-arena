import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedBookPayService {

  private buttonClickSource = new Subject<void>();
  buttonClick$ = this.buttonClickSource.asObservable();

  constructor() { }

  buttonClicked(){
    this.buttonClickSource.next();
  }
}
