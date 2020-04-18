import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resident } from 'src/app/resident/resident';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResidentLoginService {


private apiUrl = environment.apiUrl + "/residentLogin";
  constructor(private http: HttpClient) {}
  getResidentLogin(): Observable<Resident[]> {
    return this.http.get<Resident[]>(this.apiUrl);
}
}
