import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'threeDigit',
})
export class ThreeDigitPipe implements PipeTransform {
  transform(value: number, isConvert: boolean): any {
    const val = value.toString();
    if(isConvert){
      if (val.length === 1) {
        return `00${val}`;
      }
      if (val.length === 2) {
        return `0${val}`;
      }
    }
    return val;
  }
}
