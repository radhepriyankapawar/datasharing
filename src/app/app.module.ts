import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponentComponent } from './button-component/button-component.component';
import { TextComponentComponent } from './text-component/text-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponentComponent,
    TextComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
