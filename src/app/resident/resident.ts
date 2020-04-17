/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import {Neighborhood} from "../neighborhood/neighborhood";

/**
 *This class represents a resident made by a resident
 */
export class Resident {

    /**
     * Represents id of the resident
     */

    public id: number;

    /**
     * Represents the neighborhood of resident
     */
    public neighborhood: Neighborhood;

    public name: string;

    public profilePicture: String;


    constructor() {
        this.id = -1;
        this.neighborhood = null;
        this.name = "";
        this.profilePicture = "";
    }
}
