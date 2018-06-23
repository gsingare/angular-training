import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DatagridComponent} from './components/datagrid.component';
import {buttonComponent} from './button_components/button.component';
import {textboxComponent} from './textbox_components/textbox.component';

@NgModule({
  declarations: [
    AppComponent,
    DatagridComponent,
    buttonComponent,
    textboxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }