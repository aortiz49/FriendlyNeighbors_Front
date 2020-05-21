import {Pipe, PipeTransform} from '@angular/core';
import {Resident} from "../home/resident";

@Pipe({
  name: 'residentName'
})
export class ResidentNamePipe implements PipeTransform {

  transform(list: Resident[], filterText: string): Resident[] {
    console.log(filterText);
    if (!list) return null;
    if (!list) return list;
    if (filterText == undefined) return list;
    return list.filter(t => (t.name + t.nickname).indexOf(filterText) > -1);
  }

}
