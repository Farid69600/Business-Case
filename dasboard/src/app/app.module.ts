import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageStatComponent } from './page-stat/page-stat.component';
import { FormsModule } from '@angular/forms';
import { PageAnalyseComponent } from './page-stat/page-analyse/page-analyse.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DonneesCommercialesComponent } from './page-stat/page-analyse/donnees-commerciales/donnees-commerciales.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageStatComponent,
    PageAnalyseComponent,
    DonneesCommercialesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
