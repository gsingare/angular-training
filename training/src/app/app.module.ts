import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DatagridComponent} from './components/datagrid.component';
import {TextboxComponent} from './Textbox/Textbox.component';
import {buttonComponent} from './Buttons/button.component';

@NgModule({
  declarations: [
    AppComponent,
    DatagridComponent,
    TextboxComponent,
    buttonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
