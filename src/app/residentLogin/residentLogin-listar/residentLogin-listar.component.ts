import { Component, OnInit } from '@angular/core';
import { ResidentLoginService } from '../residentLogin.service';
import { Resident } from 'src/app/resident/resident';

@Component({
  selector: 'app-residentLogin-listar',
  templateUrl: './residentLogin-listar.component.html',
  styleUrls: ['./residentLogin-listar.component.css']
})
export class ResidentLoginListarComponent implements OnInit {



    constructor(private residentLoginService: ResidentLoginService) {}

    residentLogin: Array<Resident>;

    getResidentLogin(): void {
      this.residentLoginService.getResidentLogin().subscribe((Resident) => {
        this.residentLogin = Resident;
      });
    }

    ngOnInit() {
      this.getResidentLogin();
    }
}
