import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  //compare arguments
  transform(value: any, propName: string): any {
    return value.sort((a, b) => {
      if(a[propName] > b[propName]) {
        return 1;
      } else {
        return -1;
      }
    });
  }

}
