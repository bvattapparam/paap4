import { NgModule, Component, OnInit, ViewChild } from '@angular/core';
import { ReferenceserviceService } from '../sharedbox/referenceservice.service';
import { DashboardService } from '../dashboard/dashboard.service';
import { FullcalendarComponent } from '../sharedbox/fullcalendar';
import { ValidationsService } from "../sharedbox/validations.service"
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { LoaderService } from "../sharedbox/loader/loader.service";
import { BaiscmodalComponent } from '../dashboard/baiscmodal/baiscmodal.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService, ValidationsService]
})
export class DashboardComponent implements OnInit {

  private _uiConfigObj: any;
  public panelRecord: any;
  private _referenceDataMap: any;
  public _grandTotalObj: any;
  private dbCardValuePM:  any;
  private dbCardValueFM:  any;
  private dbCardValueCM:  any;
  private dbCardIcon: string;
  private dbCardTitle: string;
  private pmIcon: string;
  private pmTitle: string;
  private fmIcon: string;
  private fmTitle: string;
  private cmIcon: string;
  private cmTitle: string;

  constructor(private _referenceService : ReferenceserviceService, private _grandtotalService: DashboardService, private _validationsService: ValidationsService, private _loaderService: LoaderService) {}

  ngOnInit() {
    this.grandTotal();
    this._uiConfigObj = this._validationsService.uiConfigObj(this._referenceService._getValidatorObj,["paap","travel"]);
  }


  grandTotal(){
    this._loaderService.show();
    this._grandTotalObj = this._grandtotalService.getGrandTotals()
      .subscribe((res: any) => {
        this._grandTotalObj = res;
        this._loaderService.hide();
        this.panelBox(); // CONFIGURE PANEL BOX DYNAMICALLY...
        this.getDBCardValuesPM(); // CONFIGURE PANEL BOX DYNAMICALLY...
        this.getDBCardValuesFM(); // CONFIGURE PANEL BOX DYNAMICALLY...
        this.getDBCardValuesCM(); // CONFIGURE PANEL BOX DYNAMICALLY...
      });  
  }

  panelBox(): any{
    this.panelRecord = [
      { panelTitle:'School Fees',panelAmount:this._grandTotalObj.SCHOOL_FEES_TOTAL,panelIcon:'school' },
      { panelTitle:'Broadband Bill',panelAmount:this._grandTotalObj.BROADBAND_TOTAL,panelIcon:'internet'  },
      { panelTitle:'Mobile Bill',panelAmount:this._grandTotalObj.MOBILE_BILL_TOTAL,panelIcon:'mobile'  },
      { panelTitle:'Cooking Gas',panelAmount:this._grandTotalObj.GAS_BILL_TOTAL,panelIcon:'gas'  }
    ];
  }

  getDBCardValuesPM(): any{
    this.dbCardValuePM = [
      { dbCardDescription:'Bijeshkumar Vattapparambath (LIC)', dbCardAmount:this._grandTotalObj.RENT_TOTAL, dbCardIcon:'umbrella' },
      { dbCardDescription:'Sandhya Narayanan (LIC)', dbCardAmount:this._grandTotalObj.gasTotal, dbCardIcon:'umbrella'  },
      { dbCardDescription:'Bijeshkumar Vattapparambath (LIC)', dbCardAmount:this._grandTotalObj.CAR_OTHERS_TOTAL, dbCardIcon:'umbrella'  },
      { dbCardDescription:'Car Insurance - Baleno (Sundaram)', dbCardAmount:this._grandTotalObj.INSURANCE_POLICY_TOTAL, dbCardIcon:'car'  },
      { dbCardDescription:'Car Insurance - Alto (Sundaram)', dbCardAmount:this._grandTotalObj.INSURANCE_POLICY_TOTAL, dbCardIcon:'car'  },
      { dbCardDescription:'Home Insurance - HDFC Ergo', dbCardAmount:this._grandTotalObj.INSURANCE_POLICY_TOTAL, dbCardIcon:'flat'  }
    ];
    this.pmTitle = "Protection Manager";
    this.pmIcon = "secure";
  }

  getDBCardValuesFM(): any{
    this.dbCardValueFM = [
      { dbCardDescription:'Propert Tax', dbCardAmount:this._grandTotalObj.RENT_TOTAL, dbCardIcon:'tax' },
      { dbCardDescription:'TNEB Bill', dbCardAmount:this._grandTotalObj.gasTotal, dbCardIcon:'eb'  },
      { dbCardDescription:'Maintenance', dbCardAmount:this._grandTotalObj.CAR_OTHERS_TOTAL, dbCardIcon:'maint'  },
      { dbCardDescription:'Water Bill', dbCardAmount:this._grandTotalObj.INSURANCE_POLICY_TOTAL, dbCardIcon:'pipe'  },
      { dbCardDescription:'Home Gas Bill', dbCardAmount:this._grandTotalObj.INSURANCE_POLICY_TOTAL, dbCardIcon:'gas'  },
       { dbCardDescription:'Home Loan', dbCardAmount:this._grandTotalObj.INSURANCE_POLICY_TOTAL, dbCardIcon:'loan'  }
    ];
    this.fmTitle = "Flat Manager";
    this.fmIcon = "flat";
  }
  getDBCardValuesCM(): any{
    this.dbCardValueCM = [
      { dbCardDescription:'Car Insurance - Baleno', dbCardAmount:this._grandTotalObj.RENT_TOTAL, dbCardIcon:'loan' },
      { dbCardDescription:'Car Insurance - Alto', dbCardAmount:this._grandTotalObj.gasTotal, dbCardIcon:'loan'  },
      { dbCardDescription:'Maintenance - Baleno', dbCardAmount:this._grandTotalObj.CAR_OTHERS_TOTAL, dbCardIcon:'maint'  },
      { dbCardDescription:'Maintenance - Baleno', dbCardAmount:this._grandTotalObj.INSURANCE_POLICY_TOTAL, dbCardIcon:'maint'  },
      { dbCardDescription:'Car Loan - Baleno', dbCardAmount:this._grandTotalObj.INSURANCE_POLICY_TOTAL, dbCardIcon:'loan'  }
    ];
    this.cmTitle = "Car Manager";
    this.cmIcon = "car";
  }
  

}