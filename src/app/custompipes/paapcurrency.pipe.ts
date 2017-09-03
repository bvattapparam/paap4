import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe,CurrencyPipe, UpperCasePipe } from '@angular/common';

@Pipe({
  name: 'paapcurrency'
})
export class PaapcurrencyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let piper = new CurrencyPipe('INR'); // TODO why need this param by default.
   return piper.transform(value,'INR',true,'1.2-2');
  }

}
