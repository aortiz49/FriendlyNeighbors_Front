import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostFilterPipe} from './post-title-filter.pipe';


@NgModule({
    declarations: [PostFilterPipe],

    imports: [CommonModule],

    exports: [PostFilterPipe]
})
export class SharedModule {
}
