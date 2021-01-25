import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './Components/first/first.component';
import { SecondComponent } from './Components/second/second.component';
import { PageNoFoundComponent } from './Components/page-no-found/page-no-found.component';
import { MenuComponent } from './Components/menu/menu.component';
import { ComproabandoEdadComponent } from './Components/comproabando-edad/comproabando-edad.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    PageNoFoundComponent,
    MenuComponent,
    ComproabandoEdadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
