import { Component, OnInit } from '@angular/core';
import { ToastrService, IndividualConfig } from 'ngx-toastr';
import { NeighborhoodService } from '../neighborhood/neighborhood.service';
import { ResidentService } from '../home/resident.service';
import { FavorService } from '../favor/favor.service';
import { Router } from '@angular/router';
import { Neighborhood } from '../neighborhood/neighborhood';
import { ResidentDetail } from '../home/resident-detail';
import { FormGroup, FormControl } from '@angular/forms';
import { Favor } from '../favor/favor';
import { Resident } from '../home/resident';

@Component({
  selector: 'app-favor-registration',
  templateUrl: './favor-registration.component.html',
  styleUrls: ['./favor-registration.component.css']
})
export class FavorRegistrationComponent implements OnInit {

  constructor(
    private toastr: ToastrService,
    private neighborhoodService: NeighborhoodService,
    private residentService: ResidentService,
    private favorService: FavorService,
    private router: Router
  ) { }

  neighborhoods: Array<Neighborhood>;
  residents: Array<ResidentDetail>;

    favorForm=new FormGroup({
      datePosted: new FormControl(null),
      title: new FormControl(null),
      description: new FormControl(null),
      type: new FormControl(null),
      isHelpWanted:new FormControl(null),
      candidates: new FormControl(null),
      neighborhood: new FormControl(null),
      author: new FormControl(null)
    })
    getNeighborhoods(): void {
      this.neighborhoodService.getNeighborhoods().subscribe((neighborhoods) => {
        this.neighborhoods = neighborhoods;
      });
    }

    getResidents(neigh: Neighborhood): void {
      this.residentService.getresidents(neigh.id).subscribe((residents) => {
        this.residents = residents;
      });
    }
  onSubmit(): void {
    console.log(
      'Date Posted:' +
        this.favorForm.get('datePosted').value +
        '\n' +
        'Title:' +
        this.favorForm.get('title').value +
        '\n' +
        'Description:' +
        this.favorForm.get('description').value +
        '\n' +
        'Type:' +
        this.favorForm.get('type').value +
        '\n' +
        'Is Help Wanted:' +
        this.favorForm.get('isHelpWanted').value
    );
    this.addFavor();
  }

  addFavor(): void {
    var datePosted: string = this.favorForm.value.datePosted;
    var title: string = this.favorForm.value.title;
    var description: string = this.favorForm.value.description;
    var type: string = this.favorForm.value.type;
    var isHelpWanted: boolean = this.favorForm.value.isHelpWanted;
    var neighborhood: number = this.favorForm.value.neighborhood;
    var author: number = this.favorForm.value.author;
    var candidates: Resident[]=this.favorForm.value.candidates;

    var favor: Favor = new Favor(
      datePosted,
      title,
      description,
      type,
      isHelpWanted,
      candidates
      );

    console.log(favor);
    const toastrConfig: Partial<IndividualConfig> = {
      timeOut: 1800,
    };
    var favorName = this.favorForm.value.title;

    var observable = this.favorService
      .addFavor(neighborhood, favor, 1)
      .subscribe(
        () => {
          this.favorForm.reset();
          this.favorForm.controls.neighborhood.setValue('Choose...');
          this.toastr.success(
            `The favor "${favorName}" was added to the neighborhood.`,
            'Success',
            toastrConfig
          );
          setTimeout(() => {
            this.router.navigateByUrl('/');
          }, 2300);
        },
        () => {
          this.favorForm.reset();
        }
      );
  }

  ngOnInit() {
    this.getNeighborhoods();
  }

}
