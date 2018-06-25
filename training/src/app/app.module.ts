import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DatagridComponent} from './components/datagrid.component';
import {TextBoxComponent} from './components/textbox/textbox.component';
import {UserRegistrationComponent} from './userRegistration/userRegistration';


@NgModule({
  declarations: [
    AppComponent,
    DatagridComponent,
    TextBoxComponent,
    UserRegistrationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
