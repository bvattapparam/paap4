import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http'
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'

import { PaapConstants } from "../config/paap.constants";


import { LoaderService } from "../sharedbox/loader/loader.service";
import { GlobalErrorHandler } from "../sharedbox/globalerrorhandler";

@Injectable()
export class DashboardService {

  constructor(private _http: Http, private _loaderService: LoaderService) { }
  
  public getGrandTotals(): Observable<any>{
    let _url: string = PaapConstants.GET_GRAND_TOTAL;
    return this._http.get(_url)
     .map((res: any) => res.json()[0])
     //.map((res: any) => {res.json()[0]; this._loaderService.hide();})
     .catch(err => {throw new Error(err)});
    
  }
    public handleError(err: any){
   
  }

}
