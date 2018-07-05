import { Routes } from '@angular/router';

import { UsersComponent} from './users/users.component';
import { HomeComponent } from './home.component';
import { CompanyComponent } from './company/company.component';
import { informationComponent } from './company-information/information.component';
import { amazonComponent } from './amazon/amazon.component';
import { gmailComponent } from './gmail/gmail.component';


export const ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    {
        path: 'home', component: HomeComponent,
        children: [
            {path: 'listUsers', component: UsersComponent },
            {path: 'listCompanies', component: CompanyComponent },
            {path: 'information', component: informationComponent },
            {path: 'amazon', component: amazonComponent },
            {path: 'gmail', component: gmailComponent }

        ]
    }
];