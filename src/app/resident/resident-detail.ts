/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {Resident} from '../resident/resident';

/**
 *This class represents a resident made by a resident
 */
export class ResidentDetail extends Resident {


    private _album: string[];


    get album(): string[] {
        return this._album;
    }

    set album(value: string[]) {
        this._album = value;
    }

}


