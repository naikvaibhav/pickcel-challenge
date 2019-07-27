import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'reverseStr' })
export class ReverseStr implements PipeTransform {
    transform(value: string): string {
        return value.split('').reverse().join('');
    }
}