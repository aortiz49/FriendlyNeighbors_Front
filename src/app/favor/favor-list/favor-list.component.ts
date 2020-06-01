import { Component, OnInit } from '@angular/core';
import{ Favor } from '../favor';
import { FavorService } from '../favor.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-favor-list',
  templateUrl: './favor-list.component.html',
  styleUrls: ['./favor-list.component.css']
})
export class FavorListComponent implements OnInit {

  constructor(private favorService:FavorService,
    private route: ActivatedRoute) { }

  public favors:Array<Favor>;
  neighId: number;
  filteredFavor : Array<Favor>;

  getFavors(){
    this.favorService.getFavors(this.neighId).subscribe(bs=> {
      this.favors = bs;
      this.filteredFavor = bs;
    })
  }
  favorForm = new FormGroup({
    rating : new FormControl(null)
  });
  rate:boolean;

  onSubmit():void{
    console.log("entraa");
    this.filteredFavor = [];
    this.rate = this.favorForm.get('rating').value;

   for (let index = 0; index < this.favors.length; index++) {
     if(this.rate){
      if(this.favors[index].isHelpWanted){
        this.filteredFavor.push(this.favors[index]);
      }
     }
     else{
       this.filteredFavor=this.favors;
     }
   }
 }
  selected=false;
  selectedFavor:Favor;

  onSelected(c:Favor):void{
    this.selected=true;
    this.selectedFavor=c;
  }

  nothingSelected():void{
    this.selected=false;
  }

  ngOnInit() {
    this.neighId = +this.route.snapshot.paramMap.get('id');
    this.getFavors();
  }

}
