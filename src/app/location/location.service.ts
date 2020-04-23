import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Location } from "./location";
import { environment } from "../../environments/environment";
import { Neighborhood } from '../neighborhood/neighborhood';

@Injectable({
  providedIn: "root",
})
export class LocationService {
  private apiUrl = environment.apiUrl + "neighborhoods";
  constructor(private http: HttpClient) {}

  getLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(this.apiUrl+'/198/'+'locations'+'/');
  }
}
