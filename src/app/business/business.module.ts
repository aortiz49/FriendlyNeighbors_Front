import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessListComponent } from './business-list/business-list.component';
import { BusinessDetailComponent } from './business-detail/business-detail.component';
import { BusinessRoutingModule } from './business-routing/business-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BusinessRoutingComponent } from './business-routing/business-routing.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// merged comment
@NgModule({
  imports: [
    CommonModule,
    BusinessRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [BusinessListComponent, BusinessDetailComponent,BusinessRoutingComponent],
  exports:[BusinessListComponent,BusinessRoutingComponent]
})
export class BusinessModule { }
