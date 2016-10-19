import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'shorter'
})
export class ShorterPipe implements PipeTransform {
    transform(value: string): string {
        return value.length > 55 ? (value.substring(0, 55) + ' . . .') : value;
    }
}