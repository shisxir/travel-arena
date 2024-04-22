// import { Component, OnInit } from '@angular/core';
 
// @Component({
//   selector: 'app-gallery',
//   templateUrl: './gallery.component.html',
//   styleUrls: ['./gallery.component.scss']
// })
// export class GalleryComponent implements OnInit {
 
//   constructor() { }
 
//   ngOnInit(): void {
//     this.setupFlipCards();
//   }
 
//   setupFlipCards(): void {
//     const cards = document.querySelectorAll('.flip-card');
//     cards.forEach(card => {
//       card.addEventListener('click', function() {
//         card.classList.toggle('flipped');
//         cards.forEach(otherCard => {
//           if (otherCard !== card) {
//             otherCard.classList.remove('flipped');
//           }
//         });
//       });
//     });
//   }
// }

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
 
    document.addEventListener('DOMContentLoaded', () => {
      // Get all buttons with class 'open-dialog-btn'
      const openButtons = document.querySelectorAll('.open-dialog-btn');
     
      // Get the dialog element
      const dialog = document.getElementById('imageDialog');
     
      // Add event listener to each open button
      openButtons.forEach(button => {
        button.addEventListener('click', () => {
          // Show the dialog box
          if(dialog) dialog.style.display = 'block';
        });
      });
 
      // Close the dialog box when the close button is clicked
      const closeButton = document.querySelector('.close-dialog-btn');
      if(closeButton) {
        closeButton.addEventListener('click', () => {
          if(dialog) dialog.style.display = 'none';
        });
      }
    });
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