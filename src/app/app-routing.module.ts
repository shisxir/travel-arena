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
const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'home-section', component: HomeSectionComponent},
  { path: 'book', component: BookComponent},
  { path: 'packages', component: PackagesComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'about', component: AboutComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'booking', component:BookingComponent},
  // { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
