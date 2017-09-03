import { NgModule, Component, OnInit, ViewChild } from '@angular/core';
import { FlatpaymentService } from "../../flatmanager/flatpayment/flatpayment.service";

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { LoaderService } from "../../sharedbox/loader/loader.service";
import { GlobalErrorHandler } from "../../sharedbox/globalerrorhandler";

@Component({
  selector: 'app-flatpayment',
  templateUrl: './flatpayment.component.html',
  styleUrls: ['./flatpayment.component.css'],
  providers:[ FlatpaymentService ]
})
export class FlatpaymentComponent implements OnInit {

  public _getFlatPaymentObj: any;
  private _grandTotal: any;
  private _totalRows: any;

  public currentPage = 1;
 	public limit= 20;
 	public maxSize = 5;

  constructor(private _loaderService: LoaderService, private _flatPaymentService: FlatpaymentService) { }

  ngOnInit() {
    this.getFlatPaymentData();
    
    
  }

  getFlatPaymentData(){
    this._loaderService.show();
    this._getFlatPaymentObj = this._flatPaymentService.getPaymentData(this.limit, this.currentPage)
    .subscribe((res: any) => {
      this._getFlatPaymentObj = res[0];
      this._grandTotal = res[2].grand_total.GRAND_TOTAL;
      this._totalRows = res[1].total_records.TOTAL_RECORDS;
      // if(res.error){
      //     this._loaderService.hide()
      //   throw new Error(res.error);
      // }
      console.log(this._grandTotal);
     this._loaderService.hide();
    });

  }
  /*
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
  */

}
