import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, PreloadAllModules} from '@angular/router';
import { AppComponent } from './app.component';
import {DatagridComponent} from './components/datagrid.component';
import {textComponent} from './textbox_components/textbox.component';
import {buttonComponent} from './buttons_components/buttons.component';
import {userRegistration} from './user_registration/user.registration';
import { usersComponent } from './users/users.component';
import { HomeComponent } from './home.component';
import { CompanyComponent } from './Company/company.component';
import { googleComponent } from './google/info.google';
import { appleComponent } from './apple/info.apple';
import { microsoftComponent } from './microsoft/info.microsoft';


import {HttpModule} from '@angular/http';
import { RemoteService } from './service/remote.service';
import { RouteService } from './service/route.service';
import { ROUTES } from './app.route';


@NgModule({
  declarations: [
    AppComponent,
    DatagridComponent,
    textComponent,
    buttonComponent,
    userRegistration,
    usersComponent,
    HomeComponent,
    CompanyComponent,
    googleComponent,
    appleComponent,
    microsoftComponent
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
