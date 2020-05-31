/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import{Resident} from "../resident/resident";
import { Neighborhood } from '../neighborhood/neighborhood';
import { ResidentDetail } from '../home/resident-detail';

/**
 *This class represents a business made by a resident
 */
export class Business {

    /**
     * Represents id of the business
     */

    public id: number;

    /**
     * The name of the business
     */
    public name: String;

    /**
     * The address where the business is located.
     */
    public address: String;

    /**
     * The time at which the business opens.
     */
    public openingTime: String;

    /**
     * The time at which the business closes.
     */
    public closingTime: String;

    /**
     * The rating on a scale of 1 to 5 of the business.
     */
    public rating: number;

    /**
     * The business's latitude.
     */
    public latitude: number;

    /**
     * The business's longitude.
     */
    public longitude: number;

    /**
     * The neighborhood of the business
     */
    public neighborhood: Neighborhood;

    /**
     * The resident the business belongs to.
     */
    public owner: ResidentDetail;



      constructor(
    name: string,
    address: string,
    openTime: string,
    closeTime: string,
    latitude: number,
    longitude: number,
    rating: number,
  ) {
    this.name = name;
    this.address = address;
    this.openingTime = openTime;
    this.closingTime = closeTime;
    this.latitude = latitude;
    this.longitude = longitude;
    this.rating = rating;
  }

}
