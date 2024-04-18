import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
 
  constructor() { }
 
  ngOnInit(): void {
    this.setupFlipCards();
  }
 
  setupFlipCards(): void {
    const cards = document.querySelectorAll('.flip-card');
    cards.forEach(card => {
      card.addEventListener('click', function() {
        card.classList.toggle('flipped');
        cards.forEach(otherCard => {
          if (otherCard !== card) {
            otherCard.classList.remove('flipped');
          }
        });
      });
    });
  }
}
