import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { BookComponent } from './book/book.component';
import { PackagesComponent } from './packages/packages.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { BookingComponent } from './booking/booking.component';
import { PaymentComponent } from './payment/payment.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FaqsComponent } from './faqs/faqs.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { CareersComponent } from './careers/careers.component';
import { PressComponent } from './press/press.component';
import { BlogComponent } from './blog/blog.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'home-section', component: HomeSectionComponent},
  { path: 'book', component: BookComponent},
  { path: 'packages', component: PackagesComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'about', component: AboutComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'booking/:selectedDestination', component:BookingComponent},
  { path: 'booking', component:BookingComponent},
  {path: 'payment', component:PaymentComponent},
  { path: 'faqs', component: FaqsComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'cookie-policy', component: CookiePolicyComponent},
  { path: 'help-center', component: HelpCenterComponent},
  { path: 'careers', component: CareersComponent},
  { path: 'press', component: PressComponent},
  { path: 'blog', component: BlogComponent},
  { path:'checkout/:paymentOrderId', component:PaymentPageComponent},
  { path:'**', component:PageNotFoundComponent}
  
  // { path: 'login', component: LoginComponent },
  // {path:'',component:HomepageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
