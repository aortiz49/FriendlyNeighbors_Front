import { Pipe, PipeTransform } from '@angular/core';
import {Post} from "../post/post";

@Pipe({
  name: 'postFilter'
})
export class PostFilterPipe implements PipeTransform {

  transform(list: Post[], filterText: string): any {
    console.log(filterText);
    return list ? list.filter(t => (t.description  + t.title + t.author.name ).search(new RegExp(filterText, 'i')) > -1) : [];
  }

  }
