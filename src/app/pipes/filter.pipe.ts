import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (filterString === '' || value.length === 0) {
      return value;
    }

    const filteredArray = [];

    for (const item of value) {
      if (item[propName] === filterString) {
        filteredArray.push(item);
      }
    }
    return filteredArray;
  }

}
