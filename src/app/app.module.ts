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
import { ContactResponseComponent } from './contact-response/contact-response.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatDialogModule } from '@angular/material/dialog';
import { FaqsComponent } from './faqs/faqs.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { CareersComponent } from './careers/careers.component';
import { HttpClientModule } from '@angular/common/http';
import { UpiPaymentDialogComponent } from './upi-payment-dialog/upi-payment-dialog.component';
import { CardPaymentDialogComponent } from './card-payment-dialog/card-payment-dialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
// import { MatDialog } from '@angular/material/dialog';
// import Razorpay from '../../node_modules/razorpay';

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
    UpiPaymentDialogComponent,
    CardPaymentDialogComponent,
    PaymentPageComponent,
    ContactResponseComponent,
    FaqsComponent,
    PrivacyPolicyComponent,
    CookiePolicyComponent,
    HelpCenterComponent,
    CareersComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatSnackBarModule
    // Razorpay,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
