import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { PaapConstants } from "../config/paap.constants";
import { LoaderService } from "../sharedbox/loader/loader.service";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class ReferenceserviceService {

  public _referenceObj: any;
  public _referenceMapObj: any;
  public _referenceData : any;
  public _referenceDataMap : any;
  public _getValidatorObj: any;
  private _name = "bijesh";

  constructor(private _http : Http, private _loaderService: LoaderService) { }
  // GET VALIDATION FROM JSON..
  getValidator(){
    return this._http.get(PaapConstants.VALIDATOR_JSON).map((res: any) => res.json()).catch(err => { console.log(err);throw new Error(err);});
  }
  getReference(){
    return this._http.get(PaapConstants.REFERENCE_SERVICE).map((res:any) => res.json()).catch(err => { console.log(err);throw new Error(err);});
  }
  
  load(){
    this._loaderService.show();
    return Promise.all([this.getReference().toPromise(),this.getValidator().toPromise()])
      .then(response => {
        this._referenceObj = response[0];
        this._referenceMapObj = this.referenceDataManipulation(response[0]);
        this._getValidatorObj = response[1];
        this._loaderService.hide();
      })
     // .catch((err: any) => { console.log("error::::",err); throw new Error(err); });
  }

  // METHOD TO CALL THE REFERENCE DATA FROM THE API SERVICE
  /*load(): Promise<any> {
    this._referenceData = null;
    this.getValidationValues(); // TODO: MOVE THIS IN TO THE PROMISE ALL CHAIN TOMORROW..
    let refCall= this._http
          .get(PaapConstants.REFERENCE_SERVICE)
          .map((res: Response) => res.json())
          .toPromise()
          .then((data: any) => {
            // CALL MANIPULATED DATA...
            let manipulatedData = this.referenceDataManipulation(data);
            // ASSIGN MANIPULATED DATA ...
            this.getReferenceDataMap = manipulatedData;
            // ASSIGN ROW DATA ...
            this.getReferenceData = data;
            
          })
          .catch((err: any) => Promise.resolve());
    return refCall;
  }
  */
  

  referenceDataManipulation(paramData){
    let tmpRef = paramData;
    let _tmpRefvalue = {};
      Object.keys(tmpRef).forEach(key =>{
      let length = tmpRef[key].length-1;
      _tmpRefvalue[key] = {};
      for(var i = length; i >= 0; i--){
        _tmpRefvalue[key][tmpRef[key][i]["code"]] = tmpRef[key][i]["name"];
      }
      this._referenceDataMap = _tmpRefvalue;
    })
      return this._referenceDataMap;
  }

}