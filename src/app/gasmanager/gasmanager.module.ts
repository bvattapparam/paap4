import { NgModule } from '@angular/core';
//import { routes } from '../app.router';
import { CommonModule } from "@angular/common";
import { GasmanagerComponent } from '../gasmanager/gasmanager.component';



//import { CommonModule } from '@angular/common';
//import 'jquery';

@NgModule({
  imports: [
   CommonModule
  
  ],
  declarations: [GasmanagerComponent]
})
export class GasmanagerModule { }
