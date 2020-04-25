import { Component, OnInit } from '@angular/core';
import{ Favor } from '../favor';
import { FavorService } from '../favor.service';

@Component({
  selector: 'app-favor-list',
  templateUrl: './favor-list.component.html',
  styleUrls: ['./favor-list.component.css']
})
export class FavorListComponent implements OnInit {

  constructor(private favorService:FavorService) { }

  public favors:Array<Favor>;

  getFavors(){
    this.favorService.getFavors().subscribe(bs=> {
      this.favors = bs;
    })
  }

  selected=false;
  selectedFavor:Favor;

  onSelected(c:Favor):void{
    this.selected=true;
    this.selectedFavor=c;
  }

  ngOnInit() {
    this.getFavors();
  }

}
