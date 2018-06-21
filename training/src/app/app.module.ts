import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DatagridComponent} from './components/datagrid.component';
import {textboxComponent} from './Textbox/Textbox.component';
import {buttonComponent} from './Buttons/button.components';

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
