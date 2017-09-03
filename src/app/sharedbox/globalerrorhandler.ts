import { ErrorHandler, Injectable, Injector} from '@angular/core';
import { LoaderService } from "../sharedbox/loader/loader.service";
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { PaapmodalComponent } from "../sharedbox/paapmodal/paapmodal.component";
import { UtilityService } from "../sharedbox/utility.service";


@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private _injector: Injector) { }

  handleError(error: any) {
    

    const _loaderService = this._injector.get(LoaderService);
    const util = this._injector.get(UtilityService);
    const _paapModalComponent = this._injector.get(PaapmodalComponent);
    
    _loaderService.hide();

   
    const errorData = {errorTitle: "Error as Global",errorDescription:error};
     console.log('Custome Error handler is here: ', errorData);
    let dialogRef = util.openModalBox(PaapmodalComponent,errorData)
     throw error;
  }
  
}