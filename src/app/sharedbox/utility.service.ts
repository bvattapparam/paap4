import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { MdDialog, MdDialogRef,MD_DIALOG_DATA } from '@angular/material';


@Injectable()
export class UtilityService {

  constructor( private dialog: MdDialog) { }

  public openModalBox(modalComponent,modalContent) {
   let dialogRef = this.dialog.open(modalComponent, {data: modalContent, panelClass: 'paapMD', disableClose: true});
  }

}
