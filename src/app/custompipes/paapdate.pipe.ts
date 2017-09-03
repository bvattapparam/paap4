import { Pipe, PipeTransform ,LOCALE_ID, Inject} from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'paapdate'
})
export class PaapdatePipe implements PipeTransform {
  constructor(@Inject(LOCALE_ID) private _locale: string){}

  transform(value: any): any {
    let _datePipe = new DatePipe('en_US');
    let _paapdate = _datePipe.transform(value,'dd-mm-yyyy');
    return;
  }

}
