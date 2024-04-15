import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchMenuComponent } from './search-menu/search-menu.component';
import { PkgCarouselComponent } from './pkg-carousel/pkg-carousel.component';
import { PkgCardComponent } from './pkg-card/pkg-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchMenuComponent,
    PkgCarouselComponent,
    PkgCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
