import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from "@angular/common";
import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService }   from '../translate';
import { DbpanelboxComponent } from "../customcomponent/dbpanelbox/dbpanelbox.component";
import { PaapdatePipe } from '../custompipes/paapdate.pipe';
import { PaapcurrencyPipe } from '../custompipes/paapcurrency.pipe';

//import 'jquery';

@NgModule({
  imports: [
   CommonModule,
   RouterModule
  ],
    declarations: [ 
      TranslatePipe, 
      DbpanelboxComponent, 
      PaapdatePipe, 
      PaapcurrencyPipe 
    ],
    exports: [
      TranslatePipe, 
      DbpanelboxComponent, 
      PaapdatePipe, 
      PaapcurrencyPipe
    ],
    providers:[
      TRANSLATION_PROVIDERS, 
      TranslateService
    ]
  
})
export class SharedModule { }
