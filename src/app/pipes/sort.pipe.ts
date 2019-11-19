import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, propName: string) {
    return value.sort((a, b) => {
      return a[propName] > b[propName] ? 1 : -1;
      // if (a[propName] > b[propName]) {
      //   return 1;
      // } else {
      //   return -1;
      // }
    });
  }

}
