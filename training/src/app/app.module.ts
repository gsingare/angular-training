import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DatagridComponent} from './components/datagrid.component';
import {textComponent} from './textbox_components/textbox.component';
import {buttonComponent} from './buttons_components/buttons.component';


@NgModule({
  declarations: [
    AppComponent,
    DatagridComponent,
    textComponent,
    buttonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
