import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender',
  standalone: false
})
export class GenderPipe implements PipeTransform {

  transform(customerName: any, gender: any): any {

    if (gender == 'Male') {
      return 'Mr.' + customerName;
    } else if (gender == 'Female') {
      return "Mrs." + customerName;
    }
    return gender;
  }

}
