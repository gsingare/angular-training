import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DatagridComponent} from './components/datagrid.component';
import {TextboxComponent} from './Textbox/Textbox.component';
import {buttonComponent} from './Buttons/button.component';
import {RegistrationComponent} from  './Registrationpage/Registration.component';

import { HttpModule } from '@angular/http';
import {RemoteService} from './service/remote.service';

@NgModule({
  declarations: [
    AppComponent,
    DatagridComponent,
    TextboxComponent,
    buttonComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    RemoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
