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

const routes: Routes = [
  { path: 'src\app\homepage', component: HomepageComponent},
  { path: 'src\app\navbar', component: NavbarComponent},
  { path: 'src\app\home-section', component: HomeSectionComponent},
  { path: 'src\app\book', component: BookComponent},
  { path: 'src\app\packages', component: PackagesComponent},
  { path: 'src\app\services', component: ServicesComponent},
  { path: 'src\app\gallery', component: GalleryComponent},
  { path: 'src\app\about', component: AboutComponent},
  { path: 'src\app\footer', component: FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
