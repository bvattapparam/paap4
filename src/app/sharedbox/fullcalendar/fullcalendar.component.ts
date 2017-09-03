import { NgModule, Component, OnInit, AfterViewInit, ChangeDetectorRef,Inject } from '@angular/core';
import { FullcalendarService } from './fullcalendar.service';
import { CustomcalconfigComponent } from '../../customcomponent/customcalendar/customcalconfig.component';
import * as $ from 'jquery';
import { MdDialog, MdDialogRef } from '@angular/material';

import { CreateschedulerComponent } from "../fullcalendar/createscheduler/createscheduler.component";
import { Subscription } from 'rxjs/Subscription';
import { UtilityService } from '../utility.service';


@Component({
  selector: 'app-fullcalendar',
  templateUrl: './fullcalendar.component.html',
  styleUrls: ['./fullcalendar.component.css'],
  providers: [FullcalendarService,UtilityService]
})

export class FullcalendarComponent implements OnInit {

  closeResult: string;


  public calendarConfiguration:any;
  private _calendar:Object;
  events: any[] = [];
  private config: any = {};
  public subscriptions: Subscription[] = [];
   public messages: string[] = [];
   public selectedOption: string;

    dateFormat = "dd-MMM-yyyy";

  constructor(private dialog: MdDialog, private cdr: ChangeDetectorRef, private _calendarService:FullcalendarService, private utlService: UtilityService) {
    this.calendarConfiguration = this._calendarService.getData();
    this._calendarService.getEvents().subscribe(result => {
    this.events = result;
     
    this.calendarConfiguration.eventClick = (event,jsEvent,view) => this._onEventClick(event,jsEvent,view);
    this.calendarConfiguration.dayClick = (date,jsEvent) => this._onDayclick(date,jsEvent);
    this.calendarConfiguration.events = this.events;
    this.cdr.detectChanges();
    });
  }


  
  public onCalendarReady(calendar):void {
    this._calendar = calendar;
  }

  
  private _onEventClick(event,jsEvent, view){
    //console.log("EDIT EVENT:  ", event.start.toString());
    this.editEvent(event);
  }

  private _onDayclick(date,jsEvent){
    this.addEvent(date);

  }

  public editEvent(event) {
  
    this.utlService.openModalBox(CreateschedulerComponent,event)
  }

  public addEvent(date){
    this.config = "modal-sm";
   // this.utlService.openModalBox(EventcreatemodalComponent,event);
  }
  
  ngOnInit() {
    
  }

}
