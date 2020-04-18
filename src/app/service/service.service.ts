import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Service } from "./Service";
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ServiceService {


private apiUrl = environment.apiUrl + "/service";
constructor(private http: HttpClient) {}
getService(): Observable<Service[]> {
  return this.http.get<Service[]>(this.apiUrl);
}
}

