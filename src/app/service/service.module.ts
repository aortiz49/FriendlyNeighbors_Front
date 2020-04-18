import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceListarComponent } from './service-listar/service-listar.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ServiceListarComponent],
  exports: [ServiceListarComponent]
})
export class ServiceModule {
  constructor (private descriptionA: string,
    private isAvailableA: boolean, private tittleA: string,
     private publishDateA: Date ){ }



get description(): string { return this.descriptionA; }
get tittle(): string { return this.tittleA; }
get publishDate(): Date { return this.publishDateA; }
get isAvailable(): boolean { return this.isAvailableA; }
 }
