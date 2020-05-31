import { Resident } from '../home/resident';

export class Favor {

  public id:number;
  public author: Resident;
  public datePosted: string;
  public title: String;
  public description: String;
  public type: String;
  public isHelpWanted: Boolean;
  public candidates: Resident[];

  constructor(
    datePosted: string,
    title: String,
    description: String,
    type: String,
    isHelpWanted: Boolean,
    candidates: Resident[]
  ){
    this.datePosted=datePosted;
    this.title=title;
    this.description=description;
    this.type=type;
    this.isHelpWanted=isHelpWanted;
    this.candidates=candidates;
  }
}
