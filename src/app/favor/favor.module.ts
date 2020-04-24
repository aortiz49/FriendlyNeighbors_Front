import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavorListComponent } from './favor-list/favor-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FavorListComponent],
  exports:[FavorListComponent]
})
export class FavorModule { }
