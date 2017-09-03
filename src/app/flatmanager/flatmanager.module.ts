import { NgModule } from '@angular/core';
import { flatManagerRouting } from '../flatmanager/flatmanager.router';
import { CommonModule } from "@angular/common";
import { SharedModule } from "../sharedbox/shared.module";
import { FlatmanagerComponent } from '../flatmanager/flatmanager.component';
import { FlatpaymentComponent } from './flatpayment/flatpayment.component';
import { PropertytaxComponent } from './propertytax/propertytax.component';
import { MdButtonModule, MdInputModule, MaterialModule, MdDialogModule, MD_DIALOG_DATA, MdDialog, MdDialogRef, MdDatepickerModule,MdNativeDateModule, MdMenuModule } from '@angular/material';


//import 'jquery';

// TODO : Check the MD components are needed in both module..?

@NgModule({
  imports: [ flatManagerRouting, CommonModule, SharedModule,MaterialModule, MdButtonModule,MdDialogModule ],
  declarations: [ FlatmanagerComponent, FlatpaymentComponent, PropertytaxComponent ],
  bootstrap: [ FlatmanagerComponent ]
})
export class FlatmanagerModule { }
