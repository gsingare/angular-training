import { Routes } from '@angular/router';

import { usersComponent} from './users/users.component';
import { CompanyComponent} from './Company/company.component';
import { HomeComponent } from './home.component';
import { googleComponent } from './google/info.google';
import { appleComponent } from './apple/info.apple';
import { microsoftComponent } from './microsoft/info.microsoft';

export const ROUTES: Routes = [
   
    {
        path: 'home', component: HomeComponent,
        children: [
            {path: 'listUsers', component: usersComponent },
            {path: 'listCompanies', component: CompanyComponent },
            {path: 'infoGoogle', component: googleComponent },
            {path: 'infoApple', component: appleComponent },
            {path: 'infoMicrosoft', component: microsoftComponent }
        ]
    },
    { path: '', redirectTo: '/home', pathMatch: 'full'} 
];