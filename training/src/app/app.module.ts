import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DatagridComponent} from './components/datagrid.component';
import {TextboxComponent} from './Textbox/Textbox.component';
import {buttonComponent} from './Buttons/button.component';
import {RegistrationComponent} from  './Registrationpage/Registration.component';
@NgModule({
  declarations: [
    AppComponent,
    DatagridComponent,
    TextboxComponent,
    buttonComponent,
   
    RegistrationComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
