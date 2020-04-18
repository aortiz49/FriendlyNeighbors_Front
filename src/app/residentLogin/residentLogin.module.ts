import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Resident } from 'src/app/resident/resident';

@NgModule({
  imports: [
    CommonModule
  ],

})
export class ResidentLoginModule {

  constructor (private governmentIDA: string,
    private isActiveA: boolean, private passwordA: string,
     private usernameA: string ){ }
  private _private: Array<Resident>;
  public get private(): Array<Resident> {
    return this._private;
  }
  public set private(value: Array<Resident>) {
    this._private = value;
  }


get governmentID(): string { return this.governmentIDA; }
get password(): string { return this.passwordA; }
get username(): string { return this.usernameA; }
get isActive(): boolean { return this.isActiveA; }
}
