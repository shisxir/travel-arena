import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { BookComponent } from './book/book.component';
import { PackagesComponent } from './packages/packages.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { BookingComponent } from './booking/booking.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';

import { ReviewsComponent } from './reviews/reviews.component';
import { PaymentComponent } from './payment/payment.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FaqsComponent } from './faqs/faqs.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { CareersComponent } from './careers/careers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    HomeSectionComponent,
    BookComponent,
    PackagesComponent,
    ServicesComponent,
    GalleryComponent,
    AboutComponent,
    FooterComponent,
    SearchComponent,
    BookingComponent,
    ReviewsComponent,
    PaymentComponent,
    PageNotFoundComponent,
    FaqsComponent,
    PrivacyPolicyComponent,
    CookiePolicyComponent,
    HelpCenterComponent,
    CareersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
