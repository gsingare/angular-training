import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, PreloadAllModules} from '@angular/router';

import { AppComponent } from './app.component';
import {dataGridComponent} from './components/datagrid.component';
import {textboxComponent} from './textbox/textbox.component';
import {buttonComponent} from './buttons/buttons.component';
import {UserRegistrationComponent} from './userRegistration/userRegistration';
import { HomeComponent } from './home.component';
import { UsersComponent } from './users/users.component';
import { CompanyComponent } from './company/company.component';
import { informationComponent } from './company-information/information.component';
import { amazonComponent } from './amazon/amazon.component';
import { gmailComponent } from './gmail/gmail.component';



import { HttpModule } from '@angular/http';
import {RemoteService} from './service/remote.service';
import {RouteService} from './service/route.service';

import { ROUTES } from './app.route';

@NgModule({
  declarations: [
    AppComponent,
    dataGridComponent,
    textboxComponent,
    buttonComponent,
    UserRegistrationComponent,
    UsersComponent,
    HomeComponent,
    CompanyComponent,
    informationComponent,
    amazonComponent,
    gmailComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules})
  ],
  providers: [
    RemoteService,
    RouteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
