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

  // TODO: get all logins
  // TODO: get login by username, by id sucks

  addLogin(neighId: number, login: Login): Observable<Login> {

    var a:string = JSON.stringify(login);
    return this.http.post<Login>(`${this.apiUrl}/${neighId}/logins/`, login);
  }
}
