import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostFilterPipe} from './post-title-filter.pipe';
import { ResidentNamePipe } from './resident-name.pipe';


@NgModule({
    declarations: [PostFilterPipe, ResidentNamePipe],

    imports: [CommonModule],

  exports: [PostFilterPipe, ResidentNamePipe]
})
export class SharedModule {
}
