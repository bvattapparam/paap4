import { Component, OnInit, ViewChild, NgModule } from '@angular/core';
import { PaapConstants } from './config/paap.constants';
import { ReferenceserviceService } from './sharedbox/referenceservice.service';
import { HeaderComponent } from './header/header.component';
import { CustomcalconfigComponent } from './customcomponent/customcalendar/customcalconfig.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private myInput;
  private myErrorStateMatcher;

  
  constructor(private referenceDataService : ReferenceserviceService){
  }
  
  getReferenceValue(){
    console.log("REFERENCE MANIPULATED DATA: ",this.referenceDataService._referenceMapObj);
    console.log("REFERENCE ROW DATA: ",this.referenceDataService._referenceObj);
    console.log("VALIDATION OBJ: ", this.referenceDataService._getValidatorObj);
  }
  
  ngOnInit() {
   // this.getReferenceValue();
  }      
}
