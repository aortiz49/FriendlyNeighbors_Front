import { Component, OnInit } from '@angular/core';

import {ServiceService} from '../service.service';
@Component({
  selector: 'app-service-listar',
  templateUrl: './service-listar.component.html',
  styleUrls: ['./service-listar.component.css']
})
export class ServiceListarComponent implements OnInit {

    constructor(private serviceService: ServiceService) {}

    service: Array<ServiceListarComponent>;

    getNeighborhoods(): void {
      this.serviceService.getService().subscribe((service) => {
        this.service = service;
      });
    }

    ngOnInit() {
      this.getNeighborhoods();
    }
}
