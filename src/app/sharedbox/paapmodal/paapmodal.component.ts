import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-paapmodal',
  templateUrl: './paapmodal.component.html',
  styleUrls: ['./paapmodal.component.css']
})
export class PaapmodalComponent {



  constructor(@Inject(MD_DIALOG_DATA) public data:any) { }


}
