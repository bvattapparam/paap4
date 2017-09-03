import { NgModule, Component, OnInit, ViewChild } from '@angular/core';
import { ReferenceserviceService } from '../sharedbox/referenceservice.service';
import { FlatmanagerService } from "../flatmanager/flatmanager.service";
import { LoaderService } from "../sharedbox/loader/loader.service";

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Component({
  selector: 'app-flatmanager',
  templateUrl: './flatmanager.component.html',
  styleUrls: ['./flatmanager.component.css'],
  providers:[ FlatmanagerService ]
})
export class FlatmanagerComponent implements OnInit {

  public _grandTotalObj: any;
  public panelRecord: any;

  constructor(private _referenceService : ReferenceserviceService, private _grandtotalService: FlatmanagerService, private _loaderService: LoaderService) { }

  ngOnInit() {
    this.grandTotal();
  }
  grandTotal(){
    this._loaderService.show();
    this._grandTotalObj = this._grandtotalService.getGrandTotals()
      .subscribe((res: any) => {
        this._grandTotalObj = res;
        this._loaderService.hide();
        this.panelBox(); // CONFIGURE PANEL BOX DYNAMICALLY...
      });  
  }

  panelBox(): any{
    this.panelRecord = [
      { panelTitle:'Property Tax',panelAmount:this._grandTotalObj.RENT_TOTAL,panelIcon:'tax',panelLink: '/flatmanager/propertytax' },
      { panelTitle:'TNEB Bill',panelAmount:this._grandTotalObj.BROADBAND_TOTAL,panelIcon:'eb',panelLink: '/flatmanager/ebpayment'  },
      { panelTitle:'Maintenance',panelAmount:this._grandTotalObj.MOBILE_BILL_TOTAL,panelIcon:'maint',panelLink: '/flatmanager/maintenance'  },
      { panelTitle:'Cooking Gas',panelAmount:this._grandTotalObj.GAS_BILL_TOTAL,panelIcon:'gas' ,panelLink: '/flatmanager/gas' },
      { panelTitle:'Home Loan',panelAmount:this._grandTotalObj.GAS_BILL_TOTAL,panelIcon:'loan',panelLink: '/flatmanager/homeloan'  },
      { panelTitle:'Home Insurance',panelAmount:this._grandTotalObj.GAS_BILL_TOTAL,panelIcon:'secure',panelLink: '/flatmanager/flatpayment'  },
      { panelTitle:'Flat Payment',panelAmount:this._grandTotalObj.FLATBASIC_PAYMENT_TOTAL, panelIcon:'flat',panelLink: '/flatmanager/flatpayment'  },
      { panelTitle:'Interior Payment',panelAmount:this._grandTotalObj.GAS_BILL_TOTAL,panelIcon:'flat',panelLink: '/flatmanager/flatpayment'  }
    ];
  }

}
