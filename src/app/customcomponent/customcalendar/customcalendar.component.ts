import { Component, ViewChild, OnInit, Input, Output, ElementRef, EventEmitter } from '@angular/core';

import * as jQuery from 'jquery';
import "fullcalendar";


@Component({
  selector: 'app-customcalendar',
  templateUrl: './customcalendar.component.html',
  styleUrls: ['./customcalendar.component.css']
})
export class CustomcalendarComponent{


  @Input() CustomcalconfigComponent:Object;
  @Input() baFullCalendarClass:string;
  @Output() onCalendarReady = new EventEmitter<any>();

  @ViewChild('appCustomcalendar') public _selector:ElementRef;
  
  constructor() { }

  setFullCal(){
    setTimeout(() => {
      let calendar = jQuery(this._selector.nativeElement).fullCalendar(this.CustomcalconfigComponent);
      this.onCalendarReady.emit(calendar);
    }, 100);
  }

  ngAfterViewInit() {
   this.setFullCal();
  }

}
