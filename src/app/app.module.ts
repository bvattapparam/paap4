import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER, ErrorHandler } from '@angular/core';
import { Http, Response, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { routes } from './app.router';

import { FormBuilder, FormGroup,ReactiveFormsModule } from '@angular/forms';

import 'jquery';
import { MdButtonModule, MdInputModule, MaterialModule, MdDialogModule, MD_DIALOG_DATA, MdDialog, MdDialogRef, MdDatepickerModule,MdNativeDateModule, MdMenuModule } from '@angular/material';
import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService }   from './translate';
import { GlobalErrorHandler } from './sharedbox/globalerrorhandler';
import { Location, LocationStrategy, PathLocationStrategy ,LowerCasePipe, UpperCasePipe,CurrencyPipe,DatePipe} from '@angular/common';

import { PaapConstants} from './config/paap.constants';

import { UtilityService } from "./sharedbox/utility.service";
import { ReferenceserviceService } from './sharedbox/referenceservice.service';
import { TestserviceService } from './sharedbox/testservice.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
//import { FlatmanagerComponent } from './flatmanager/flatmanager.component';
import { CarmanagerComponent } from './carmanager/carmanager.component';
import { LoanmanagerComponent } from './loanmanager/loanmanager.component';
import { InsurancemanagerComponent } from './insurancemanager/insurancemanager.component';
import { GasmanagerComponent } from './gasmanager/gasmanager.component';
import { SchoolmanagerComponent } from './schoolmanager/schoolmanager.component';
import { CustomcalendarComponent } from './customcomponent/customcalendar/customcalendar.component';
import { FullcalendarComponent } from './sharedbox/fullcalendar/fullcalendar.component';
import { BaiscmodalComponent } from './dashboard/baiscmodal/baiscmodal.component';
import { DbpanelboxComponent } from './customcomponent/dbpanelbox/dbpanelbox.component';
import { DbcardComponent } from './customcomponent/dbcard/dbcard.component';

import { LoaderComponent } from './sharedbox/loader/loader.component';
import { LoaderService } from './sharedbox/loader/loader.service';
import { PaapmodalComponent } from "./sharedbox/paapmodal/paapmodal.component";
import { CreateschedulerComponent } from './sharedbox/fullcalendar/createscheduler/createscheduler.component';


import { ValidationsService } from "./sharedbox/validations.service";

// CHILD MODULES...
import { SharedModule } from "./sharedbox/shared.module";

import { FlatmanagerModule } from "./flatmanager/flatmanager.module";
import { GasmanagerModule } from "./gasmanager/gasmanager.module";
import { SettingsComponent } from './settings/settings.component';
import { LanguagesettingComponent } from './settings/languagesetting/languagesetting.component';

export function referenceServiceFactory(referenceService: ReferenceserviceService): Function {
    return () => referenceService.load();
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    SidebarComponent,
    //FlatmanagerComponent,
    CarmanagerComponent,
    LoanmanagerComponent,
    InsurancemanagerComponent,
    //GasmanagerComponent,
    SchoolmanagerComponent,
    //TranslatePipe,
    CustomcalendarComponent,
    FullcalendarComponent,
    BaiscmodalComponent,
    //DbpanelboxComponent,
    DbcardComponent,
    //PaapcurrencyPipe,
    LoaderComponent,
    PaapmodalComponent,
    CreateschedulerComponent,
    SettingsComponent,
    LanguagesettingComponent
  
  ],
   
   imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    routes,
    MdInputModule,
    FormsModule,
    MaterialModule,
    MdDialogModule,
    MdDatepickerModule,
    MdNativeDateModule,
    ReactiveFormsModule,
    FlatmanagerModule,
    GasmanagerModule,
    SharedModule,
    MdMenuModule,
    MdButtonModule
  ],
  exports:[
   // DbpanelboxComponent
   // DashboardComponent
    //TranslatePipe
    PaapmodalComponent,
    MdButtonModule
  ],
  providers: [
    DatePipe,
    PaapmodalComponent,
    CreateschedulerComponent,
    //TRANSLATION_PROVIDERS, TranslateService,
    UtilityService,
    ReferenceserviceService,
    ValidationsService,
    LoaderService,
    { provide: MD_DIALOG_DATA, useValue: {} },
    { provide: MdDialogRef, useValue: {} },
    { provide: APP_INITIALIZER, useFactory: referenceServiceFactory, deps: [ReferenceserviceService],multi: true },
    { provide: ErrorHandler, useClass: GlobalErrorHandler }
  ],
  entryComponents: [
    PaapmodalComponent,
    CustomcalendarComponent, 
    FullcalendarComponent,
    CreateschedulerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

