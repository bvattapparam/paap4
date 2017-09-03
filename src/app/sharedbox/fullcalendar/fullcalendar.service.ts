import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { PaapConstants } from '../../config/paap.constants';


@Injectable()
export class FullcalendarService {
  //public _eventSchedulerData : any;

  constructor(private _http : Http) { }

 
events:any[]=[
   { "id": "1", "title": "BKV Static", "color": "green", "start": "2017-08-01", "end": "2017-08-02" }, { "id": "2", "title": "Service Testing Event", "color": "green", "start": "2017-08-01", "end": null }, { "id": "3", "title": "Long days event testing", "color": "blue", "start": "2017-08-03", "end": "2017-08-06" } 
  ] 
   getEventScheduler(): Observable<any[]>{
    let _url: string = PaapConstants.GET_EVENTSCHEDULER_ALL;
    return this._http.get(_url)
      .map((res: any) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || "ERROR PAAP :"));
  }


   getEvents(): Observable<any[]> {
  // return Observable.of(this.events);
   let _url: string = PaapConstants.GET_EVENTSCHEDULER_ALL;
   //return Observable.of(this.events);
     return this._http.get(_url).map((response:Response) => response.json());
  //  return this._http.get(_url)
  //  .toPromise()
  //   .then((res: Response) => res.json())
  //  .then(data => { 
  //    console.log("Service :",data);
  //  return data; });
  }

  



  getData(){
    return {
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      
      defaultDate: '2017-08-08',
      selectable: true,
      selectHelper: true,
      editable: true,
      eventLimit: true, 
      
     // events:this.events,
      // events: [
      //   {
      //     title: 'All Day Event',
      //     start: '2017-08-01',
      //     color: 'red'
      //   }
      //   // },
      //   // {
      //   //   title: 'Long Event',
      //   //   start: '2017-08-10',
      //   //   end: '2017-08-16',
      //   //   color: 'red'
      //   // },
      //   // {
      //   //   title: 'Dinner',
      //   //   start: '2017-08-14T20:00:00',
      //   //   color: 'green'
      //   // },
      //   // {
      //   //   title: 'Birthday Party',
      //   //   start: '2017-08-01T07:00:00',
      //   //   color: 'yellow'
      //   // }
      // ]
      
    };
  }
}
