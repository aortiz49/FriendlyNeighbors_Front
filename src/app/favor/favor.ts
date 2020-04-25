import { Resident } from '../resident/resident';

export class Favor {

  private _id:number;
  private _author: Resident;
  private _datePosted: Date;
  private _title: String;
  private _description: String;
  private _type: String;
  private _isHelpWanted: Boolean;
  private _candidates: Resident[];

constructor(id:number, candidates:Resident[], author:Resident, datePosted:Date, title:String, descrption:String, type:String, ishelpwanted:Boolean){
  this._author=author;
  this._datePosted=datePosted;
  this._title=title;
  this._description=descrption;
  this._type=type;
  this._isHelpWanted=ishelpwanted;
  this._candidates=candidates;
  this._id=id;
}
  public get id():number{
    return this._id;
  }
  public get isHelpWanted(): Boolean {
    return this._isHelpWanted;
  }
  public get author(): Resident {
    return this._author;
  }
  public get datePosted(): Date {
    return this._datePosted;
  }
  public get title(): String {
    return this._title;
  }
  public get description(): String {
    return this._description;
  }
  public get type(): String {
    return this._type;
  }
  public get candidates(): Resident[] {
    return this._candidates;
  }
}
