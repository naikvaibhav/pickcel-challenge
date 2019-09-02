import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'arrtostr' })
export class ArrToStr implements PipeTransform {
    transform(value: Array<String>): string {
      return value.join(',')
       
    }
}