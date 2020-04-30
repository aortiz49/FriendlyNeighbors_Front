import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './login';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = environment.apiUrl + 'neighborhoods';

  constructor(private http: HttpClient) {}

  // TODO: get all logins
  // TODO: get login by username, by id sucks

  addLogin(neighId: number, login: Login): Observable<Login> {
    return this.http.post<Login>(`${this.apiUrl}/${neighId}/logins/`, login);
  }

  getLoginByUsername(neighId: number, username: String): Observable<Login> {
    return this.http.get<Login>(`${this.apiUrl}/${neighId}/logins/_${username}`);
  }
}
