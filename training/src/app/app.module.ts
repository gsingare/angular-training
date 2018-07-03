import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DatagridComponent} from './components/datagrid.component';
import {TextBoxComponent} from './components/textbox/textbox.component';
import {UserRegistrationComponent} from './userRegistration/userRegistration';
import {HttpModule} from '@angular/http';
import { RemoteService } from './service/remote.service';
import { RouteService } from './service/route.service';
import {RouterModule,PreloadAllModules} from '@angular/router';
import {ROUTES} from './app.route';
import {UsersComponent} from './users/users.component';
import {HomeComponent} from './home.component';
import {CompanyComponent} from './company/company.component'


@NgModule({
  declarations: [
    AppComponent,
    DatagridComponent,
    TextBoxComponent,
    UserRegistrationComponent,
    UsersComponent,
    HomeComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, {useHash: true, preloadingStrategy: PreloadAllModules})
  ],
  providers: [
    RemoteService,
  RouteService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
