
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavorListComponent } from './favor-list/favor-list.component';
import { FavorDetailComponent } from './favor-detail/favor-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FavorListComponent, FavorDetailComponent],
  exports:[FavorListComponent]
})
export class FavorModule { }
