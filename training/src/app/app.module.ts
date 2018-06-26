import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DatagridComponent} from './components/datagrid.component';
import {buttonComponent} from './button_components/button.component';
import {textboxComponent} from './textbox_components/textbox.component';
import {userRegistration} from './user_registration/user.registration';

import {HttpModule} from '@angular/http';
import { RemoteService } from './service/remote.service';



@NgModule({
  declarations: [
    AppComponent,
    DatagridComponent,
    buttonComponent,
    textboxComponent,
    userRegistration,
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