import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from './location';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private apiUrl = environment.apiUrl + 'neighborhoods';

  constructor(private http: HttpClient) {}

  // TODO: get all locations
  // TODO: get location by name, by id sucks

  addLocation(neighId: number, location: Location): Observable<Location> {

    var a:string = JSON.stringify(location);
    return this.http.post<Location>(`${this.apiUrl}/${neighId}/locations/`, location);
  }
}
