import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  // constructor() { }

  // ngOnInit(): void {
  //   const navbarMenu = document.getElementById("menu");
  //   const burgerMenu = document.getElementById("burger");
  //   const bgOverlay = document.querySelector(".overlay");

  //   if (burgerMenu && bgOverlay) {
  //     burgerMenu.addEventListener("click", () => {
  //       navbarMenu?.classList.add("is-active");
  //       bgOverlay.classList.toggle("is-active");
  //     });

  //     bgOverlay.addEventListener("click", () => {
  //       navbarMenu?.classList.remove("is-active");
  //       bgOverlay.classList.toggle("is-active");
  //     });
  //   }

  //   document.querySelectorAll(".menu-link").forEach((link) => {
  //     link.addEventListener("click", () => {
  //       navbarMenu?.classList.remove("is-active");
  //       bgOverlay?.classList.remove("is-active");
  //     });
  //   });

  //   const searchBlock = document.querySelector(".search-block");
  //   const searchToggle = document.querySelector(".search-toggle");
  //   const searchCancel = document.querySelector(".search-cancel");

  //   if (searchToggle && searchCancel) {
  //     searchToggle.addEventListener("click", () => {
  //       searchBlock?.classList.add("is-active");
  //     });

  //     searchCancel.addEventListener("click", () => {
  //       searchBlock?.classList.remove("is-active");
  //     });
  //   }
  // }
}

