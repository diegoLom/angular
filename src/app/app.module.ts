import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { VilainComponent } from './vilain/vilain.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    VilainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
