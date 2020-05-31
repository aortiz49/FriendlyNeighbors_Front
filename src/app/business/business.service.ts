import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Business } from './business';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";


const API_URL = environment.apiUrl;
const businesses = "/businesses";
const neighborhoods = "/neighborhoods";

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  private apiUrl = environment.apiUrl + 'neighborhoods';

constructor(private http:HttpClient) { }



  getbusinesses(neighID: number):Observable<Business[]>{
    return this.http.get<Business[]>(
      "http://localhost:8080/s3_neighborhood-api/api/neighborhoods/" + neighID + "/businesses"
  );
  }

  addBusiness(neighId: number, business: Business, residentId: number): Observable<Business>{
    var a: string = JSON.stringify(business);
    return this.http.post<Business>(`${this.apiUrl}/${neighId}/residents/` + residentId + `/businesses/`,business);
  }
}
