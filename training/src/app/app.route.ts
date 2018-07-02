import { Routes } from '@angular/router';

import { UsersComponent} from './users/users.component';
import { HomeComponent } from './home.component';
import { CompanyComponent } from './company/company.component';

export const ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    {
        path: 'home', component: HomeComponent,
        children: [
            {path: 'listUsers', component: UsersComponent },
            {path: 'listCompanies', component: CompanyComponent }
        ]
    }
];