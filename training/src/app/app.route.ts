import { Routes } from '@angular/router';

import { usersComponent} from './users/users.component';
import { CompanyComponent} from './Company/company.component';
import { HomeComponent } from './home.component';

export const ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    {
        path: 'home', component: HomeComponent,
        children: [
            {path: 'listUsers', component: usersComponent },
            {path: 'listCompanies', component: CompanyComponent }
        ]
    }
];