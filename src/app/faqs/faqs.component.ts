// faqs.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss'] // You can add styling here if needed
})
export class FaqsComponent {
  faqList = [
    { question: 'What are your booking hours?', answer: 'Our booking hours are from 9 am to 5 pm, Monday to Friday.', isOpen: false },
    { question: 'How do I cancel my reservation?', answer: 'You can cancel your reservation by logging into your account and accessing the reservation details.', isOpen: false },
    { question: 'Are there any additional fees?', answer: 'We do not charge any additional booking fees. However, there may be taxes or resort fees depending on your destination.', isOpen: false },
    { question: 'Do you offer travel insurance?', answer: 'Yes, we offer travel insurance as an optional add-on during the booking process.', isOpen: false },
    { question: 'What forms of payment do you accept?', answer: 'We accept credit cards (Visa, Mastercard, American Express) and PayPal.', isOpen: false },
    { question: 'Can I make changes to my reservation?', answer: 'Yes, you can make changes to your reservation by contacting our customer support team. Please note that changes may be subject to availability and fees.', isOpen: false },
    { question: 'How do I find my reservation?', answer: 'You can find your reservation by logging into your account and accessing the "My Bookings" section.', isOpen: false },
    { question: 'Is there a minimum age requirement for booking?', answer: 'Yes, you must be at least 18 years old to make a reservation.', isOpen: false },
    { question: 'Do you offer group discounts?', answer: 'Yes, we offer group discounts for bookings of 10 or more guests. Please contact our group sales department for more information.', isOpen: false },
    { question: 'Can I request special accommodations?', answer: 'Yes, you can request special accommodations during the booking process or by contacting our customer support team.', isOpen: false }
    // Add more FAQ items as needed
  ];

  toggleAnswer(index: number): void {
    this.faqList[index].isOpen = !this.faqList[index].isOpen;
  }
}
