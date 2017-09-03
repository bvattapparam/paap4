import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA, MdInputContainer } from '@angular/material';
import { PaapConstants } from '../../../config/paap.constants';
import * as moment from 'moment';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ValidationsService } from '../../../sharedbox/validations.service';
import { ReferenceserviceService } from '../../../sharedbox/referenceservice.service';

@Component({
  selector: 'app-createscheduler',
  templateUrl: './createscheduler.component.html',
  styleUrls: ['./createscheduler.component.css'],
  providers:[ValidationsService]
})
export class CreateschedulerComponent implements OnInit {
  createScheduler: FormGroup;
  public schedulerTitle: string;
  public title: string;
  public id: number;
  public start: Date;
  public end: Date;
  public description: string;
  public color: string;

  formValidConfig:any={};

 constructor(@Inject(MD_DIALOG_DATA) public data:any, private _datePipe: DatePipe, private _validator: ValidationsService, private _referenceService: ReferenceserviceService) { 

  this.title      = this.data.title;
  this.start      = this.data.start;
  this.end        = this.data.end;
  this.id         = this.data.id;
  this.color      = this.data.color;
  // console.log("Converted Date: ", _datePipe.transform(this.start,PaapConstants.DATE_FORMAT))

  // console.log("DATA : ", data);
  // console.log("title : ", this.title);
  // console.log("start : ", moment(this.start).format(PaapConstants.DATE_FORMAT));
  // console.log("end : ", this.end);

 }
ngOnInit() {
  this.formValidConfig = this._validator.uiConfigObj(this._referenceService._getValidatorObj,["paap","scheduler","create"]);
  
   //this.formValidConfig = this._validator.uiConfigObj(this._referenceService._getValidatorObj,["paap","travel"]);
  //console.log("Create: ", this.formValidConfig);  

   this.createScheduler = this._validator.buildForm(this._referenceService._getValidatorObj.paap.scheduler.create);

}
  createSchedulerData(){
    console.log("Create data: ",this.createScheduler.value);
  }
  onSubmit(){
    this.createSchedulerData();
  }

}
