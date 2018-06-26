import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {dataGridComponent} from './components/datagrid.component';
import {textboxComponent} from './textbox/textbox.component';
import {buttonComponent} from './buttons/buttons.component';
import {UserRegistrationComponent} from './userRegistration/userRegistration';

import { HttpModule } from '@angular/http';
import {RemoteService} from './service/remote.service';

@NgModule({
  declarations: [
    AppComponent,
    dataGridComponent,
    textboxComponent,
    buttonComponent,
    UserRegistrationComponent

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
