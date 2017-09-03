import {RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {FlatmanagerComponent} from '../flatmanager/flatmanager.component';
import { FlatpaymentComponent } from "../flatmanager/flatpayment/flatpayment.component";
import { PropertytaxComponent } from "../flatmanager/propertytax/propertytax.component";

const routes = [
    { path: '', component:FlatmanagerComponent },
    { path: 'flatmanager/flatpayment', component:FlatpaymentComponent},
    { path: 'flatmanager/propertytax', component:PropertytaxComponent}
];

export const flatManagerRouting: ModuleWithProviders = RouterModule.forChild(routes);