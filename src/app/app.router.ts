import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule, LoadChildren} from '@angular/router';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {FlatmanagerComponent} from './flatmanager/flatmanager.component';
import {CarmanagerComponent} from './carmanager/carmanager.component';
import {LoanmanagerComponent} from './loanmanager/loanmanager.component';
import {InsurancemanagerComponent} from './insurancemanager/insurancemanager.component';
import {GasmanagerComponent} from './gasmanager/gasmanager.component';
import { FlatpaymentComponent } from "./flatmanager/flatpayment/flatpayment.component";
import { LanguagesettingComponent } from "./settings/languagesetting/languagesetting.component";

export const router:Routes = [
    { path : '', redirectTo : 'login',pathMatch:'full' },
    { path: 'dashboard', component:DashboardComponent},
    { path: 'login', component:LoginComponent},
    { path: 'flatmanager', component:FlatmanagerComponent,loadChildren:'app/flatmanager/flatmanager.module#FlatmanagerModule'},
    { path: 'carmanager', component:CarmanagerComponent},
    { path: 'loanmanager', component:LoanmanagerComponent},
    { path: 'insurancemanager', component:InsurancemanagerComponent},
    { path: 'gasmanager', component:GasmanagerComponent,loadChildren:'app/gasmanager/gasmanager.module#GasmanagerModule'},
    { path: 'settings/langsetting', component:LanguagesettingComponent}

];

export const routes:ModuleWithProviders = RouterModule.forRoot(router);